// ==================== 팀 결산 데이터 ====================
// 이 파일의 내용만 수정하면 됩니다!

const teamYearData = [
    {
        month: '2025 1️⃣',
        title: '새로운 시작!',
        description: '스마트한 HR시스템이 지원합니다.',
        stat: '3개 관점',
        icon: '🖥️',
        // 이미지 URL (선택사항 - 없으면 아이콘만 표시)
        images: [
            // '/media/images/출근현황.gif',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop'
        ],
        // 동영상 URL (선택사항)
        video: null,
        features: [
            { title: 'UIUX 대폭개선', content: 'PC와 모바일 UIUX 개선' },
            { title: '총무업무 확대', content: '총무업무도 스마트하게' },
            { title: '안정성확보', content: '시스템튜닝과 APM가동' }
        ]
    },
    {
        month: '2025 2️⃣',
        title: 'UI UX 대폭개선',
        description: '가장 많은 메뉴와 기능에서 가장 편리하게',
        stat: '5개 부문',
        icon: '🚀',
        images: [
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
        ],
        video: null,
        features: [
            { title: '모바일 UI', content: '모바일 최신트렌드 반영' },
            { title: '모바일 메뉴', content: '게시판, 팝업 등 추가' },
            { title: '모바일 결재', content: '결재라인, 추가 개선' }
        ]
    },
    {
        month: '2025 3️⃣',
        title: '조직관리 개선',
        description: '매년 있는 조직개편 더욱 편하게',
        stat: '3+',
        icon: '⭐',
        images: [
            'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop'
        ],
        video: null,
        features: [
            { title: '조직개편 기능개선', content: '마우스 그리고 자동화' },
            { title: '조직원 조회개선', content: '카드형, 리스트형, 그리드로 조회' },
            { title: '겸직, 조직장표시', content: '겸직과 조직장 표시 강화' }
        ]
    },
    {
        month: '2025 4️⃣',
        title: '급여모듈 쉽게',
        description: '급여 업무를 처음이라고 생각하면서',
        stat: '85점',
        icon: '🌏',
        images: [
            'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=800&h=600&fit=crop'
        ],
        video: null,
        features: [
            { title: '급여계산 홈화면', content: '급여계산 프로세스와 처리를 한 곳에서' },
            { title: '급여결과 중메뉴', content: '국내 최다 급여결과 리포트 모음 표시' },
            { title: '급여명세서 개별안내', content: '급여명세서 개별 안내 기능 강화' }
        ]
    },
    {
        month: '2025 5️⃣',
        title: 'PC에서도 강력하게',
        description: '인사업무는 결국 PC에서 하는 것이니까요.',
        stat: '10+',
        icon: '💡',
        images: [
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop'
        ],
        // 동영상 예시 (실제 프로젝트에서는 여러분의 동영상 URL로 교체)
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        // 🆕 사용자 지정 위치 (선택사항)
        videoPosition: { top: '10%', left: '3%', rotate: -3 },
        imagePositions: [
            { top: '8%', right: '3%', rotate: 5 }
        ],
        features: [
            { title: '홈화면 위젯', content: '홈화면에서 다양한 정보를 즉시 조회' },
            { title: '연차족진 개선', content: '연차촉진을 실제 데이터로 처리' },
            { title: '팝업공지 그리고 설문조사', content: '고객사별 팝업공지와 설문조사까지' }
        ]
    },
    {
        month: '2025 6️⃣',
        title: '그리고 여러가지',
        description: '작지만 다양한 개선을 이뤘습니다.',
        stat: '97점',
        icon: '📈',
        images: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
        ],
        video: null,
        features: [
            { title: '첨부파일 조회', content: '모바일과 PC에서 파일조회 개선' },
            { title: '전자서명과 QR코드', content: '전자계약 증빙 강화' },
            { title: '통합검색 등', content: '검색, 의료비, 탭이동, 타임라인 등' }
        ]
    },
    {
        month: '2025 7️⃣',
        title: '앗! 빠뜨리면 서운할 것',
        description: '총무관리 메뉴와 시스템안정성',
        stat: '3+',
        icon: '🎉',
        images: [
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
        ],
        video: null,
        features: [
            { title: '데이터폼 강화', content: '자유폼과 데이터까지 처리되는 양식추가' },
            { title: '다양한 총무처리', content: '인사업무의 반은 총무업무! 프로세스로 자동화' },
            { title: '시스템안정성', content: '시스템 튜닝과 APM가동으로 안정성 강화화' }
        ]
    },
    {
        month: '2026년 하나',
        title: 'AI로 HR을 스마트하게',
        description: '우리회사에 정확히 적용되는 AI 활용',
        stat: '700일 준비',
        icon: '🤖',
        images: [
            'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop'
        ],
        video: null,
        features: [
            { title: 'AI HR챗봇', content: '우리 회사의 인사제도를 묻고 바로 대답듣기' },
            { title: 'AI 인사분석', content: '인사팀과 경영층에 HR인사이트 제공' },
            { title: 'AI 환경설정', content: '복잡한 HR시스템 설정 지원' }
        ]
    },
    {
        month: '2026년 둘',
        title: '고객지원 강화',
        description: '고객지원 프로세스와 품질을 올리겠습니다',
        stat: '150%',
        icon: '❤️',
        images: [
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
        ],
        video: null,
        features: [
            { title: '고객지원', content: '문의-답변프로세스 활성화와 빠른 처리' },
            { title: '5240가이드홈', content: '매뉴얼과 HR업무 지원까지' },
            { title: '각종 자료', content: 'HR업무 이해를 돕는 컨텐츠 제공공' }
        ]
    },
    {
        month: '2026년 셋',
        title: '대한민국 넘버원 HR시스템',
        description: '계속되는 UIUX 개선과 메뉴/기능추가.',
        stat: '7개',
        icon: '🏆',
        images: [
            'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop'
        ],
        video: null,
        features: [
            { title: 'UIUX 개선 ', content: '모바일 푸시알림, ToDo, 게시팝업, 그리고 최신화' },
            { title: '메뉴와 기능', content: 'PC에서 사용자 경험 개선' },
            { title: '보안과 안정성', content: '시스템업그레이드와 국제보안인증 획득' }
        ]
    }
];

