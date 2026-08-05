import { transform } from '@svgr/core';
import { mkdir, readdir, readFile, rm, writeFile } from 'fs/promises';
import { join } from 'path';
import prettier from 'prettier';

const ROOT_DIR = process.cwd();
const ASSET_DIR = join(ROOT_DIR, 'src/shared/assets');
const SVG_DIR = join(ASSET_DIR, 'svg');
const COMPONENT_DIR = join(ASSET_DIR, 'components');
const INDEX_FILE = join(ASSET_DIR, 'index.tsx');

const HEADER_COMMENT = ['/**', ' * ⚠️ 자동 생성된 파일입니다. 직접 수정하지 마세요.', ' */'].join(
  '\n',
);

function toComponentName(filename: string): string {
  const nameWithoutExt = filename.replace(/\.svg$/i, '');
  return nameWithoutExt
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

function normalizeFillAttributes(svg: string): string {
  // fill="none"과 fill="url(#...)"(그라디언트/패턴/이미지 참조)는 색상이 아니라 구조적 참조이므로 건드리지 않는다.
  return svg.replace(/fill=(["'])(?!none\b|url\()[^"']*\1/gi, 'fill="currentColor"');
}

function extractViewBox(svg: string): string | null {
  const viewBoxMatch = svg.match(/viewBox=["']([^"']+)["']/i);
  return viewBoxMatch ? viewBoxMatch[1] : null;
}

async function ensureCleanComponentsDir() {
  await rm(COMPONENT_DIR, { recursive: true, force: true });
  await mkdir(COMPONENT_DIR, { recursive: true });
}

async function generateIconComponent(file: string) {
  const componentName = toComponentName(file);
  const outputPath = join(COMPONENT_DIR, `${componentName}.tsx`);
  const svgPath = join(SVG_DIR, file);
  const svgRaw = await readFile(svgPath, 'utf-8');
  const viewBox = extractViewBox(svgRaw);
  const sanitizedSvg = normalizeFillAttributes(svgRaw);

  const jsCode = await transform(
    sanitizedSvg,
    {
      typescript: true,
      jsxRuntime: 'automatic',
      expandProps: 'end',
      prettier: false,
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
    },
    { componentName, filePath: svgPath },
  );

  // viewBox가 없으면 추가
  let finalCode = jsCode;
  if (viewBox && !jsCode.includes('viewBox')) {
    finalCode = jsCode.replace(/<svg\s+([^>]*)>/, `<svg $1 viewBox="${viewBox}">`);
  }

  const projectPrettierConfig = (await prettier.resolveConfig(outputPath)) ?? {};
  const pretty = await prettier.format(finalCode, {
    ...projectPrettierConfig,
    parser: 'babel-ts',
  });
  const withImportSpacing = pretty.replace(
    /(import\s+type\s+\{[^}]+\}\s+from\s+'react';\n)(?!\n)/,
    '$1\n',
  );
  const final = `${HEADER_COMMENT}\n\n${withImportSpacing}`;
  await writeFile(outputPath, final, 'utf-8');

  return { file, componentName };
}

type GeneratedIcon = {
  file: string;
  componentName: string;
};

async function generateIndexFile(icons: GeneratedIcon[]) {
  const imports = `import type { SVGProps } from 'react';`;
  const iconType = `export type IconProps = SVGProps<SVGSVGElement>;`;

  const exportLines = icons
    .map(
      ({ componentName }) =>
        `export { default as ${componentName} } from './components/${componentName}';`,
    )
    .join('\n');

  const rawContent = `${HEADER_COMMENT}\n${imports}\n\n${iconType}\n\n${exportLines}\n`;

  const projectPrettierConfig = (await prettier.resolveConfig(INDEX_FILE)) ?? {};
  const content = await prettier.format(rawContent, {
    ...projectPrettierConfig,
    parser: 'babel-ts',
  });
  await writeFile(INDEX_FILE, content, 'utf-8');
}

export default async function generate() {
  try {
    const files = await readdir(SVG_DIR);
    const svgFiles = files.filter((f) => f.endsWith('.svg')).sort();

    await ensureCleanComponentsDir();

    const icons = await Promise.all(svgFiles.map(generateIconComponent));

    await generateIndexFile(icons);

    console.info('svg 파일을 React 컴포넌트로 변환했습니다!');
  } catch (e) {
    console.error('❌ 에러:', e);
    process.exit(1);
  }
}

void generate();
