let scrolled = 0;
let timer;

const buttonToTop = document.querySelector(".buttonToTop");

window.onload = function () {
    buttonToTop.addEventListener('click', goUp);
    window.addEventListener('scroll', trackScroll);
}

function goUp() {
    skrolled = window.pageYOffset;
    scrollToTop();
}

function scrollToTop() {
    if (scrolled > 0) {
        window.scrollTo(0, skrolled);
        scrolled = scrolled - 100;
        timer = setTimeout(scrollToTop, 20);
    } else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    }
}

function trackScroll() {
  skrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (skrolled > coords) {
    buttonToTop.classList.remove('disable-btn');
  }
  else {
    buttonToTop.classList.add('disable-btn');
  }
}
