document.addEventListener('DOMContentLoaded', function(){
	tPage();
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
function tPage(){ 
	var $tpage =  $('.tpage');

    setTimeout(function(){
        $tpage.classList.add('hidden')
	},1500);
	
    var tpage_current = $tpage.getAttribute('data-page');
    $tpage.classList.add('tpage-'+ tpage_current,'out');

	var $tpage_link = $('.link');
        for (var i = 0; i < $tpage_link.length; i++) {
            $tpage_link[i].addEventListener('click',function(evt){
            evt.preventDefault();
            link_location = this.getAttribute('href');
            setTimeout(function(){
                window.location = link_location
            },1800);
            var tpage_target = this.getAttribute('data-link');
            $tpage.classList.remove('hidden','tpage-'+ tpage_current,'out')
            $tpage.classList.add('tpage-'+ tpage_target,'in')
        })
    } 
}	
document.addEventListener('scroll',function(){
	if(window.scrollY > 0){
		$('header').classList.add('bg')
	}else{
		$('header').classList.remove('bg')
	}
});

$('.menu-btn').addEventListener('click',function(){
	$('.nav-mobile').classList.toggle('open');
})

function Scroller(){
	var $item =	$('.layout-item');
	function offsetValue(i){
		var itemOffset = (window.scrollY >= ( i.offsetTop - window.innerHeight + 200 ) ) && (window.scrollY <= (i.offsetTop + i.offsetHeight) );	
		return itemOffset;
	};
	(function scrollAdd() {
		$item.forEach( function($item) {
			if(offsetValue($item)){
				$item.classList.add('act')
			}
		});		
	})();	
}

document.addEventListener( 'scroll', Scroller)

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






