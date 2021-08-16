if (document.querySelector('.insurers')) {
  let startNum = 9;
  const moreBtn = document.querySelector('.insurers__btn');
  const el = document.querySelectorAll('.insurers__item').length;

  moreBtn.addEventListener('click', (e) => {
    startNum += 9;
    
    const content = Array.from(document.querySelector('.insurers__items').children).slice(0, startNum);

    content.forEach(startNum => {
      startNum.classList.add('is-visible');
    });
    content.length === el && (moreBtn.style.display = 'none');
  });
};