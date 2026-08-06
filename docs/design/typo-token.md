# Typography Token

이 문서는 프로젝트에서 쓰는 타이포그래피 토큰 규약을 정리합니다.

기본 폰트는 Pretendard입니다. `src/app/layout.tsx`에서 `next/font/local`로 `public/fonts/PretendardVariable.woff2`를 로드해 `<html>`에 적용합니다.

## 네이밍 규칙

- 클래스명 형식: `{category}-{크기(px)}-{굵기 약어}`
- category: `display`(가장 큰 타이틀) · `title` · `font`(본문) · `caption`
- 굵기 약어: `rg` = Regular(400) · `md` = Medium(500) · `sb` = SemiBold(600) · `eb` = 700 · `bd` = 700(단, `font-14-bd`, `caption-14-bd`는 예외로 600)
- 컬러 토큰과 달리 CSS 변수가 아니라 `@layer utilities`에 직접 정의된 클래스라 Tailwind가 자동으로 만들어주지 않는다. 새 크기가 필요하면 `src/styles/tokens/typography.css`에 클래스를 직접 추가해야 한다.
- 모든 클래스의 `letter-spacing: -0.2px`는 공통 적용됩니다. `line-height`는 클래스마다 다릅니다 (아래 표 참고).

## Typography

- 소스: `src/styles/tokens/typography.css`
- 클래스 사용 예: `className="title-20-bd"`, `className="font-16-md"`

### Display

| 클래스          | 크기          | 굵기 | line-height |
| --------------- | ------------- | ---- | ----------- |
| `display-sb-50` | 5rem (50px)   | 600  | 1.4         |
| `display-sb-42` | 4.2rem (42px) | 600  | 1.2         |
| `display-sb-36` | 3.6rem (36px) | 600  | 1.2         |
| `display-sb-32` | 3.2rem (32px) | 600  | 1.3         |

### Title

| 클래스        | 크기          | 굵기 | line-height |
| ------------- | ------------- | ---- | ----------- |
| `title-30-eb` | 3rem (30px)   | 700  | 1.2         |
| `title-26-eb` | 2.6rem (26px) | 700  | 1.2         |
| `title-26-sb` | 2.6rem (26px) | 600  | 1.2         |
| `title-24-md` | 2.4rem (24px) | 500  | 1.4         |
| `title-23-sb` | 2.3rem (23px) | 600  | 1.2         |
| `title-23-eb` | 2.3rem (23px) | 700  | 1.2         |
| `title-23-md` | 2.3rem (23px) | 500  | 1.2         |
| `title-20-sb` | 2rem (20px)   | 600  | 1.3         |
| `title-20-bd` | 2rem (20px)   | 700  | 1.3         |
| `title-20-md` | 2rem (20px)   | 500  | 1.3         |

### Font (본문)

| 클래스       | 크기          | 굵기 | line-height |
| ------------ | ------------- | ---- | ----------- |
| `font-18-bd` | 1.8rem (18px) | 700  | 1.4         |
| `font-18-md` | 1.8rem (18px) | 500  | 1.4         |
| `font-18-rg` | 1.8rem (18px) | 400  | 1.4         |
| `font-16-bd` | 1.6rem (16px) | 700  | 1.4         |
| `font-16-sb` | 1.6rem (16px) | 600  | 1.4         |
| `font-16-md` | 1.6rem (16px) | 500  | 1.3         |
| `font-16-rg` | 1.6rem (16px) | 400  | 1.3         |
| `font-23-rg` | 2.3rem (23px) | 400  | 1.3         |
| `font-14-bd` | 1.4rem (14px) | 600  | 1.4         |

### Caption

| 클래스          | 크기          | 굵기 | line-height |
| --------------- | ------------- | ---- | ----------- |
| `caption-14-bd` | 1.4rem (14px) | 600  | 1.2         |
| `caption-14-md` | 1.4rem (14px) | 500  | 1.4         |
| `caption-14-rg` | 1.4rem (14px) | 400  | 1.6         |
