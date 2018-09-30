var slider = (function(){
    var flag = true,
        timerDuration = 3000,
        timer = 0;

    return{
        init: function(){
            var _this = this;

            //Run autoSwitch
            _this.autoSwitch();
        },

        moveSlide: function(slide, direction){
            var
                container = slide.closest('.slider__wrapper'),
                slides = container.find('.slide'),
                activeSlide = slides.filter('.active'),
                slideWidth = slides.width(),
                duration = 500,
                reqCssPosition = 0,
                reqSlideStrafe = 0; //смещение на определенное количество пикселей

            if(flag){
                flag = false;
                if(direction === 'forward'){
                    reqCssPosition = slideWidth; //позиция слайда равна ширине слайда
                    reqSlideStrafe = - slideWidth; //смещение слайда равно ширине слайда
                } else if(direction === 'backward'){
                    reqCssPosition = -slideWidth; //позиция слайда равна ширине слайда
                    reqSlideStrafe = slideWidth; //смещение слайда равно ширине слайда
                }

                slide.css('left', reqCssPosition).addClass('inslide'); //смещаем слайд влево и добавляем класс, который предназначен для обозначения действующего слайда
                var movableSlide = slides.filter('.inslide');
                activeSlide.animate({left: reqSlideStrafe}, duration);
                movableSlide.animate({left: 0}, duration, function(){
                    var $this = $(this);
                    slides.css('left', '0').removeClass('active');
                    $this.toggleClass('inslide active');

                    flag = true;
                });
            }
        },

        autoSwitch: function(){
            var _this = this;

            timer = setInterval(function(){
                var slider = $('.slider .slide'),
                    activeSlide = slider.filter('.active'),
                    nextSlide = activeSlide.next(),
                    firstSlide = slider.first();

                    if(nextSlide.length){
                        _this.moveSlide(nextSlide, 'forward');
                    } else{
                        _this.moveSlide(firstSlide, 'forward');
                    }

            }, timerDuration);
        }
    }
}());

$(document).ready(function(){
    if($('.slider').length){
        slider.init();
    }
});