# shared-components

```txt
여러 페이지가 함께 쓰는 공용 UI·layout 컴포넌트를 src/shared/components에 구현하거나 검토합니다. 공통화 판단, 디자인 토큰 적용, barrel export 갱신을 다룰 때 사용합니다.
```

# 공용 컴포넌트 구현

## 스킬 설명

특정 페이지에 종속되지 않고 여러 페이지에서 재사용되는 UI를 `src/shared/components`에 만드는 작업입니다. 언제 공용으로 올릴지 판단하는 것과, 올린 뒤 barrel export를 최신 상태로 유지하는 것까지 포함합니다.

## 참조 문서

| 문서                                     | 참조 내용                                                                    |
| ---------------------------------------- | ---------------------------------------------------------------------------- |
| `docs/architecture/project-structure.md` | `shared` 절: `components/ui` vs `components/layout` 구분, barrel export 규칙 |
| `docs/conventions/conventions.md`        | 컴포넌트 네이밍, Props 타입(`컴포넌트명 + Props`), children 활용             |
| `docs/conventions/tooling.md`            | Barrel Export 절: `pnpm barrels` 실행 시점과 규칙                            |

## 트리거

- "공용 컴포넌트로 만들어줘", "shared로 옮겨줘"
- 같은 UI가 두 페이지 이상에서 필요해진 경우

## 공통화 판단

기본은 페이지 폴더 하위입니다. 아래 조건을 확인하고, 실제로 다른 페이지에서도 쓰인다는 게 확인된 경우에만 `shared`로 옮깁니다.

- 두 개 이상의 페이지에서 동일하거나 거의 동일한 형태로 쓰인다.
- 특정 페이지의 도메인 지식 없이 props만으로 설명할 수 있다.
- 미래에 재사용될 것 같다는 추측만으로는 옮기지 않는다.

버튼, 인풋처럼 UI 요소면 `components/ui`, 헤더/푸터처럼 화면 구조를 담당하면 `components/layout`에 둡니다.

## 해야 할 일

1. 위 기준으로 공용화 대상인지 먼저 판단합니다.
2. 컴포넌트 폴더를 만들고 자체 `index.ts`를 둡니다. (`src/shared/components/ui/컴포넌트명/`)
3. 가능하면 `'use client'` 없이 동작하는 순수 UI로 만듭니다. props로 상태와 핸들러를 받는 형태를 먼저 시도하고, 내부 상태·이펙트가 꼭 필요할 때만 클라이언트 컴포넌트로 만듭니다.
4. 색상/타이포는 `src/styles/tokens`의 토큰을 사용합니다. 필요한 hex/폰트 값이 토큰에 없으면 임의로 새 이름을 짓지 말고, 기존 토큰 네이밍 패턴을 참고해 토큰을 추가합니다.
5. 크기·간격은 rem 단위로 씁니다(px 사용 금지).
6. 조건부 클래스는 `cn()`(`src/lib/utils.ts`)으로 조합합니다.
7. `conventions.md` 기준으로 Props 타입(`컴포넌트명 + Props`)을 선언하고, 공용 컴포넌트답게 `children`을 적극 활용합니다.
8. 변경 후 `pnpm barrels`를 실행해 `components/ui/index.ts` 또는 `components/layout/index.ts`를 재생성합니다. 이 파일은 자동 생성 파일이므로 직접 고치지 않습니다.

## 점검해야 할 내용

- 공용화 근거가 추측이 아니라 실제 사용처 기준인가?
- `ui`/`layout` 배치가 적절한가?
- 디자인 토큰을 사용했고 하드코딩된 hex가 없는가?
- rem 단위, `cn()` 사용 기준을 지켰는가?
- `pnpm barrels`를 실행해서 배럴이 최신 상태인가?
- 불필요하게 넓은 `'use client'` 경계가 없는가?
