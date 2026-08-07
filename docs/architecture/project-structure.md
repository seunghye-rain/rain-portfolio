# Project Structure

이 문서는 rain-portfolio 프로젝트의 최상위 폴더 구조와 각 폴더가 어떤 역할을 하는지 정리합니다. 새로운 파일을 어디에 둬야 할지 애매할 때 먼저 참고하는 문서입니다.

## 전체 구조

```txt
rain-portfolio/
├── src/
│   ├── app/                    # 라우팅 (App Router)
│   │   ├── (home)/
│   │   ├── resume/
│   │   ├── marketing/
│   │   ├── develop/
│   │   └── article/
│   │
│   ├── shared/                 # 여러 페이지가 함께 쓰는 코드
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── constants/
│   │   ├── assets/
│   │   │   ├── svg/             # 아이콘 원본 SVG
│   │   │   └── components/      # svgr로 자동 생성된 아이콘 컴포넌트
│   │   └── components/
│   │       ├── ui/
│   │       └── layout/
│   │
│   ├── lib/                    # 외부 라이브러리 연동 코드
│   │
│   └── styles/                 # 전역 스타일
│       ├── global.css
│       └── tokens/
│           ├── color.css
│           └── typography.css
│
├── scripts/                # 자동화 스크립트
│
├── docs/                   # 프로젝트 문서
│   ├── conventions/
│   ├── agents/
│   ├── architecture/
│   └── design/
│
└── public/
    └── imgs/                # 로고 등 공용 이미지
```

`app`, `shared`, `lib`, `styles`는 `src/` 하위에 둡니다. `scripts`, `docs`, `public`은 소스 코드가 아니라 루트에 그대로 둡니다. `@/`는 `src/`를 가리키므로(`tsconfig.json`), 코드에서는 `@/app/...`, `@/shared/...`처럼 `src/`를 생략하고 씁니다.

## app

Next.js App Router를 그대로 사용합니다. 현재 페이지 단위는 `(home)`, `resume`, `marketing`, `develop`, `article`입니다.

각 페이지 폴더 하위에는 그 페이지에서만 쓰는 `mocks/`, `components/` 등을 자유롭게 둘 수 있습니다. 즉, 특정 페이지 전용 코드는 페이지 폴더 안에 두고, 다른 페이지에서도 재사용해야 하는 순간 `shared`로 옮기는 방식입니다.

## shared

특정 페이지에 종속되지 않고 프로젝트 전역에서 재사용되는 코드를 둡니다.

| 폴더                | 용도                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hooks`             | 여러 페이지에서 쓰는 공통 커스텀 훅                                                                                                                                       |
| `utils`             | 공통 유틸 함수                                                                                                                                                            |
| `constants`         | 공통 상수                                                                                                                                                                 |
| `assets/svg`        | 아이콘 원본 SVG 파일                                                                                                                                                      |
| `assets/components` | `pnpm build:icons`로 자동 생성된 아이콘 컴포넌트 (직접 수정 금지)                                                                                                         |
| `components/ui`     | 버튼, 인풋, 헤더, 푸터처럼 화면에 실제로 렌더링되는 공용 UI 컴포넌트                                                                                                      |
| `components/layout` | 텍스트/이미지 등 여러 컨텐츠 슬롯을 어떻게 배치할지 정의하는 컴포넌트. 피그마 컴포넌트 이름에 `Layout`이 붙어 있으면(`FeatureTextLayout`, `ArticleLayout` 등) 여기로 둔다 |

페이지 전용으로 만들었다가 다른 페이지에서도 필요해지는 시점에 `app/(도메인)` 하위에서 이곳으로 옮기면 됩니다.

`components/ui`, `components/layout`은 하위 폴더에 자체 `index.ts`가 있으면 `pnpm barrels`로 루트 `index.ts`가 자동 생성됩니다(마찬가지로 직접 수정 금지). 다른 `shared` 폴더에는 적용하지 않습니다.

## scripts

빌드/개발에 필요한 자동화 스크립트를 둡니다. `tsx`로 직접 실행하며, `package.json`의 스크립트로 노출합니다.

- `generate-icon-exports.ts` (`pnpm build:icons`) : `src/shared/assets/svg/*.svg`를 읽어 `fill`을 `currentColor`로 치환하고, `@svgr/core`로 `src/shared/assets/components/*.tsx` 아이콘 컴포넌트와 `src/shared/assets/index.tsx` 배럴 파일을 생성합니다.
- `generate-barrel-exports.ts` (`pnpm barrels`) : `src/shared/components/ui`, `src/shared/components/layout` 하위에서 자체 `index.ts`를 가진 폴더만 모아 각 폴더의 루트 `index.ts`를 생성합니다.

두 스크립트 모두 산출물에 "자동 생성된 파일" 헤더를 남기고, 소스(svg 파일, 하위 컴포넌트 폴더)가 바뀌면 다시 실행해서 재생성한 뒤 커밋합니다.

## lib

프로젝트에서 쓰는 외부 라이브러리 관련 코드를 둡니다. 예를 들어 tailwind 클래스 병합에 쓰는 `cn` 유틸 함수가 여기에 위치합니다.

## styles

전역 스타일과 디자인 토큰을 관리합니다.

- `global.css` : 전역 스타일 시트
- `tokens/color.css` : 프로젝트 컬러 토큰
- `tokens/typography.css` : 프로젝트 폰트 토큰

## docs

프로젝트 문서화를 위한 공간입니다.

- `conventions/` : 이 프로젝트에서 지켜야 할 컨벤션 문서 (`conventions.md`, `commit.md`, `git.md`, `tooling.md`)
- `agents/` : AI 관련 파일 정리
- `architecture/` : 이 문서를 포함한 프로젝트 구조 문서
- `design/` : 디자인 공통 규칙과 컬러/타이포그래피 토큰 문서 (`design.md`, `color-token.md`, `typo-token.md`)

## public/imgs

로고 등 여러 페이지에서 공용으로 사용하는 이미지를 둡니다.
