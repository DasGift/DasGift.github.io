var ATTRS = {
  standart: 'dev/app/images/star.png'
  , choose: 'dev/app/images/yellow-star.png'
  , click: 'dev/app/images/yellow-star.png'
};

$(document).ready(function() {

  $('.deal-rating > .star').click(function(event) {
    //AddColorToStars(this, ATTRS.click);
    ClickStars(this, ATTRS.click)
  });

  $('.deal-rating > .star').mousemove(function(event) {
    AddColorToStars(this, ATTRS.click);
  });

  // $('.stars-wrapper > .star').mouseout(function(event) {
  //   AddColorToStars(this, ATTRS.standart);
  //   //ClickStars(this, ATTRS.click)
  // });
});

function AddColorToStars(element, attr, remove) {
  element = $(element);
  var parent = element.closest('.deal-rating');
  var coloring = true;

  parent.find('.star').each(function() {
    if ($(this).index() > element.index()) {
      coloring = false;
    } else{
      $(this).attr('src', ATTRS.standart);
    }
    if (coloring && ! remove) {
      $(this).attr('src', attr);
    } else{
      $(this).attr('src', ATTRS.standart);
    }
  });
}

function ClickStars(element, attr){
  element = $(element);
  var parent = element.closest('.deal-rating');
  var coloring = true;

  parent.find('.star').each(function(){
    if ($(this).index() > element.index()) {
      coloring = false;
    } else{
      $(this).attr('src', attr);
    }
    if(coloring){
      $(this).attr('src', attr);
    } else{
      $(this).attr('src', ATTRS.standart);
    }
  });
}
