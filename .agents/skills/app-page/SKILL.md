# app-page

```txt
Next.js App Router 페이지, route, layout과 화면 흐름을 src/app 하위에 구현하거나 검토합니다. 새 페이지, 페이지 전용 UI, Server/Client Component 경계를 다루는 작업에 사용합니다.
```

# 페이지 구현

## 스킬 설명

`src/app` 아래에 route를 만들고, 그 페이지에서만 쓰이는 화면을 조립하는 작업입니다. 페이지 전용 코드와 여러 페이지가 함께 쓰는 코드를 구분하는 것이 이 스킬의 핵심입니다.

## 참조 문서

| 문서                                     | 참조 내용                                                                                |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| `docs/architecture/project-structure.md` | `app` 절: 페이지 폴더 하위에 `mocks/`, `components/`를 두는 기준, `shared`로 옮기는 시점 |
| `docs/conventions/conventions.md`        | 네이밍, 컴포넌트 작성 규칙, import 규칙(`@/` 사용 기준)                                  |
| `docs/conventions/tooling.md`            | 포맷/Lint 자동 적용 방식                                                                 |

## 트리거

- "페이지 만들어줘", "이 route 구현해줘"
- 기존 페이지의 화면 흐름/레이아웃 변경 요청

## 해야 할 일

1. route 경로와 진입 흐름을 확인합니다. (`src/app/(home)`, `resume`, `marketing`, `develop`, `article` 중 어디인지, 신규 route인지)
2. 이 페이지에서만 쓰는 코드(mock 데이터, 컴포넌트)는 해당 페이지 폴더 하위에 둡니다. 다른 페이지에서도 필요해지는 게 확인된 시점에만 `src/shared`로 옮깁니다. 지금 당장 재사용 가능성만으로 미리 옮기지 않습니다.
3. `page.tsx`, `layout.tsx`는 기본적으로 Server Component로 둡니다. `useState`, 이벤트 핸들러, `useEffect`, 브라우저 API가 필요한 가장 작은 단위에만 `'use client'`를 붙입니다. 페이지 전체를 클라이언트 경계로 만들지 않습니다.
4. 크기·간격 값은 px 대신 rem을 사용합니다. Tailwind 기본 유틸리티(`p-4`, `gap-2` 등)는 이미 rem 기반이라 그대로 쓰면 되고, 기본 스케일에 없는 값만 `w-[1.125rem]`처럼 임의값을 rem으로 씁니다.
5. 색상/타이포는 `src/styles/tokens`의 디자인 토큰을 사용합니다. hex 값을 직접 쓰지 않습니다.
6. 클래스를 조건부로 조합할 때는 `cn()`(`src/lib/utils.ts`)을 사용합니다.
7. 2단계(`../../`) 이상 상위 경로를 참조해야 하면 절대 경로(`@/`)를 씁니다.

## 점검해야 할 내용

- 페이지 전용 코드와 `shared`로 옮길 코드가 명확히 구분되어 있는가?
- 불필요하게 넓은 `'use client'` 경계가 없는가?
- rem 단위, 디자인 토큰, `cn()` 사용 기준을 지켰는가?
- `conventions.md`의 네이밍/import 규칙을 지켰는가?
- loading/empty/error 등 화면에 필요한 상태가 요구사항만큼 처리되어있는가?
