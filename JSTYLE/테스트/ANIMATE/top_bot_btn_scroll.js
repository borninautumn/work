// 부드럽게 스크롤하는 함수
function smoothScrollTo(targetY, duration = 300) {
    const startY = window.scrollY || document.documentElement.scrollTop;
    const distance = targetY - startY;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // 0 ~ 1 사이 비율
        const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic

        window.scrollTo(0, startY + distance * ease);

        if (elapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

// 상단으로 이동
document.querySelector('.top_btn')?.addEventListener('click', function (e) {
    e.preventDefault();
    smoothScrollTo(0, 300);
});

// 하단으로 이동
document.querySelector('.bot_btn')?.addEventListener('click', function (e) {
    e.preventDefault();
    smoothScrollTo(document.body.scrollHeight, 300);
});


/**
 * 바닐라 JS + 구형 브라우저 대응 코드:
 * window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop 등 구형 브라우저의 다양한 스크롤 위치 지원
 * requestAnimationFrame이 없는 경우 setTimeout을 대체로 사용
 * preventDefault() 지원이 없는 브라우저를 위해 if (e.preventDefault)
 */
(function () {
    // requestAnimationFrame 폴리필
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
            return setTimeout(function () {
                callback(Date.now());
            }, 16); // 약 60fps
        };
    }

    // 부드러운 스크롤 함수
    function smoothScrollTo(targetY, duration) {
        const startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const startTime = Date.now();

        function scrollStep() {
            const now = Date.now();
            const time = Math.min(1, (now - startTime) / duration);
            const ease = 1 - Math.pow(1 - time, 3); // easeOutCubic

            const newY = Math.round(startY + (targetY - startY) * ease);
            window.scrollTo(0, newY);

            if (time < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        scrollStep();
    }

    // 상단 버튼
    var topBtn = document.querySelector('.top_btn');
    if (topBtn) {
        topBtn.addEventListener('click', function (e) {
            if (e.preventDefault) e.preventDefault();
            smoothScrollTo(0, 300);
            return false;
        });
    }

    // 하단 버튼
    var botBtn = document.querySelector('.bot_btn');
    if (botBtn) {
        botBtn.addEventListener('click', function (e) {
            if (e.preventDefault) e.preventDefault();
            var scrollHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            );
            smoothScrollTo(scrollHeight, 300);
            return false;
        });
    }
})();

/**
 * init 함수 내부에 포함
 */
function init() {
    swiperFunction(); // 기존 함수 호출

    // requestAnimationFrame 폴리필 (구형 브라우저 대응)
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
            return setTimeout(function () {
                callback(Date.now());
            }, 16); // 60fps 대체
        };
    }

    // 부드러운 스크롤 함수
    function smoothScrollTo(targetY, duration) {
        const startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const startTime = Date.now();

        function scrollStep() {
            const now = Date.now();
            const time = Math.min(1, (now - startTime) / duration);
            const ease = 1 - Math.pow(1 - time, 3); // easeOutCubic

            const newY = Math.round(startY + (targetY - startY) * ease);
            window.scrollTo(0, newY);

            if (time < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        scrollStep();
    }

    // 상단 이동 버튼
    var topBtn = document.querySelector('.scroll_btn .top_btn');
    if (topBtn) {
        topBtn.addEventListener('click', function (e) {
            if (e.preventDefault) e.preventDefault();
            smoothScrollTo(0, 300);
            return false;
        });
    }

    // 하단 이동 버튼
    var botBtn = document.querySelector('.scroll_btn .bot_btn');
    if (botBtn) {
        botBtn.addEventListener('click', function (e) {
            if (e.preventDefault) e.preventDefault();
            var scrollHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            );
            smoothScrollTo(scrollHeight, 300);
            return false;
        });
    }
}

document.addEventListener("DOMContentLoaded", init);

/**
 * 리팩토링된 버전:
 * initScrollButtons()는 DOMContentLoaded 후 init()에서 호출됩니다.
 * 구형 브라우저에서도 잘 작동하도록 requestAnimationFrame 폴리필을 포함하고 있습니다.
 * 스크롤 애니메이션은 easeOutCubic 방식으로 자연스럽게 이동합니다.
 */
