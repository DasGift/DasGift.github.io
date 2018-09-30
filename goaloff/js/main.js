
$(document).ready(function() {

	$( window ).ready(function() {
		if($(window).width() <= '1500'){
            $(".container").css("max-width", $(window).width() - '20');
        } else{
            $('.container').css({"max-width":"1300px"});
        }
		
		if($('#block__center__news').height() < $(window).height()){
			$('#block__center__news').height($(window).height() - $('.header').height() - $('.footer').height());
		};
		
		if($('.block__left').height() > $('#block__center__news').height()){
			$('#block__center__news').height($('.wrapper').height() - $('.header').height() - $('.footer').height() - $('.all').height());
		};
		
		if($('.block__left').height() > $('#block__contacts').height()){
			$('#block__contacts').height($('.wrapper').height() - $('.header').height() - $('.footer').height() - $('.all').height());
		};
	});
	
    $(window).resize(function(){
        if($(window).width() <= '1500'){
            $(".container").css("max-width", $(window).width() - '20');
        } else{
            $('.container').css({"max-width":"1300px"});
        }
		
		$('#block__center__news').height($('.wrapper').height() - $('.header').height() - $('.footer').height() - $('.all').height());
    });
});










