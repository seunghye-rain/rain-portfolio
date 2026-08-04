import { existsSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT_DIR = process.cwd();
const INDEX_FILENAME = 'index.ts';

// 배럴 파일을 자동 생성할 대상 폴더. 하위 폴더가 자체 index.ts를 가지고 있을 때만 export합니다.
const BARREL_TARGET_DIRS = [
  join(ROOT_DIR, 'src/shared/components/ui'),
  join(ROOT_DIR, 'src/shared/components/layout'),
];

const HEADER_COMMENT = '// ⚠️ 자동 생성된 파일입니다. 직접 수정하지 마세요.';

function generateBarrelIndex(targetDir: string) {
  if (!existsSync(targetDir)) {
    console.log(`ℹ️ ${targetDir} 폴더가 없어 건너뜁니다.`);
    return;
  }

  const entries = readdirSync(targetDir, { withFileTypes: true });
  const exportLines: string[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const subIndexPath = join(targetDir, entry.name, INDEX_FILENAME);
    if (!existsSync(subIndexPath)) continue;

    exportLines.push(`export * from './${entry.name}/index';`);
  }

  const indexPath = join(targetDir, INDEX_FILENAME);

  if (exportLines.length === 0) {
    if (existsSync(indexPath)) {
      unlinkSync(indexPath);
      console.log(`🗑️ ${indexPath} 삭제 완료 (export할 하위 모듈 없음)`);
    } else {
      console.log(`ℹ️ ${targetDir}에 export할 하위 모듈이 없습니다.`);
    }
    return;
  }

  const content = `${HEADER_COMMENT}\n${exportLines.sort().join('\n')}\n`;
  const prev = existsSync(indexPath) ? readFileSync(indexPath, 'utf-8') : '';

  if (prev === content) {
    console.log(`ℹ️ ${indexPath} 변경 사항 없음`);
    return;
  }

  writeFileSync(indexPath, content, 'utf-8');
  console.log(`✅ ${indexPath} 생성/갱신 완료`);
}

for (const targetDir of BARREL_TARGET_DIRS) {
  generateBarrelIndex(targetDir);
}
