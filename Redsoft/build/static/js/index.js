'use strict';

// $(document).ready(function() {
// 	$('.slider').slick();
// })

let buttonLeft = document.getElementById('slider-scale--left');
let buttonRight = document.getElementById('slider-scale--right');
let wrapApp = document.querySelector('.slider-field');
let slideApp = document.querySelector('.slider-scale');
let sliderCount = document.querySelector('.filter-slider__count');
let minX;

class Price {
	constructor() {
	}

	getMinCount() {
		slideApp.onmousedown = function(event){

			let maxCount = slideApp.clientWidth;


			let buttonLeftCoords = {
			    left: event.clientX,
			    right(){
			    	return slideApp.offsetLeft + slideApp.clientWidth;
			    }
			};

			minX = event.offsetX;

			if(minX < 0) {
				minX = 0;
			}

			buttonLeft.style.left = minX + 'px';
		};

		sliderCount.onclick = function() {
			this.value = '';
		}

		sliderCount.onblur = function() {
			if(this.value != 0) {
				return;
			} else {
				this.value = '0';
			};
		}

		sliderCount.onkeypress = function(event) {
			let code = (event.keyCode ? event.keyCode : event.which);

			let maxValue = 545000;
			let minValue = 0;

			if (code == 13) {
				let percent = (this.value / maxValue) * 100;
				buttonLeft.style.left = percent + '%';
				// slideApp.style.width = slideApp.style.width;
				// console.log(slideApp.style.width)
			} else if(event.keyCode < 48 || event.keyCode > 57) {
				return false;
			}
		}
	}
}

let min = new Price();
min.getMinCount()









