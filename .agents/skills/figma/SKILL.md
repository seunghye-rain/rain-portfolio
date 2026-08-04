# figma

```txt
피그마 디자인을 이 프로젝트의 Tailwind 컴포넌트로 옮깁니다. 피그마 링크나 노드를 받아 색상·타이포·크기 값을 디자인 토큰과 rem 단위로 매핑하고, app-page 또는 shared-components 기준으로 컴포넌트를 배치할 때 사용합니다. 피그마 MCP 연동 후 활성화됩니다.
```

# 피그마 구현

## 스킬 설명

피그마에서 읽은 값을 그대로 하드코딩하지 않고, 이 프로젝트의 토큰·단위·배치 규칙으로 변환해서 컴포넌트를 만드는 작업입니다. 값 매핑까지가 이 스킬의 역할이고, 컴포넌트 자체를 어떻게 짤지는 `app-page`/`shared-components` 스킬의 규칙을 그대로 따릅니다.

## 참조 문서

| 문서                                     | 참조 내용                                                                              |
| ---------------------------------------- | -------------------------------------------------------------------------------------- |
| `docs/design/design.md`                  | 단위(1rem = 10px), layout 간격 규칙, radius 규칙(토큰 없음, rem 임의값만 사용)         |
| `docs/design/color-token.md`             | 컬러 토큰 네이밍(`--color-{category}-{scale}`)과 Tailwind 클래스(`bg-black-9` 등) 목록 |
| `docs/design/typo-token.md`              | 타이포 토큰 네이밍(`{category}-{크기}-{굵기 약어}`)과 클래스(`title-20-bd` 등) 목록    |
| `docs/architecture/project-structure.md` | 컴포넌트를 페이지 폴더 하위에 둘지 `shared/components`에 둘지 판단하는 기준            |
| `docs/conventions/conventions.md`        | 컴포넌트 작성 규칙                                                                     |
| `docs/conventions/tooling.md`            | barrel export 실행 시점과 규칙                                                         |

## 트리거

- "피그마에서 이 컴포넌트 만들어줘"
- 피그마 링크 또는 노드 ID를 제공받은 경우

## 해야 할 일

### 1. 노드 읽기

Figma MCP로 대상 노드의 크기, 색상, 폰트, 간격, radius, variant를 읽습니다.

### 2. 값 매핑

- **색상**: `docs/design/color-token.md`에서 같은 hex의 토큰을 찾아 그 Tailwind 클래스를 그대로 씁니다(`bg-black-9`, `text-yellow-1`처럼 클래스명이 토큰명과 1:1 대응). 표에 없는 hex라면 `--color-{category}-{scale}` 네이밍 규칙을 참고해 `src/styles/tokens/color.css`에 토큰을 추가한 뒤 사용합니다.
- **타이포**: `docs/design/typo-token.md`에서 같은 크기/굵기 조합의 클래스(`title-20-bd`, `font-16-md` 등)를 찾아 씁니다. 컬러와 달리 Tailwind가 클래스를 자동으로 만들어주지 않으므로, 필요한 조합이 없으면 `{category}-{크기(px)}-{굵기 약어}` 네이밍 규칙에 맞춰 `src/styles/tokens/typography.css`에 클래스를 직접 추가합니다.
- **크기/간격**: rem으로 변환합니다. `html { font-size: 62.5%; }`(`src/styles/layout.css`)로 `1rem = 10px`입니다.

  | 피그마 값 | 변환     |
  | --------- | -------- |
  | 10px      | `1rem`   |
  | 20px      | `2rem`   |
  | 18px      | `1.8rem` |

  Tailwind 기본 스케일(`p-4`, `gap-2`, `w-6` 등)은 16px 기준 rem이라 이 프로젝트의 10px 기준과 어긋나므로, 크기·간격 값은 스케일 클래스 대신 `w-[1.8rem]`처럼 항상 rem 임의값으로 씁니다. px 임의값(`w-[18px]`)은 쓰지 않습니다.

- **Radius**: 별도 토큰이 없습니다. Tailwind 기본 radius 스케일(`rounded-xl` 등)을 쓰지 않고, `rounded-[1.2rem]`처럼 항상 rem 임의값으로 직접 지정합니다.

### 3. 배치 결정

`docs/architecture/project-structure.md` 기준으로 판단합니다.

- 지금 작업 중인 페이지에서만 쓰인다 → 해당 페이지 폴더 하위
- 이미 다른 페이지에서도 쓰이는 게 확인됐다 → `src/shared/components/ui` 또는 `layout`

### 4. 구현

- `conventions.md`를 따라 Props 타입(`컴포넌트명 + Props`)을 선언합니다.
- 조건부 클래스는 `cn()`(`src/lib/utils.ts`)을 사용합니다.
- 상태나 이벤트 핸들러가 필요 없다면 `'use client'` 없이 순수 UI로 만듭니다. props만 받는 형태로 먼저 시도하고, 정말 필요할 때만 클라이언트 컴포넌트로 전환합니다.
- Header/Footer를 제외한 `children` 영역을 다루는 layout 컴포넌트라면 `design.md`의 간격 규칙(좌우 padding 8rem, header/footer와 8rem 간격)을 따릅니다.
- `shared/components`에 두는 경우 `index.ts`를 작성하고 `pnpm barrels`를 실행합니다.

## 점검해야 할 내용

1. 색상/타이포에 하드코딩된 hex·px 대신 `color-token.md`/`typo-token.md`의 클래스를 썼는가?
2. 파일 위치가 적절한가? (페이지 전용 vs `shared`)
3. rem으로 변환됐는가? (px 임의값이 남아 있지 않은가?)
4. radius에 Tailwind 기본 스케일이 아니라 rem 임의값을 썼는가?
5. 최대한 순수 UI로 구성됐는가? (불필요한 `'use client'`가 없는가?)
