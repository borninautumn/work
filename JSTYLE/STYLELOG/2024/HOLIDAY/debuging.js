document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const offset = 135;

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = tab.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const sectionTop = targetSection.getBoundingClientRect().top;
                const scrollToPosition = window.scrollY + sectionTop - offset;

                // 디버깅: 계산된 값 확인
                console.log({
                    sectionTop, // 해당 섹션의 뷰포트 기준 위치
                    currentScrollY: window.scrollY, // 현재 스크롤 위치
                    scrollToPosition, // 최종 계산된 스크롤 위치
                });

                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth',
                });
            } else {
                console.error(`Element with ID ${targetId} not found.`); // 오류메세지: 만약 타겟이 null이라면 html id가 잘못되었거나 구조에 문제가 있을 수 있다.
            }
        });
    });
});

// 개선된 최종 코드
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const offset = 135;

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = tab.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // 정확한 스크롤 위치 계산
                const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY;
                const scrollToPosition = sectionTop - offset;

                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth',
                });
            } else {
                console.error(`Target section not found for ${targetId}`);
            }
        });
    });
});
