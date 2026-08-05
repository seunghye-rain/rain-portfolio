# Tooling

이 문서는 이 프로젝트에서 코드 품질/포맷을 자동으로 맞춰주는 도구와, 반복 작업을 대신해주는 자동화 스크립트를 정리합니다. 코딩 스타일 자체는 [`conventions.md`](./conventions.md)를 참고하세요.

`pnpm build`는 `next build` 전에 `pnpm build:icons` → `pnpm barrels` → `pnpm lint:fix`를 순서대로 실행한다. 아이콘/배럴 산출물을 수동으로 갱신하지 않고 빌드만 돌려도 항상 최신 상태로 맞춰진다.

## 포맷팅 / Lint 자동화

- 포맷팅은 Prettier(`.prettierrc`)가, 코드 품질과 import 정렬은 ESLint(`eslint.config.mjs`)가 담당한다. Tailwind 클래스 순서는 `prettier-plugin-tailwindcss`가 자동으로 정렬한다.
- `git commit` 시 Husky의 `pre-commit` 훅이 `lint-staged`를 실행해, staged 파일에 한해 Prettier → ESLint 순으로 자동 적용한다. ESLint가 자동 수정할 수 없는 오류가 남으면 커밋이 중단된다.
- typecheck/build까지는 커밋마다 돌리기엔 무거워서 CI(`.github/workflows/ci.yml`)에서 검증한다.
- 아래 스크립트로 수동 실행도 가능하다.
  - `pnpm lint` / `pnpm lint:fix`
  - `pnpm format` / `pnpm format:check`

## 아이콘 (SVGR)

- 아이콘 원본은 `src/shared/assets/svg/icon-name.svg`처럼 케밥 케이스로 둔다.
- `pnpm build:icons`를 실행하면 `src/shared/assets/components/IconName.tsx`로 변환되고(파일명은 파스칼 케이스 컴포넌트 네이밍 규칙을 그대로 따름), `src/shared/assets/index.tsx`에 배럴로 모인다. `svg` 원본을 추가/수정/삭제했다면 커밋 전에 이 명령을 다시 실행한다.
- `fill` 속성은 스크립트가 `fill="currentColor"`로 자동 치환하므로, 색상은 아이콘을 쓰는 쪽에서 `text-*` 클래스나 `color`로 조절한다. `fill="none"`(stroke 아이콘)은 그대로 둔다.
- `src/shared/assets/components/**`, `src/shared/assets/index.tsx`는 자동 생성 파일이라 직접 수정하지 않는다.

## Barrel Export

- `src/shared/components/ui`, `src/shared/components/layout` 두 폴더에만 배럴(`index.ts`)을 자동 생성한다. 다른 `shared` 하위 폴더에는 적용하지 않는다.
- 새 공용 컴포넌트를 추가할 때는 `src/shared/components/ui/컴포넌트명/` 폴더를 만들고 그 안에 `index.ts`로 필요한 것만 `export`한다. `pnpm barrels`를 실행하면 `index.ts`가 있는 하위 폴더만 모아 `src/shared/components/ui/index.ts`(또는 `layout/index.ts`)를 재생성한다.
- 사이드 이펙트가 있는 모듈(전역 상태 초기화, DOM 조작 등)은 배럴에 넣지 않는다.
- 배럴 루트 `index.ts`는 자동 생성 파일이라 직접 수정하지 않는다.
