$(document).ready(function() {
  $('.slider-controls__button').on('click', function(e){
    e.preventDefault();

    var $this = $(this),
        container = $this.closest('.deals'),
        list = container.find('.slider-list'),
        items = container.find('.slider-item'),
        activeSlide = items.filter('.active'),
        nextSlide = activeSlide.next(),
        prevSlide = activeSlide.prev(),
        firstSlide = items.first(),
        lastSlide = items.last(),
        sliderOffset = container.offset().left,
        reqPos = 0;

    if($(this).hasClass('arrow-right')){

        if(nextSlide.length){
          findReqPos(nextSlide);
          removeActiveSlide(nextSlide);
        } else{
          findReqPos(firstSlide);
          removeActiveSlide(firstSlide);
        }

    } else{

        if(prevSlide.length){
          findReqPos(prevSlide);
          removeActiveSlide(prevSlide);
        } else{
          findReqPos(lastSlide);
          removeActiveSlide(lastSlide);
        }

    }

    list.css('left', '-=' + reqPos + 'px');

    function removeActiveSlide(reqSlide){
        reqSlide.addClass('active').siblings().removeClass('active');
    }

    function findReqPos(slide){
        reqPos = slide.offset().left - sliderOffset;
    }
  });
});
