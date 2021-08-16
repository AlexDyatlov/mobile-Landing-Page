const modal = new GraphModal({
  isOpen: (modal) => {
    
    const myCustomSlider = document.querySelectorAll('.swiper-container');
    
    for (let i = 0; i < myCustomSlider.length; i++ ) {      
      myCustomSlider[i].classList.add('swiper-container-' + i);
      
      var slider = new Swiper('.swiper-container-' + i, {
        slidesPerView: 'auto',
        spaceBetween: 10
      });
    };

    slider.update();
  }
});