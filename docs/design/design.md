# Design

이 문서는 프로젝트 전반에 적용되는 디자인 공통 규칙을 정리합니다. 컬러/타이포그래피 토큰은 각각 [`color-token.md`](./color-token.md), [`typo-token.md`](./typo-token.md)를 참고하세요.

## 단위

- `px` 대신 `rem` 단위를 사용합니다. `html { font-size: 62.5%; }`(`src/styles/layout.css`)로 맞춰져 있어 `1rem = 10px`입니다.

## Layout 간격

- `Header`, `Footer` 컴포넌트를 제외한 내부 `children`은 양 옆 `padding` 8rem을 줍니다.
- `children`은 header보다 아래로 8rem, footer보다 위로 8rem 띄웁니다.

## Radius

- Tailwind의 기본 radius 스케일(`rounded-xl`, `rounded-l` 등)은 사용하지 않습니다.
- 값이 필요할 때마다 `rem` 단위를 Tailwind arbitrary value 문법(예: `rounded-[1.2rem]`)으로 직접 지정합니다.
- 별도의 radius 토큰(CSS 변수)은 정의하지 않습니다.