// ==================== 설정 옵션 ====================
const config = {
    // 회사/팀 이름
    teamName: '오이사공5240',

    // 연도
    year: '2025',

    // 인트로 메시지
    introTitle: '오이사공5240',
    introSubtitle: '한해 동안 나아간 성과',
    introDescription: '고객과 함께 이루었습니다.',

    // 엔딩 메시지
    endingTitle: '2025년, 함께 해주신 것에 대해 고마운 마음을 전합니다.',
    endingDescription: '2026년에도 스마트한 인사관리가 될 수 있도록 나아가겠습니다',

    // 자동 재생 (밀리초, null이면 자동재생 안함)
    autoplayDelay: null, // 예: 5000 = 5초마다 자동으로 넘어감

    // 카운트업 애니메이션 사용 여부
    useCountUp: true,

    // 공유 URL (공유하기 버튼 클릭 시)
    shareUrl: window.location.href
};

// ==================== 팁: 데이터 수정 방법 ====================
/*

월별 데이터 수정하기:
teamYearData 배열의 각 객체를 수정하세요
month: 월 표시 (예: '1월', 'January')
title: 해당 월의 주요 성과 제목
description: 설명 문구
stat: 강조할 숫자/통계 (예: '5명', '95점', '200억')
icon: 이모지 아이콘 (https://emojipedia.org 참고)
images: 이미지 URL 배열 (1-3개 추천)
video: 동영상 URL (선택사항, null이면 표시 안 함)
features: 세부 항목 배열 (최대 3-4개 추천)
이미지 추가하기:
images 필드에 이미지 URL 배열을 추가하세요
예: images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg']
무료 이미지: https://unsplash.com 또는 https://pexels.com
팀 프로젝트 스크린샷, 사진 등 직접 업로드한 이미지도 가능
권장 크기: 800x600px 이상
동영상 추가하기:
video 필드에 동영상 URL을 추가하세요
예: video: 'https://example.com/video.mp4'
MP4 형식 권장, 자동 재생/반복/음소거
동영상이 없으면 null로 설정
🆕 이미지/동영상 위치 직접 지정하기 (선택사항):
자동 배치가 마음에 안 들면 직접 위치 지정 가능!
예시:
{
month: '5월',
images: ['url1', 'url2'],
video: 'video-url',

// 동영상 위치 지정
videoPosition: { 
    top: '10%',      // 상단에서 10%
    left: '5%',      // 왼쪽에서 5% (또는 right: '5%')
    rotate: -3       // -3도 회전
},

// 이미지 위치 배열 (이미지 개수만큼)
imagePositions: [
    { top: '8%', right: '5%', rotate: 5 },   // 첫 번째 이미지
    { top: '45%', left: '5%', rotate: -5 }   // 두 번째 이미지
]
} 💡 팁:
top: 화면 상단에서의 거리 (권장: 5%-50%, 텍스트 가독성 확보)
left 또는 right: 화면 좌우 위치
rotate: 회전 각도 (-10 ~ 10 추천)
이모지 찾기:
https://emojipedia.org 에서 원하는 이모지를 복사/붙여넣기
예: 🎯 📊 💼 🌟 🔥 ⚡ 🎨 🎓 등
월 개수 변경:
12개월이 아닌 다른 개수도 가능합니다
배열에 항목을 추가하거나 제거하면 됩니다
색상 테마:
style.css의 :root 섹션에서 색상 변수를 변경하세요
--primary-color, --secondary-color 등
슬라이드 배경색:
style.css 하단의 .slide-bg-1 ~ .slide-bg-12 클래스를 수정하세요
*/