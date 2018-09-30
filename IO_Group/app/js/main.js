var slider = document.getElementById('slider');
var sliderMark = document.getElementById('slider-mark');


sliderMark.onmousedown = function(e) {
  var thumbCoords = getCoords(sliderMark);
  var shiftX = e.pageX - thumbCoords.left;
  // shiftY здесь не нужен, слайдер двигается только по горизонтали

  var sliderCoords = getCoords(slider);

  document.onmousemove = function(e) {
    //  вычесть координату родителя, т.к. position: relative
    var newLeft = e.pageX - shiftX - sliderCoords.left;

    // курсор ушёл вне слайдера
    if (newLeft < 0) {
      newLeft = 0;
    }
    var rightEdge = slider.offsetWidth - sliderMark.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    sliderMark.style.left = newLeft + 'px';
  }
  
  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };

  return false; // disable selection start (cursor change)
};

sliderMark.ondragstart = function() {
  return false;
};

function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    left: box.left + pageXOffset
  };

}



 $(function(){
    $('#textarea').autoResize();
});
