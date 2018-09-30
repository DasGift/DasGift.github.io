$(document).ready(function(){
  /*var social = document.getElementsByClassName('sprite');

	  social = Array.prototype.slice.call(social);
	  social.forEach(function(elem) {
		elem.onmouseover = function(){
			elem.classList.add('social-border');
		};
		elem.onmouseout = function(){
			elem.classList.remove('social-border');
		}
	});*/

  $('.toggle').click(function(){
    $(this).toggleClass('on');
    $('.partners-block').slideToggle();
  })

  /*Timer*/
  var seconds = document.getElementById('seconds');
  var minutes = document.getElementById('minutes');
  var hours = document.getElementById('hours');
  var days = document.getElementById('days');

  var countSeconds = 0;
  var countMinutes = 0;
  var countHours = 0;
  var countDays = 0;

  var count = setInterval(function(){
    countSeconds++;
    if(countSeconds > 60){
      countSeconds = 0;

      countMinutes++;
    }

    if(countMinutes > 60){
      countMinutes = 0;

      countHours++;
    }

    if(countHours > 24){
      countHours = 0;

      countDays++;
    }

    if(0 <= countMinutes || countSeconds || countDays || countHours <= 9){
      var period = [seconds, minutes, hours, days];
      for(var i = 0; i < period.length; i++){
        console.log(period[i]);
        period[i].classList.add('period-left');
      }
    }

    days.innerHTML = countDays;
    hours.innerHTML = countHours;
    minutes.innerHTML = countMinutes;
    seconds.innerHTML = countSeconds;
  }, 1000);




  /*Slider*/
    $('.about-us-controls__buttons').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.about-us-slider'),
            list = container.find('.slider-list'),
            items = container.find('.about-us__slider-item'),
            activeSlide = items.filter('.active'),
            nextSlide = activeSlide.next(),
    				prevSlide = activeSlide.prev(),
    				firstSlide = items.first(),
    				lastSlide = items.last(),
    				sliderOffset = container.offset().left,
    				reqPos = 0;

            if($this.hasClass('arrow-right')){

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
