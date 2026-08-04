<!-- BEGIN:nextjs-agent-rules -->

# rain-portfolio Agent Guide

이 저장소에서 작업하는 Claude Code와 Codex의 공통 진입점입니다. 세부 규칙의 원문은 `docs/`에 있으며, 이 파일에는 중복해서 옮겨 적지 않습니다.

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
| AI 관련 파일 정리                                 | `docs/agents/`                           |

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
