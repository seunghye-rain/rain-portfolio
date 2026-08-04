<!-- BEGIN:nextjs-agent-rules -->

# rain-portfolio Agent Guide

이 저장소에서 작업하는 Claude Code와 Codex의 공통 진입점입니다. 세부 규칙의 원문은 `docs/`와 `.agents/skills/`에 있으며, 이 파일에는 중복해서 옮겨 적지 않습니다.

## 절대 규칙

새 작업 요청을 받으면 구현을 시작하기 전에 아래 순서를 반드시 지킵니다.

1. 아래 Skill Routing 표에서 요청에 해당하는 스킬을 찾습니다.
2. 해당 `SKILL.md`를 Read 도구로 먼저 읽습니다. 읽기 전에는 어떤 작업도 시작하지 않습니다.
3. `SKILL.md`의 구성(참조 문서 → 해야 할 일 → 점검해야 할 내용)을 그대로 따릅니다.
4. 요청이 여러 스킬에 걸치면 `project-rule`을 먼저 읽고 이어질 스킬 순서를 정합니다.
5. 표에 해당하는 트리거가 없으면 `project-rule`로 시작해 관련 문서를 직접 확인합니다.

## Skill Routing

| 트리거                                     | 스킬                                        |
| ------------------------------------------ | ------------------------------------------- |
| 새 작업 시작, 브랜치/구조/컨벤션 파악      | `.agents/skills/project-rule/SKILL.md`      |
| 페이지·route·화면 흐름 구현                | `.agents/skills/app-page/SKILL.md`          |
| 여러 페이지가 함께 쓰는 UI·layout 컴포넌트 | `.agents/skills/shared-components/SKILL.md` |
| 피그마 링크·노드로 컴포넌트 구현           | `.agents/skills/figma/SKILL.md`             |
| 리팩터링 판단, 구현 마무리 전 자체 점검    | `.agents/skills/code-quality/SKILL.md`      |
| 커밋 작성                                  | `.agents/skills/git/commit/SKILL.md`        |
| PR 작성                                    | `.agents/skills/git/pr/SKILL.md`            |

전체 스킬 목록과 트리거 요약, 스킬 간 이어지는 흐름은 `docs/agents/skills-index.md`에 정리되어 있습니다.

## Repository

- Stack: Next.js (App Router), TypeScript, React, Tailwind CSS
- Package manager: pnpm
- Base branch: `develop`
- 배포용 branch: `main`
- 서버 연동 없이 목데이터로만 동작하는 프론트엔드 전용 프로젝트입니다.

## Docs Map

| 내용                                              | 경로                                     |
| ------------------------------------------------- | ---------------------------------------- |
| 커밋 메시지 규칙 (커밋 시 이 문서를 따를 것)      | `docs/conventions/commit.md`             |
| 브랜치 / PR 규칙                                  | `docs/conventions/git.md`                |
| 파일명, 컴포넌트, 타입, 변수, 함수 등 코딩 컨벤션 | `docs/conventions/conventions.md`        |
| 포맷팅/Lint, SVGR 아이콘, Barrel Export 등 도구   | `docs/conventions/tooling.md`            |
| 프로젝트 폴더 구조                                | `docs/architecture/project-structure.md` |
| 디자인 원칙, 컬러/타이포그래피 토큰               | `docs/design/`                           |
| Agent Harness 스킬 목록과 트리거 요약             | `docs/agents/skills-index.md`            |

문서와 실제 코드가 다르면 코드를 기준으로 삼고, 구조나 규칙이 바뀌었다면 관련 문서도 함께 갱신합니다.

## Editing Principles

- 기존 패턴과 가까운 코드를 먼저 확인합니다.
- 요청과 무관한 리팩터링을 섞지 않습니다.
- 재사용 가능성만으로 공통화를 진행하지 않습니다.
- 확정되지 않은 도메인 폴더, 라이브러리, 데이터 계층을 문서만으로 강제하지 않습니다.
- 비밀값과 실제 환경변수 값을 커밋하지 않습니다.
- 사용자 변경사항을 임의로 되돌리지 않습니다.

## Completion

- 요청의 완료 기준을 충족했는지 확인합니다.
- 구조나 규칙을 바꿨다면 관련 문서도 갱신합니다.
- 임시 코드, 사용하지 않는 import, 디버그 출력이 남지 않았는지 확인합니다.
