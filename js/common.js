document.addEventListener('DOMContentLoaded', function(){
	/* tpage */
	var $tpage =  $('.tpage');
	setTimeout(function(){
		$tpage.classList.add('hidden');
	},1500);
	var $tpage_link = document.querySelectorAll('.link');
	$tpage_link.forEach(function($link){
		$link.addEventListener('click', function(e){
			e.preventDefault();
			var $tpage = $('.tpage');
			var link_location = this.getAttribute('href');
			var tpage_target = this.getAttribute('data-link');
			var tpage_current = $tpage.getAttribute('data-page');

			$tpage.classList.remove('hidden', 'tpage-'+ tpage_current, 'out');
			$tpage.classList.add('tpage-'+ tpage_target, 'in');

			setTimeout(function(){
				window.location = link_location;
			},1800);
		});
	});
	$('.menu-btn').addEventListener('click',function(){
		$('.nav-mobile').classList.toggle('open');
	})
	/* scroller */
	setTimeout(function(){
		Scroller();
	},1200);
	document.addEventListener( 'scroll', Scroller,false);
	/* slider */
	Slider();
});

function $(selector){
	var $el = document.querySelectorAll(selector),
		count = $el.length;

	if(count > 1){
		return $el;
	}else if(count == 1){
		return $el[0];
	}else{
		return;
	}
}



function Scroller(){

	if(window.scrollY > 0){
		$('header').classList.add('bg')
	}else{
		$('header').classList.remove('bg')
	}

	var $item =	$('.layout-item');
	function offsetValue(i){
		var itemOffset = (window.scrollY >= ( i.offsetTop - window.innerHeight + 200 ) ) && (window.scrollY <= (i.offsetTop + i.offsetHeight) );	
		return itemOffset;
	};
	$item.forEach( function($item) {
		if(offsetValue($item)){
			$item.classList.add('act')
		}
	});	
}


function Slider() {
	var	$slider = $('.slider'),
		$item = $('.slide'),
		$prevbtn = $('.slider-nav .prev'),
		$nextbtn = $('.slider-nav .next'),
		slideLength = $item.length,
		autoSlider = true,
		current = 0;

	$('.count-length').innerHTML = '/ ' + slideLength;
	$item[current].classList.add('current');

	if (slideLength > 1){
		$item[slideLength-1].classList.add('prev');
	}

	var control = function(dir) {
		if (dir === 'next') {
			current = current < slideLength-1 ? current + 1 : 0;
		} else {
			current = current > 0 ? current - 1 : slideLength-1;
		}

		var	nextItem = current < slideLength-1 ? current + 1 : 0,
			prevItem = current > 0 ? current - 1 : slideLength-1;

		$item[current].classList.add('current');
		$item[current].classList.remove('prev');
		$item[prevItem].classList.add('prev');
		$item[prevItem].classList.remove('current');
		$item[nextItem].classList.remove('prev');
		$item[nextItem].classList.remove('current');
	}

	setInterval(function() {
		if(autoSlider){
			control('next');
		}
	},5000);

	$slider.addEventListener('mouseenter',function(){
		autoSlider = false;
		return;
	})
	$slider.addEventListener('mouseleave',function(){
		autoSlider = true;
		return;
	})

	$prevbtn.addEventListener('click', function() {
		control('prev');
	});

	$nextbtn.addEventListener('click', function() {
		control('next');
	});
};

/* map */
var position = new naver.maps.LatLng(37.3919100, 126.9845080);
var map = new naver.maps.Map('map', {
	center: position,
	zoom: 10
});
var markerOptions = {
	position: position,
	map: map,
	icon: '../img/pin.png'
};
var marker = new naver.maps.Marker(markerOptions);







