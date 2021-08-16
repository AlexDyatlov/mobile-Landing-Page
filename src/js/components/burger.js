function disableScroll() {
  window.addEventListener('resize', () => {
    burger.classList.remove('burger--active');
    menuList.classList.remove('menu__list--active');
    htmlDisableScroll.classList.remove('disable-scroll');
  });
}

const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__list');
const htmlDisableScroll = document.querySelector('html');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menuList.classList.toggle('menu__list--active');
  htmlDisableScroll.classList.toggle('disable-scroll');

  if (burger.classList.contains('burger--active')) {
    disableScroll();
  };
});

