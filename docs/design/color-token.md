# Color Token

이 문서는 프로젝트에서 쓰는 컬러 토큰 규약을 정리합니다.

## 네이밍 규칙

- Tailwind CSS 클래스명과 1:1 대응을 원칙으로 한다.
- CSS 변수명: `--color-{category}-{scale}` (`black`, `yellow` 등 카테고리 + 숫자 스케일)
- `@theme`에 정의된 CSS 변수는 Tailwind v4가 자동으로 `bg-*`, `text-*`, `border-*` 등의 유틸리티 클래스로 만들어준다. 별도로 `tailwind.config`에 등록할 필요가 없다.
- 컴포넌트 내에서는 `bg-black-9`, `text-yellow-1`처럼 Tailwind 클래스를 직접 사용한다.

## Color

- 소스: `src/styles/tokens/color.css`
- Tailwind 클래스 사용 예: `bg-black-9`, `text-yellow-1`, `border-black-4`

### Black (Grayscale)

| 토큰     | CSS 변수           | 값        |
| -------- | ------------------ | --------- |
| black-1  | `--color-black-1`  | `#ffffff` |
| black-2  | `--color-black-2`  | `#fcfcfc` |
| black-3  | `--color-black-3`  | `#f5f5f5` |
| black-4  | `--color-black-4`  | `#eaeaea` |
| black-5  | `--color-black-5`  | `#e3e3e3` |
| black-6  | `--color-black-6`  | `#bfbfbf` |
| black-7  | `--color-black-7`  | `#8c8c8c` |
| black-8  | `--color-black-8`  | `#595959` |
| black-9  | `--color-black-9`  | `#313131` |
| black-10 | `--color-black-10` | `#000000` |

### Yellow

| 토큰     | CSS 변수           | 값        |
| -------- | ------------------ | --------- |
| yellow-1 | `--color-yellow-1` | `#ffcd19` |
| yellow-2 | `--color-yellow-2` | `#ffda2c` |
| yellow-3 | `--color-yellow-3` | `#ffec85` |
| yellow-4 | `--color-yellow-4` | `#ffefb4` |
| yellow-5 | `--color-yellow-5` | `#fffde1` |
| yellow-6 | `--color-yellow-6` | `#ebc351` |

## Gradient

| 유틸리티 클래스 | CSS 변수        | 값                                                     |
| --------------- | --------------- | ------------------------------------------------------ |
| `gradient-bg`   | `--gradient-bg` | `linear-gradient(180deg, #fff 14.3%, #fffde1 110.24%)` |
