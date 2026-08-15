# Design

이 문서는 프로젝트 전반에 적용되는 디자인 공통 규칙을 정리합니다. 컬러/타이포그래피 토큰은 각각 [`color-token.md`](./color-token.md), [`typo-token.md`](./typo-token.md)를 참고하세요.

## 단위

- `px` 대신 `rem` 단위를 사용합니다. `html { font-size: 62.5%; }`(`src/styles/layout.css`)로 맞춰져 있어 `1rem = 10px`입니다.

## 지원 화면 너비

- 데스크탑 기준 지원 범위는 1920px ~ 1280px이고, 1025px까지는 레이아웃이 깨지지 않는 선에서 허용합니다. 보통 해당 사이트 컨텐츠 영역(Header, 본문 wrapper 등)의 너비 기준으로 봅니다.
- `body`에 `min-width: 102.5rem`(1025px)을 걸어 그 이하로는 줄어들지 않게 하되, `lg`(1024px) 이상에서만 적용합니다(`src/styles/layout.css`). `lg` 미만은 아래 브레이크포인트 정책에 따라 모바일 레이아웃으로 대응합니다.

## 반응형 브레이크포인트

- Tailwind v4 기본 브레이크포인트(`sm:640px md:768px lg:1024px xl:1280px`)를 그대로 사용하고, 커스텀 breakpoint 토큰은 추가하지 않습니다.
- `lg`(1024px) 이상은 기존 데스크톱 레이아웃, `lg` 미만은 모바일/태블릿 레이아웃입니다.
- 이미 데스크톱 전용으로 작성된 기존 컴포넌트를 모바일 대응할 때는, 전체를 모바일 우선으로 새로 쓰기보다 `max-lg:` variant로 모바일 전용 오버라이드를 얹는 방식을 기본으로 합니다. Header/Footer처럼 처음부터 모바일까지 함께 설계하는 공용 shell 컴포넌트는 모바일 우선(prefix 없음 = 모바일, `lg:`부터 데스크톱)으로 작성해도 됩니다.
- `src/styles/tokens/typography.css`의 타이포 클래스는 `@layer utilities`의 평범한 CSS 클래스라 `md:title-20-sb`처럼 반응형 variant를 붙일 수 없습니다. 폰트 크기는 브레이크포인트와 무관하게 고정 값을 씁니다. 폰트 반응형이 꼭 필요해지면 `@utility` 전환을 먼저 검토합니다.

## Layout 간격

- `Header`, `Footer` 컴포넌트를 제외한 내부 `children`은 양 옆 `padding` 8rem을 줍니다.
- `children`은 header보다 아래로 8rem, footer보다 위로 8rem 띄웁니다.

## Radius

- Tailwind의 기본 radius 스케일(`rounded-xl`, `rounded-l` 등)은 사용하지 않습니다.
- 값이 필요할 때마다 `rem` 단위를 Tailwind arbitrary value 문법(예: `rounded-[1.2rem]`)으로 직접 지정합니다.
- 별도의 radius 토큰(CSS 변수)은 정의하지 않습니다.
