# Project Structure

이 문서는 rain-portfolio 프로젝트의 최상위 폴더 구조와 각 폴더가 어떤 역할을 하는지 정리합니다. 새로운 파일을 어디에 둬야 할지 애매할 때 먼저 참고하는 문서입니다.

## 전체 구조

```txt
rain-portfolio/
├── app/                    # 라우팅 (App Router)
│   ├── (home)/
│   ├── resume/
│   ├── marketing/
│   ├── develop/
│   └── article/
│
├── shared/                 # 여러 페이지가 함께 쓰는 코드
│   ├── hooks/
│   ├── utils/
│   ├── constants/
│   └── components/
│       ├── ui/
│       └── layout/
│
├── ui/                     # 공용 컴포넌트
│
├── lib/                    # 외부 라이브러리 연동 코드
│
├── styles/                 # 전역 스타일
│   ├── global.css
│   └── tokens/
│       ├── color.css
│       └── typography.css
│
├── docs/                   # 프로젝트 문서
│   ├── conventions/
│   ├── agents/
│   └── architecture/
│
└── public/
    └── imgs/                # 로고 등 공용 이미지
```

## app

Next.js App Router를 그대로 사용합니다. 현재 페이지 단위는 `(home)`, `resume`, `marketing`, `develop`, `article`입니다.

각 페이지 폴더 하위에는 그 페이지에서만 쓰는 `mocks/`, `components/` 등을 자유롭게 둘 수 있습니다. 즉, 특정 페이지 전용 코드는 페이지 폴더 안에 두고, 다른 페이지에서도 재사용해야 하는 순간 `shared`로 옮기는 방식입니다.

## shared

특정 페이지에 종속되지 않고 프로젝트 전역에서 재사용되는 코드를 둡니다.

| 폴더                | 용도                                 |
| ------------------- | ------------------------------------ |
| `hooks`             | 여러 페이지에서 쓰는 공통 커스텀 훅  |
| `utils`             | 공통 유틸 함수                       |
| `constants`         | 공통 상수                            |
| `components/ui`     | 버튼, 인풋 등 공용 UI 컴포넌트       |
| `components/layout` | 헤더, 푸터 등 레이아웃 관련 컴포넌트 |

페이지 전용으로 만들었다가 다른 페이지에서도 필요해지는 시점에 `app/(도메인)` 하위에서 이곳으로 옮기면 됩니다.

## lib

프로젝트에서 쓰는 외부 라이브러리 관련 코드를 둡니다. 예를 들어 tailwind 클래스 병합에 쓰는 `cn` 유틸 함수가 여기에 위치합니다.

## styles

전역 스타일과 디자인 토큰을 관리합니다.

- `global.css` : 전역 스타일 시트
- `tokens/color.css` : 프로젝트 컬러 토큰
- `tokens/typography.css` : 프로젝트 폰트 토큰

## docs

프로젝트 문서화를 위한 공간입니다.

- `conventions/` : 이 프로젝트에서 지켜야 할 컨벤션 문서 (`git.md`, `conventions.md`)
- `agents/` : AI 관련 파일 정리
- `architecture/` : 이 문서를 포함한 프로젝트 구조 문서

## public/imgs

로고 등 여러 페이지에서 공용으로 사용하는 이미지를 둡니다.
