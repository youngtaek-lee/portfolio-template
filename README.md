# Portfolio Template

HTML / CSS / Vanilla JS + GSAP 기반 웹 퍼블리셔·프론트엔드 포트폴리오 템플릿입니다.
빌드 도구 없이 정적 파일만으로 동작하며, 로컬 서버(Live Server 등)나 일반 호스팅 어디에나 그대로 올릴 수 있습니다.

## 구성
- `index.html` — 홈 (Hero / About / Works 리스트)
- `404.html` — GitHub Pages 등 정적 호스팅용 SPA 리다이렉트
- `assets/css/` — 섹션별 분리된 스타일시트
- `assets/js/` — 라우터, 애니메이션, 페이지별 렌더링 로직
  - `assets/js/router.js` — `/`, `/about`, `/works`, `/works/:id` 클라이언트 사이드 라우팅
  - `assets/js/works.js` — **프로젝트 데이터 (여기를 가장 먼저 수정하세요)**
  - `assets/js/pages/` — About / Works List / Works Detail / Contact 페이지 렌더링

## 시작하기
1. 정적 서버로 열기 (예: VSCode Live Server, `npx serve`, `python -m http.server`)
2. `index.html`을 직접 `file://`로 열면 라우팅이 깨지므로 반드시 서버를 통해 접속하세요.

## 내 정보로 교체하기 (체크리스트)

### 1. 프로젝트 데이터 — `assets/js/works.js`
- `works` 배열: 각 프로젝트의 `title`, `name`(국문명), `category`, `year`, `main`(대표 이미지), `url`(실제 사이트 링크), `subtitle`, `overview`, `gallery`(상세페이지 이미지 목록)을 본인 작업물로 교체
- `worksExtra` 배열: 외부 링크만 있는 간단한 프로젝트 목록
- 이미지는 `assets/images/works/` 안에 추가하고 경로를 맞춰주세요. 현재는 `placeholder-*.svg` 자리표시자가 들어가 있습니다.
- **주의**: `index.html`의 `<ul id="works-list">` 안 정적 HTML도 동일한 `id`/제목으로 맞춰야 홈 화면 리스트와 hover 썸네일이 정상 동작합니다 (`renderWorks()`는 기본적으로 꺼져 있고 정적 HTML을 사용합니다).

### 2. 개인 정보 — `index.html`
- 헤더 로고 (`header__logo` 안 `Your / Name / Here.`)
- Hero 태그라인 (`hero__tagline` — `YOUR NAME`)
- About 한 줄 소개 (`about-text__summary`)
- SNS 링크 (헤더, 메뉴, 푸터에 각각 GitHub/Instagram/LinkedIn/Blog `href="#"`로 비워둔 부분)
- 이메일 (`mailto:hello@yourdomain.com` — 여러 곳에 반복됨, 전체 찾아바꾸기 권장)
- 푸터 카피라이트 문구

### 3. About 페이지 — `assets/js/pages/about.js`
- 자기소개 문단 (`about-intro__text`)
- `GITHUB_USERNAME` 상수 — GitHub Contributions 캘린더에 표시할 계정명
- Work Process 섹션 텍스트, Skills 카드 목록

### 4. Contact 페이지 — `assets/js/pages/contact.js`
- 이메일 / SNS 링크

### 5. Works 상세 페이지 — `assets/js/pages/works-detail.js`
- 하단 CTA 이메일 (`mailto:hello@yourdomain.com`)

### 6. Hobby 섹션 — `assets/js/animations.js`
- `initHobbyPopcorn()`의 `ICONS` 배열에 본인이 좋아하는 것(브랜드 로고, 굿즈, 취미 아이콘 등)으로 교체하세요. 기본값은 `assets/images/hobby/`에 들어있는 예시 아이콘입니다.
- 저작권이 있는 브랜드 로고를 쓸 경우, 해당 브랜드 사용 정책을 직접 확인하세요.

### 7. 메타 정보 — `index.html` `<head>`
- `<title>`, `description`, `og:title`, `og:description`
- `og:image`는 현재 주석 처리되어 있습니다. 1200×630 이미지를 추가하고 주석을 해제하세요.

## 테마
헤더의 토글 스위치로 다크/서머(라이트 톤) 테마를 전환할 수 있습니다. 색상 변수는 `assets/css/base.css`의 `:root` / `[data-theme="..."]`에서 관리합니다.

## 라이선스
`LICENSE.txt` 참고. 개인/단일 프로젝트 사용은 자유롭게 가능하지만, 템플릿 자체의 재판매·재배포는 금지됩니다.
