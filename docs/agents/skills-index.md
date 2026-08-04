# Skills Index

이 문서는 `.agents/skills` 아래에 구성된 Agent Harness의 전체 구조와, 각 스킬이 어떤 상황에서 실행되어야 하는지를 정리합니다.

## 공통 구성

모든 `SKILL.md`는 아래 5단계 구성을 따릅니다.

1. 스킬 설명 — 무엇을, 왜 필요로 하는 스킬인지
2. 참조 문서 — 어떤 문서의 어떤 부분을 봐야 하는지
3. 트리거 — 어떤 요청/상황에서 이 스킬을 읽어야 하는지
4. 해야 할 일 — 실제 작업 절차
5. 점검 — 마무리 전에 다시 확인할 목록

## 스킬 목록

| 스킬                | 경로                                        | 트리거 요약                                         |
| ------------------- | ------------------------------------------- | --------------------------------------------------- |
| `project-rule`      | `.agents/skills/project-rule/SKILL.md`      | 새 작업을 시작하기 전, 다른 스킬을 고르기 전에 항상 |
| `app-page`          | `.agents/skills/app-page/SKILL.md`          | 페이지/route/화면 흐름 구현                         |
| `shared-components` | `.agents/skills/shared-components/SKILL.md` | 여러 페이지가 함께 쓰는 UI·layout 컴포넌트 구현     |
| `figma`             | `.agents/skills/figma/SKILL.md`             | 피그마 링크·노드로 컴포넌트 구현                    |
| `code-quality`      | `.agents/skills/code-quality/SKILL.md`      | 리팩터링 판단, 구현 마무리 전 자체 점검             |
| `git-commit`        | `.agents/skills/git/commit/SKILL.md`        | 변경사항 커밋                                       |
| `git-pr`            | `.agents/skills/git/pr/SKILL.md`            | PR 제목·본문 작성                                   |

## 이어지는 흐름

작업은 대체로 아래 순서로 이어집니다. 작은 변경에는 전체 단계를 강제하지 않습니다.

```txt
project-rule (항상 먼저)
  → app-page / shared-components / figma (구현)
    → code-quality (자체 점검)
      → git-commit → git-pr
```

`figma`는 피그마 값을 토큰·rem·배치 기준으로 변환하는 역할만 하고, 실제 컴포넌트 작성 규칙은 `app-page`/`shared-components`를 그대로 따릅니다.
