# 🎉 팀 연도 결산 페이지

Microsoft Edge 2025 결산 페이지를 벤치마킹하여 제작한 팀 연도 결산 페이지입니다.

## ✨ 주요 기능

- 📱 **완벽한 반응형** - 모바일, 태블릿, 데스크톱 모두 지원
- 🎨 **아름다운 애니메이션** - 부드러운 슬라이드 전환과 카운트업 효과
- ⚡ **빠른 로딩** - CDN 기반 라이브러리로 즉시 로드
- 🎯 **쉬운 커스터마이징** - `data.js` 파일만 수정하면 완성
- ⌨️ **키보드 단축키** - Space(다음), 화살표(이동), ESC(처음으로)
- 👆 **터치 제스처** - 스와이프로 슬라이드 이동
- 🖱️ **클릭으로 이동** - 화면 아무 곳이나 클릭하면 다음 슬라이드로
- ✨ **떠다니는 아이콘** - 성과를 대표하는 이모지들이 배경에서 둥둥
- 🖼️ **마우스 반응 이미지** - 인트로 화면의 이미지들이 마우스 움직임에 반응
- 📸 **월별 대표 이미지** - 각 슬라이드마다 이미지들이 자연스럽게 배치
- 🎬 **동영상 재생** - 동영상이 자동으로 재생되며 루프

## 🚀 빠른 시작

### 1. 파일 구조

```
review/
├── index.html      # 메인 HTML 파일
├── style.css       # 스타일시트
├── app.js          # 메인 JavaScript
├── data.js         # 데이터 설정 (여기만 수정하면 됩니다!)
└── README.md       # 이 파일
```

### 2. 실행 방법

#### 방법 A: 로컬 서버로 실행 (권장)

