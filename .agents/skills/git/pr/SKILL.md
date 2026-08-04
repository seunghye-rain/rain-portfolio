# git-pr

```txt
rain-portfolio의 PR 제목과 본문을 작성합니다. develop으로 머지할 준비가 된 브랜치의 PR을 만들거나, 주요 작업(task) 목록을 주고 PR 작성을 요청받았을 때 사용합니다.
```

# PR 작성

## 스킬 설명

브랜치에서 작업한 내용을 `docs/conventions/git.md`의 템플릿에 맞춰 PR로 정리하는 작업입니다. 파일 목록 나열이 아니라, 무엇을 왜 그렇게 구현했는지가 본문에 드러나야 합니다.

## 참조 문서

| 문서                               | 참조 내용                                                                |
| ---------------------------------- | ------------------------------------------------------------------------ |
| `docs/conventions/git.md`          | PR 제목 형식, 템플릿(📍Task/📝Summary/🚀Description/ETC), 자동화 설명    |
| `docs/conventions/commit.md`       | 접두사 표 (PR 제목 접두사도 여기서 옴)                                   |
| `.github/PULL_REQUEST_TEMPLATE.md` | 실제로 채워야 할 템플릿 원본                                             |
| `.github/workflows/pr-triage.yml`  | 제목 접두사로 라벨이 자동으로 붙는 로직 (오탈자가 있으면 라벨이 안 붙음) |
| `.github/workflows/ci.yml`         | PR에서 자동으로 도는 포맷/린트/빌드/생성 파일 검증                       |

## 트리거

- "PR 작성해줘", "PR 올려줘"
- "이 task들로 PR 작성해줘"처럼 주요 작업 목록을 주면서 요청

## 해야 할 일

1. base 브랜치를 확인합니다. 기본값은 `develop`입니다.
2. 최신 커밋 하나가 아니라 브랜치 전체 히스토리를 봅니다.

   ```bash
   git log {base}..HEAD --oneline
   git diff {base}...HEAD --stat
   ```

3. 제목은 `[접두사] 작업 내용` 형식으로 씁니다. 접두사는 `commit.md` 표의 접두사와 동일하되 첫 글자만 대문자입니다 (`[Init]`, `[Feat]`, `[Fix]`, `[Docs]`, `[Design]`, `[Refactor]`, `[Test]`, `[Chore]`, `[Deploy]`). `pr-triage.yml`이 이 문자열을 그대로 매칭해서 라벨을 붙이므로 대괄호와 대소문자를 정확히 맞춥니다.
4. 본문은 `.github/PULL_REQUEST_TEMPLATE.md`의 네 섹션을 빠짐없이 채웁니다.
   - **📍 Task**: 주요 작업을 번호로 나열
   - **📝 Summary**: 각 작업을 최대 세 줄로 요약
   - **🚀 Description**: 각 작업을 무엇을/왜 그 방식을 선택했는지/어떻게 사용했는지 순서로 상세히 서술. 나중에 본인이 다시 읽거나 팀원이 설명 없이 읽어도 맥락이 파악되는 수준으로 씁니다.
   - **ETC**: 이번 PR 범위 밖으로 남긴 것, 후속 작업 등
5. `pnpm lint`, `pnpm format:check`, `pnpm build`는 CI가 자동으로 돌리지만, PR을 올리기 전 미리 통과 여부를 확인해두면 좋습니다.

## 점검해야 할 내용

1. 참고한 자료(관련 문서, 링크, 이슈)가 본문에 반영되어 있는가?
2. 결과만 나열하지 않고 어떤 고민과 수정 흐름을 거쳤는지 드러나는가?
3. 제목 접두사가 `pr-triage.yml`의 라벨 매핑과 정확히 일치하는가?
