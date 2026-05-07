document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.board_cate_tabs');
  const container = document.querySelector('.jtv_keyword_wrapper');
  const fitzoomTab = document.querySelector('.board_cate_tabs.fitzoom');

  // ✅ URL 파라미터 추출 함수
  function getParam(name, url = window.location.search) {
    const params = new URLSearchParams(url);
    return params.get(name);
  }

  // ✅ 현재 board_cate 파라미터 추출
  const currentCate = getParam('board_cate');

  // ✅ 모든 탭에서 .on 제거 + .fitzoom은 무조건 제거
  tabs.forEach(tab => tab.classList.remove('on'));
  if (fitzoomTab) fitzoomTab.classList.remove('on');

  // ✅ board_cate 파라미터 기준으로 .on 부여
  let matched = false;
  tabs.forEach(tab => {
    const href = tab.getAttribute('href');
    const cate = getParam('board_cate', href);
    if (cate === currentCate) {
      tab.classList.add('on');
      matched = true;
    }
  });

  // ✅ 일치하는 탭이 없으면 "모든 콘텐츠" 탭에 .on 부여
  if (!matched) {
    const allTab = document.querySelector('#board_cate_all');
    if (allTab) allTab.classList.add('on');
  }

  // ✅ .on이 붙은 탭을 가운데 정렬
  const activeTab = document.querySelector('.board_cate_tabs.on');
  if (activeTab && container) {
    scrollTabIntoCenter(activeTab);
  }

  // ✅ 수평 가운데 정렬 함수
  function scrollTabIntoCenter(tab) {
    const containerWidth = container.offsetWidth;
    const tabWidth = tab.offsetWidth;
    const tabLeft = tab.offsetLeft;
    const targetScroll = tabLeft - (containerWidth / 2) + (tabWidth / 2);

    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }

  // ✅ 마우스 드래그 가로 스크롤
  let isDown = false, startX, scrollLeft;

  container.addEventListener('mousedown', e => {
    isDown = true;
    container.classList.add('dragging');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('dragging');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('dragging');
  });

  container.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX);
    container.scrollLeft = scrollLeft - walk;
  });
});