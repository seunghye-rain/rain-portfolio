# code-quality

```txt
작성했거나 변경한 코드의 책임 분리, 폴더 위치, use client 범위, 컨벤션 준수를 검토합니다. 리팩터링 판단이나 구현을 마무리하기 전 자체 점검, PR 올리기 직전 검증에 사용합니다.
```

# 코드 품질 점검

## 스킬 설명

새로 만든 기능이 아니라, 이미 작성된(또는 방금 작성한) 코드를 검토하는 스킬입니다. 컨벤션 위반보다 구조적인 문제 — 책임이 뒤섞였는지, 위치가 맞는지, 클라이언트 경계가 필요 이상으로 넓어졌는지 — 를 우선 봅니다.

## 참조 문서

| 문서                                     | 참조 내용                                              |
| ---------------------------------------- | ------------------------------------------------------ |
| `docs/conventions/conventions.md`        | 네이밍, 함수/변수, import 규칙                         |
| `docs/architecture/project-structure.md` | `app` vs `shared` 배치 기준                            |
| `docs/conventions/tooling.md`            | Lint/포맷/생성 파일이 최신 상태인지 확인하는 기준      |
| `docs/design/color-token.md`             | 컬러 토큰과 Tailwind 클래스(`bg-black-9` 등) 대조 기준 |
| `docs/design/typo-token.md`              | 타이포 토큰 클래스(`title-20-bd` 등) 대조 기준         |

## 트리거

- "리뷰해줘", "리팩터링 필요할까?"
- 기능 구현을 마친 직후 마무리 점검
- `git-commit` 혹은 `git-pr` 스킬로 넘어가기 직전

## 해야 할 일

1. 파일 하나(또는 함수 하나)에 너무 많은 책임이 몰려 있지 않은지 확인합니다.
2. 반복되는 로직이 있으면 `hooks`, `utils`, `constants`로 분리할 필요가 있는지 판단합니다. 분리 기준은 `conventions.md`의 함수 절(여러 곳에서 쓰이면 `utils`, 전역에서 쓰이면 `shared/utils`)을 따릅니다.
3. `'use client'`가 실제 필요한 범위보다 넓게 걸려 있지 않은지 확인합니다. 상태/이펙트/이벤트가 없는 하위 트리는 서버 컴포넌트로 남을 수 있는지 봅니다.
4. 아래 명령으로 자동 검증 가능한 부분을 먼저 확인합니다.

   ```bash
   pnpm lint
   pnpm format:check
   pnpm build
   ```

   `src/shared/assets/svg`나 `src/shared/components/ui|layout` 하위를 바꿨다면 `pnpm build:icons` / `pnpm barrels`도 재실행해 생성 파일이 최신인지 확인합니다.

## 점검해야 할 내용

1. `conventions.md`의 네이밍/함수/import 규칙을 지켰는가?
2. 폴더 구조가 `project-structure.md` 기준에 맞는가?(페이지 전용 vs `shared` 배치)
3. 요구사항에 없는 코드(임시 코드, 사용하지 않는 import, 디버그 출력, 스코프 밖 리팩터링)가 섞여 있지 않은가?
4. 색상/타이포에 하드코딩된 hex·px 대신 `color-token.md`/`typo-token.md`의 클래스를 썼는가?
