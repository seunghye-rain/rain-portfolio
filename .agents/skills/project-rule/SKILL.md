# project-rule

```txt
rain-portfolio 저장소에서 새 작업을 시작하기 전에 브랜치 상태, 폴더 구조, 컨벤션 문서를 먼저 파악합니다. 다른 스킬을 고르기 전, 거의 모든 작업 요청에서 가장 먼저 읽습니다.
```

# 프로젝트 파악

## 스킬 설명

이 프로젝트가 지금 어떤 상태이고 어떤 규칙 위에서 움직이는지 확인하는 스킬입니다. 추측으로 코드를 만들지 않고, 실제 브랜치/코드/문서를 먼저 본 다음 다른 스킬(app-page, shared-components, figma, code-quality, git 등)로 넘어가기 위한 진입점입니다.

## 참조 문서

| 문서                                     | 참조 내용                                  |
| ---------------------------------------- | ------------------------------------------ |
| `docs/architecture/project-structure.md` | 폴더별 역할, `app` vs `shared` 배치 기준   |
| `docs/conventions/conventions.md`        | 네이밍, 변수/함수, import 규칙             |
| `docs/conventions/commit.md`             | 커밋 접두사, 커밋 단위 기준                |
| `docs/conventions/git.md`                | 브랜치명, PR 제목/템플릿                   |
| `docs/conventions/tooling.md`            | Lint/포맷 자동화, SVGR, Barrel Export      |
| `docs/agents/skills-index.md`            | 다음에 어떤 스킬로 넘어갈지 판단할 때 참고 |

## 트리거

- 새로운 작업 요청을 받은 직후, 다른 스킬을 고르기 전에 항상
- "이 프로젝트 구조가 어떻게 돼?", "컨벤션이 뭐야?" 같은 질문
- 오랜만에 돌아와서 현재 브랜치/변경사항이 뭔지 확인이 필요할 때

## 해야 할 일

1. 브랜치와 변경사항을 확인합니다.

   ```bash
   git branch --show-current
   git status --short
   git log --oneline -5
   ```

2. 실제 폴더 구조를 확인합니다. `docs/architecture/project-structure.md`는 의도한 구조이고, 실제 코드가 그보다 우선합니다.

   ```bash
   find src -type f | sort
   ```

3. 작업 성격에 맞는 문서를 위 목록에서 골라 읽습니다. 페이지/컴포넌트 구현이면 `project-structure.md` + `conventions.md`, git 작업이면 `commit.md`/`git.md`.
4. 손댈 위치와 가까운 기존 코드를 먼저 찾아 패턴을 확인합니다. 문서만 보고 새 패턴을 만들지 않습니다.
5. 작업 성격에 맞는 다음 스킬로 넘어갑니다 (`docs/agents/skills-index.md` 참고).

## 점검해야 할 내용

- 지금 브랜치와 변경사항이 무엇인지 설명할 수 있는가?
- 이번 작업이 어떤 문서를 기준으로 하는지 짚을 수 있는가?
- 비슷한 걸 이미 하고 있는 기존 코드를 확인했는가?
- 사용자가 분석/계획만 요청했다면 이 단계에서 멈추고 파일을 수정하지 않았는가?
