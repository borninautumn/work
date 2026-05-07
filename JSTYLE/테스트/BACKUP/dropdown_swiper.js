function stickyTabs() {
    const tabBtn = document.querySelectorAll('.tab');
    const allDetails = document.querySelectorAll('.dropdown--detail');

    tabBtn.forEach(tab => {
        tab.addEventListener('click', function() {
            tabBtn.forEach(t => t.classList.remove('sel'));
            this.classList.add('sel');

            // 모든 드랍다운 닫기
            allDetails.forEach(detail => {
                detail.style.maxHeight = '0px';
                detail.classList.remove('active');
            });
        });
    });
}
function handleButtonClick(btn, detail, swiperInstances) {
    btn.addEventListener("click", function () {
        const isActive = detail.classList.contains("active");

        if (isActive) {
            // 닫기
            detail.style.maxHeight = detail.scrollHeight + "px"; 
            requestAnimationFrame(() => {
                detail.style.maxHeight = "0px";
            });
            detail.classList.remove("active");

            btn.classList.remove("show"); 
            btn.querySelectorAll('.dropdown--item--tit, .dropdown--item--arrow, .dropdown--item--pdt')
                .forEach(el => el.classList.remove('show'));

            const swiperContainer = detail.querySelector(".mySwiper");
            if (swiperContainer) {
                const swiperId = swiperContainer.classList[0]; // 예: "mySwiper17"
                if (swiperInstances[swiperId]) {
                    swiperInstances[swiperId].destroy(true, true);
                    swiperInstances[swiperId] = null;
                }
            }
        } else {
            // 열기
            detail.classList.add("active");
            detail.style.maxHeight = detail.scrollHeight + "px";

            btn.classList.add("show");

            btn.querySelectorAll('.dropdown--item--tit, .dropdown--item--arrow, .dropdown--item--pdt')
                .forEach(el => el.classList.add('show'));

            const swiperContainer = detail.querySelector(".mySwiper");
            if (swiperContainer) {
                const swiperId = swiperContainer.classList[0]; // 예: "mySwiper17"
                if (!swiperInstances[swiperId]) {
                    setTimeout(() => {
                        swiperInstances[swiperId] = new Swiper(`.${swiperId}`, {
                            slidesPerView: 4.4,
                            spaceBetween: 20,
                        });
                    }, 100);
                }
            }
        }
    });
}

function init() {
    const btns = document.querySelectorAll(".dropdown--btn");
    const swiperInstances = {}; // Swiper 인스턴스를 ID 기반으로 저장 (객체 사용)

    btns.forEach((btn) => {
        const detail = btn.nextElementSibling;
        handleButtonClick(btn, detail, swiperInstances);
    });

    stickyTabs();
}

// DOM이 로드되면 init() 실행
document.addEventListener("DOMContentLoaded", init);