function init() {
    swiperFunction(); // 기존 함수
    initScrollButtons(); // 스크롤 버튼 초기화
}

// 스크롤 버튼 초기화 함수
function initScrollButtons() {
    // requestAnimationFrame 폴리필 (구형 브라우저 대응)
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
            return setTimeout(function () {
                callback(Date.now());
            }, 16); // 약 60fps
        };
    }

    // 부드러운 스크롤 함수
    function smoothScrollTo(targetY, duration) {
        const startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const startTime = Date.now();

        function scrollStep() {
            const now = Date.now();
            const time = Math.min(1, (now - startTime) / duration);
            const ease = 1 - Math.pow(1 - time, 3); // easeOutCubic

            const newY = Math.round(startY + (targetY - startY) * ease);
            window.scrollTo(0, newY);

            if (time < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        scrollStep();
    }

    // 상단 이동 버튼
    var topBtn = document.querySelector('.scroll_btn .top_btn');
    if (topBtn) {
        topBtn.addEventListener('click', function (e) {
            if (e.preventDefault) e.preventDefault();
            smoothScrollTo(0, 300);
            return false;
        });
    }

    // 하단 이동 버튼
    var botBtn = document.querySelector('.scroll_btn .bot_btn');
    if (botBtn) {
        botBtn.addEventListener('click', function (e) {
            if (e.preventDefault) e.preventDefault();
            var scrollHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            );
            smoothScrollTo(scrollHeight, 300);
            return false;
        });
    }
}

document.addEventListener("DOMContentLoaded", init);

/**
 * 모바일 환경에서 .top_btn과 .bot_btn 요소에 각각 href 속성이 있다면, 
 * 해당 링크로 이동하는 기본 동작을 유지하면서 스크립트를 통한 부드러운 스크롤 처리를 해주어야 합니다.
 * 예를 들어:
 * <a href="#topSection" class="top_btn">Top</a>
 * <a href="#bottomSection" class="bot_btn">Bottom</a>
 * 
 * href="#id명" 형식이면, 해당 요소의 위치를 계산해서 부드럽게 스크롤합니다.
 * getBoundingClientRect().top + window.pageYOffset을 통해 정확한 문서 상 위치를 계산합니다.
 * e.preventDefault()를 통해 기본 점프 동작을 막고, 스크립트로 대체합니다.
 * href가 #로 시작하지 않는 외부 링크 등인 경우는 무시됩니다.
 */
function init() {
    swiperFunction(); // 기존 함수
    initScrollButtons(); // 스크롤 버튼 초기화
}

function initScrollButtons() {
    // requestAnimationFrame 폴리필
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback) {
            return setTimeout(function () {
                callback(Date.now());
            }, 16);
        };
    }

    // 부드러운 스크롤 함수
    function smoothScrollTo(targetY, duration) {
        const startY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const startTime = Date.now();

        function scrollStep() {
            const now = Date.now();
            const time = Math.min(1, (now - startTime) / duration);
            const ease = 1 - Math.pow(1 - time, 3);

            const newY = Math.round(startY + (targetY - startY) * ease);
            window.scrollTo(0, newY);

            if (time < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        scrollStep();
    }

    // 공통 클릭 이벤트 함수
    function bindSmoothScrollBtn(selector) {
        var btn = document.querySelector(selector);
        if (btn && btn.getAttribute('href')) {
            btn.addEventListener('click', function (e) {
                const href = btn.getAttribute('href');
                if (href.startsWith('#')) {
                    const targetEl = document.querySelector(href);
                    if (targetEl) {
                        e.preventDefault();
                        const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset;
                        smoothScrollTo(targetY, 300);
                    }
                }
            });
        }
    }

    // 각각 버튼에 바인딩
    bindSmoothScrollBtn('.scroll_btn .top_btn');
    bindSmoothScrollBtn('.scroll_btn .bot_btn');
}

document.addEventListener("DOMContentLoaded", init);