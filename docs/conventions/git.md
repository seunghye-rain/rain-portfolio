# Git Convention

이 문서는 PR 작성 요령, PR 제목 규칙, 커밋 메시지 기준을 정리하는 문서입니다.

## Commit

| 접두사     | 의미                                                       |
| ---------- | ---------------------------------------------------------- |
| `init`     | 프로젝트 초기 세팅                                         |
| `feat`     | 새로운 기능 추가                                           |
| `fix`      | 버그 수정                                                  |
| `docs`     | 문서 변경                                                  |
| `design`   | UI 변경                                                    |
| `refactor` | 프로덕션 코드 리팩토링                                     |
| `test`     | 테스트 추가/리팩토링 (프로덕션 코드 변경 없음)             |
| `chore`    | 빌드 설정, 패키지 매니저 설정 등 (프로덕션 코드 변경 없음) |
| `deploy`   | 배포                                                       |

## Branch

`{접두사}/{작업 내용}` 형태로 만듭니다.

```txt
feat/login-page
docs/update-app-structure
init/setup-project
```

접두사는 Commit 접두사 규칙을 그대로 따릅니다.

## Pull Request

### 제목

`[접두사] 작업 내용` 형태로 작성합니다. 접두사는 Commit 접두사와 동일하되 첫 글자만 대문자로 씁니다.

```txt
[Feat] 로그인 페이지 구현
[Fix] 로그인 레이아웃 수정
```

### 템플릿 및 작성 요령

```markdown
## 📍 Task

주요 수행한 작업을 번호로 나열

## 📝 Summary

각 번호에 대한 작업을 최대 세 줄로 요약

## 🚀 Description

각 번호에 대한 작업을 상세하게 서술

- 어떤 작업을 했는지
- 어떤 이유로 이 방식을 선택했는지
- 어떤 기능을 왜, 어떻게 사용했는지

나중에 스스로 다시 읽었을 때 빠르게 이해할 수 있고, 팀원이 별도 설명 없이 PR만 읽어도 맥락을 파악할 수 있는 수준으로 작성

## ETC

기타 공유할 사항
```

### 자동화

PR을 열면 GitHub Actions가 아래를 자동으로 처리합니다 (`.github/workflows/`).

- **PR Triage**: PR 작성자를 assignee로 지정하고, PR 제목의 접두사(`[Feat]`, `[Fix]` 등)를 보고 미리 만들어둔 같은 의미의 라벨을 붙입니다. 제목을 수정하면 라벨도 다시 계산됩니다.
- **CI**: `develop`, `main`으로의 PR에서 `pnpm lint`, `pnpm build`를 실행합니다.

배포는 GitHub Actions가 아니라 Vercel의 Git 연동이 담당하며, `main` 브랜치 push만 Production으로 배포되도록 Vercel 프로젝트 설정(Production Branch)이 되어 있어야 합니다.
