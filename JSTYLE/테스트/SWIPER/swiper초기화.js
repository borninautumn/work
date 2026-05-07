function swiperFunction() {
    const swiperContainer = document.querySelector(".stylelog__container .mySwiper");
    const swiperInstances = {};
    if (swiperContainer) {
        const swiperId = swiperContainer.classList[0]; // 예: "mySwiper17" <- 여기가 문제가 됨. (원하지 않는 곳의 스와이퍼도 초기화)
        if (!swiperInstances[swiperId]) {
            setTimeout(() => {
                swiperInstances[swiperId] = new Swiper(.${ swiperId }, {
                    slidesPerView: 1.8,
                    spaceBetween: 20,
                });
            }, 100);
        }
    }
}

function init() {
    swiperFunction();
}

// DOM이 로드되면 init() 실행
document.addEventListener("DOMContentLoaded", init);



/**
 * .stylelog__container 안에 있는 모든 .mySwiper 들만 Swiper로 초기화
 *  각각에 대해 중복 초기화 방지 
 * */
function swiperFunction() {
    const swiperContainers = document.querySelectorAll(".stylelog__container .mySwiper");
    const swiperInstances = {};

    swiperContainers.forEach((container) => {
        const swiperId = container.dataset.swiperId || container.classList[0]; // 고유 ID 확보
        if (!swiperInstances[swiperId]) {
            setTimeout(() => {
                swiperInstances[swiperId] = new Swiper(container, {
                    slidesPerView: 1.8,
                    spaceBetween: 20,
                });
            }, 100);
        }
    });
}

function init() {
    swiperFunction();
}

document.addEventListener("DOMContentLoaded", init);

/**
 * <div class="mySwiper" data-swiper-id="mySwiper1">...</div>
 * <div class="mySwiper" data-swiper-id="mySwiper2">...</div>
 * 이런 식으로 각 .mySwiper에 고유 식별자를 부여하는 것이 좋음.
 */

// 전역에 선언
const swiperInstances = {};

function swiperFunction() {
    const swiperContainers = document.querySelectorAll(".stylelog__container .mySwiper");

    swiperContainers.forEach((container, index) => {
        // 고유 ID를 data-swiper-id로 설정하거나 자동 생성
        let swiperId = container.dataset.swiperId;
        if (!swiperId) {
            swiperId = `mySwiper-${index}`;
            container.dataset.swiperId = swiperId; // 자동 부여
        }

        // 중복 초기화 방지
        if (!swiperInstances[swiperId]) {
            setTimeout(() => {
                swiperInstances[swiperId] = new Swiper(container, {
                    slidesPerView: 1.8,
                    spaceBetween: 20,
                });
            }, 100);
        }
    });
}

function init() {
    swiperFunction();
}

document.addEventListener("DOMContentLoaded", init);

/**
 * Swiper 초기화
 * 클래스 목록 중 mySwiper 또는 mySwiper2 ... 등의 고유 클래스 추출하여 초기화 하는 방법
 *  */ 

function funcSwiper(swiperInstances) {
    const swipers = document.querySelectorAll('.swiper');

    swipers.forEach((swiperContainer) => {
        // 클래스 목록 중에서 'mySwiper' 또는 'mySwiper2' 등의 고유 클래스 추출
        const swiperClass = Array.from(swiperContainer.classList).find(cls => cls.startsWith('mySwiper'));

        if (swiperClass && !swiperInstances[swiperClass]) {
            swiperInstances[swiperClass] = new Swiper(`.${swiperClass}`, {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
            });
        }
    });
}

function init() {
    const swiperInstances = {};
    funcSwiper(swiperInstances);
}

// DOM이 로드되면 init() 실행
document.addEventListener("DOMContentLoaded", init);