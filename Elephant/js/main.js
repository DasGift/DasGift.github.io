$(document).ready(function(){
	$('.modal').on('click', function(){

		$(this).addClass('menu-close');
		$('.modal-close').addClass('open');
		$('.modal-close').removeClass('menu-close');
		$('.modal-window').css({'display': 'inline-block'}).animate({top: '0'}, 500);
	});

	$('.modal-close').on('click', function(){
		$(this).removeClass('open');
		$(this).addClass('menu-close');

		$('.modal-window').animate({top: '-500px'}, 500);
		$('.modal').removeClass('menu-close').addClass('modal');
	});



(function( $ ) {
  	$.fn.selectbox = function() {
    
		var selectDefaultHeight = $('.header-countries').height();
		var menuHeight = $('.country').height();

   
        $('li.active').click(function() {
        
        	var currentHeight = $('.header-countries').height();
          
        	if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
         		$('.header-countries').height(menuHeight); 
         		$('.header-countries').css({'transform': 'translateY(-9%)'})
         	}
          	if (currentHeight >= menuHeight) {
            	$('.header-countries').height(selectDefaultHeight);
            	$('.header-countries').css({'transform': 'translateY(-50%)'});
          	} else if($('li.active').click()){
          		$('.header-countries').height(menuHeight); 
         		$('.header-countries').css({'transform': 'translateY(-9%)'}) 
          	}
      	});

     // так же сворачиваем список при выборе нужного элемента 
     // и меняем текст абзаца на текст элемента в списке
      // $('li.country-item').not('li.active').click(function() {
      //   $('.header-countries').height(selectDefaultHeight);
      //   $('li.active').removeClass('active');
      //  	// //$('li.country-item').css({transform: rotateDefault});
      //  	$(this).addClass('active');
      //   $('li.active').text($(this).text());
      //   console.log(444)
      //});
      $('li.country-item').not('li.active').click(function(){

      });
  	};
})( jQuery );

$('.header-countries').selectbox();

	// let items = $('.country-item');
	// let choose = [];
	// let menuList = $('.country');


	// $(items).on('click', function(){
	// 	$(items).addClass('active');
	// 	$(menuList).addClass('country-open');

			
	// 		choose.unshift(this);

	// 		let activeItem = choose[0];

	// 		// if($(menuList)){
	// 			$(activeItem).on('click', function(){
	// 				if($(menuList)){
	// 					$(items).removeClass('active');
	// 					$(this).addClass('active');
	// 					$(menuList).removeClass('country-open');
	// 				} 
	// 			})

			

	// })

	

	

	


	// let items = document.querySelectorAll('.country-item');
	// let chooseMenu = document.getElementById('country');
	// let choose = [];

	// function selectCountry(){
	// 	for(var i = 0; i < items.length; i++){
			
	// 	}
	// 	chooseMenu.onclick = function(){
	// 			items[i].classList.add('active');
	// 		}
	// }

	// selectCountry()
})