```bash
# Python 3가 설치되어 있다면
python3 -m http.server 8000

# 또는 Python 2
python -m SimpleHTTPServer 8000

# Node.js가 설치되어 있다면
npx http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

#### 방법 B: 직접 열기

`index.html` 파일을 더블클릭하여 브라우저로 열기

#### 방법 C: Live Server (VS Code)

VS Code의 Live Server 확장프로그램 사용

## 📝 데이터 수정 방법

### `data.js` 파일 수정

```javascript
const teamYearData = [
  {
    month: "1월", // 월 표시
    title: "새로운 시작", // 제목
    description: "설명...", // 설명
    stat: "5명", // 강조 숫자/통계
    icon: "👥", // 이모지 아이콘

    // 이미지 URL 배열 (1-3개 추천)
    images: [
      "https://images.unsplash.com/photo-xxx",
      "https://images.unsplash.com/photo-yyy",
    ],

    // 동영상 URL (선택사항, 없으면 null)
    video: "https://example.com/video.mp4",

    // 🆕 이미지/동영상 위치 직접 지정 (선택사항)
    videoPosition: { top: "10%", left: "3%", rotate: -3 },
    imagePositions: [
      { top: "8%", right: "3%", rotate: 5 }, // 이미지1
      { top: "45%", left: "5%", rotate: -5 }, // 이미지2
    ],

    features: [
      // 세부 항목들
      {
        title: "신규 입사",
        content: "5명의 팀원",
      },
      // ... 더 추가 가능
    ],
  },
  // ... 12개월 데이터
];
```

### 설정 옵션

```javascript
const config = {
  teamName: "우리 팀", // 팀/회사 이름
  year: "2025", // 연도
  introTitle: "우리 팀", // 인트로 제목
  introSubtitle: "2025년 결산", // 인트로 부제
  autoplayDelay: null, // 자동재생 (null=끔, 5000=5초)
  useCountUp: true, // 숫자 카운트업 애니메이션
  shareUrl: window.location.href, // 공유 URL
};
```

## 🎨 디자인 커스터마이징

### 색상 변경 (`style.css`)

```css
:root {
  --primary-color: #0078d4; /* 메인 색상 */
  --secondary-color: #50e6ff; /* 보조 색상 */
  --accent-color: #00cc6a; /* 강조 색상 */
  /* ... */
}
```

### 슬라이드 배경색 변경

```css
/* style.css 하단 */
.slide-bg-1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.slide-bg-2 {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
/* ... 12개 배경 */
```

## 🔧 사용된 기술

| 라이브러리                                            | 버전  | 용도                   |
| ----------------------------------------------------- | ----- | ---------------------- |
| [Swiper.js](https://swiperjs.com/)                    | 11.x  | 슬라이드 효과          |
| [AOS](https://michalsnik.github.io/aos/)              | 2.3.x | 스크롤 애니메이션      |
| [CountUp.js](https://inorganik.github.io/countUp.js/) | 2.8.x | 숫자 카운트 애니메이션 |
| Google Fonts                                          | -     | Noto Sans KR 폰트      |

모든 라이브러리는 CDN을 통해 로드되므로 별도 설치가 필요 없습니다!

## ⌨️ 단축키

| 키            | 기능                             |
| ------------- | -------------------------------- |
| `Space`       | 다음 슬라이드                    |
| `←` `↑`       | 이전 슬라이드                    |
| `→` `↓`       | 다음 슬라이드                    |
| `ESC`         | 처음으로 돌아가기                |
| `마우스 클릭` | 다음 슬라이드 (화면 아무 곳이나) |

## 📱 모바일 제스처

- **위로 스와이프** - 다음 슬라이드
- **아래로 스와이프** - 이전 슬라이드
- **화면 탭** - 다음 슬라이드

## 💡 사용 팁

### 1. 이미지 추가하기 🖼️

**무료 고품질 이미지 사이트:**

- [Unsplash](https://unsplash.com) - 무료 고해상도 사진
- [Pexels](https://pexels.com) - 무료 스톡 사진
- [Pixabay](https://pixabay.com) - 무료 이미지 & 비디오

**이미지 URL 얻는 방법:**

1. Unsplash에서 원하는 이미지 찾기
2. 이미지 우클릭 → "이미지 주소 복사"
3. `data.js`의 `images` 배열에 붙여넣기

**팀 자체 이미지 사용:**

- GitHub, Google Drive, Imgur 등에 업로드 후 공개 URL 사용
- 또는 프로젝트 폴더에 `/images/` 디렉토리 만들어서 상대 경로 사용

```javascript
images: [
  "./images/team-photo.jpg", // 로컬 이미지
  "https://unsplash.com/...", // 외부 URL
];
```

### 2. 동영상 추가하기 🎬

**지원 형식:** MP4 (가장 호환성 좋음)

**동영상 호스팅:**

- YouTube (업로드 후 다운로드 링크 사용)
- Google Drive (공개 링크)
- 자체 서버

```javascript
video: "https://example.com/project-demo.mp4";
```

**참고:** 동영상은 자동 재생/반복/음소거로 설정됩니다.

### 3. 이모지 찾기

- [Emojipedia](https://emojipedia.org) 에서 원하는 이모지 복사
- 인기 이모지: 🎯 📊 💼 🌟 🔥 ⚡ 🎨 🎓 🚀 💡 ❤️ 🏆

### 4. 슬라이드 개수 변경

- `data.js`의 `teamYearData` 배열에서 항목 추가/제거
- 12개월이 아니어도 됩니다! (분기별 4개, 주간 52개 등도 가능)

### 5. 자동 재생 설정

```javascript
// data.js
const config = {
  autoplayDelay: 5000, // 5초마다 자동으로 넘어감
};
```

### 6. 개발자 도구 (콘솔에서 사용)

```javascript
goToSlide(5); // 5번째 슬라이드로 이동
showData(); // 전체 데이터 테이블로 보기
```

## 📤 배포 방법

### GitHub Pages

1. GitHub 저장소 생성
2. 파일들 업로드
3. Settings → Pages → Source를 `main` 브랜치로 설정
4. 몇 분 후 `https://사용자명.github.io/저장소명/` 에서 확인

### Netlify / Vercel

1. 파일들을 zip으로 압축
2. [Netlify](https://netlify.com) 또는 [Vercel](https://vercel.com)에 드래그 앤 드롭
3. 자동으로 배포 완료!

## 🎯 사용 예시

### 기업 연말 결산

- 월별 매출/성과 시각화
- 주요 프로젝트 하이라이트
- 팀원 성과 공유

### 프로젝트 회고

- 스프린트별 성과
- 마일스톤 달성 현황
- 배운 점과 개선 사항

### 개인 포트폴리오

- 월별 학습 내용
- 프로젝트 진행 상황
- 성장 과정 기록

## 🐛 문제 해결

### 슬라이드가 작동하지 않아요

- 브라우저 콘솔(F12)에서 에러 확인
- 모든 파일(HTML, CSS, JS)이 같은 폴더에 있는지 확인
- 인터넷 연결 확인 (CDN 라이브러리 로드용)

### 모바일에서 이상해요

- 로컬 서버로 실행했는지 확인 (file:// 프로토콜은 일부 기능 제한)
- 반응형 디자인이 적용되려면 `<meta name="viewport">` 태그 필요 (index.html에 이미 포함)

### 숫자 카운트업이 안 돼요

- `data.js`의 `stat` 필드에 숫자가 포함되어 있는지 확인
- 예: '5명', '95점', '200억' 등 (순수 문자는 카운트업 안 됨)

### 마지막 슬라이드에서 멈춰요

- **정상 동작입니다!** v2.1부터 마지막 슬라이드에서 자동으로 넘어가지 않습니다
- "🎉 클릭하여 결산 완료" 메시지가 표시되면 화면을 클릭하세요
- 사용자가 원할 때 엔딩 화면으로 이동할 수 있습니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자유롭게 사용, 수정, 배포하실 수 있습니다!

## 🙋 도움이 필요하신가요?

- `data.js` 파일의 주석을 참고하세요
- 각 라이브러리의 공식 문서를 확인하세요
  - [Swiper 문서](https://swiperjs.com/get-started)
  - [AOS 문서](https://github.com/michalsnik/aos)
  - [CountUp.js 문서](https://github.com/inorganik/countUp.js)

## 🎉 완성!

이제 `data.js`만 수정하면 여러분만의 멋진 연도 결산 페이지가 완성됩니다!

**즐거운 코딩 되세요! 🚀**

---

Made with ❤️ | Inspired by Microsoft Edge Year in Review
