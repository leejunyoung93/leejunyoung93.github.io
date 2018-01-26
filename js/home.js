
/**
 * Slider
 */

function Slider() {

	function init(item) {
		var items = item.querySelectorAll('.slide_item_content'),
        current = 0,
        autoUpdate = true,
        timeTrans = 4000;
        
		var slide_nav = document.createElement('div');
		slide_nav.className = 'slide_nav';

		var prevbtn = document.createElement('div');
		prevbtn.className = 'slide_nav_prev';
		prevbtn.setAttribute('aria-label', 'Prev');
		prevbtn.innerHTML = 'prev'

		var nextbtn = document.createElement('div');
		nextbtn.className = 'slide_nav_next';
		nextbtn.setAttribute('aria-label', 'Next');
		nextbtn.innerHTML = 'next';

		var slide_counter = item.querySelector('.slide_count');
		slide_counter.querySelector('span.slide_count_smallnum').innerHTML = "/"+items.length;

		if (items.length > 1) {
			slide_nav.appendChild(prevbtn);
			slide_nav.appendChild(nextbtn);
			item.appendChild(slide_nav);
		}

		items[current].className = "slide_current";
		if (items.length > 1) items[items.length-1].className = "prev_slide";

		var navigate = function(dir) {
			items[current].className = "";

			if (dir === 'right') {
				current = current < items.length-1 ? current + 1 : 0;
			} else {
				current = current > 0 ? current - 1 : items.length-1;
			}

			var	nextCurrent = current < items.length-1 ? current + 1 : 0,
				prevCurrent = current > 0 ? current - 1 : items.length-1;

			items[current].className = "slide_current";
			items[prevCurrent].className = "prev_slide";
			items[nextCurrent].className = "";

			items[current].querySelector('span.slide_count_bignum').innerHTML = current + 1;
		}
    
    item.addEventListener('mouseenter', function() {
			autoUpdate = false;
		});

		item.addEventListener('mouseleave', function() {
			autoUpdate = true;
		});

		setInterval(function() {
			if (autoUpdate) navigate('right');
		},timeTrans);
    
		prevbtn.addEventListener('click', function() {
			navigate('left');
		});

		nextbtn.addEventListener('click', function() {
			navigate('right');
		});

		document.addEventListener('keydown', function(ev) {
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					navigate('left');
					break;
				case 39:
					navigate('right');
					break;
			}
		});

		item.addEventListener('touchstart', handleTouchStart, false);        
		item.addEventListener('touchmove', handleTouchMove, false);
		var xDown = null;
		var yDown = null;
		function handleTouchStart(evt) {
			xDown = evt.touches[0].clientX;
			yDown = evt.touches[0].clientY;
		};
		function handleTouchMove(evt) {
			if ( ! xDown || ! yDown ) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
				if ( xDiff > 0 ) {
					navigate('right');
				} else {
					navigate('left');
				}
			} 
			xDown = null;
			yDown = null;
		};


	}

	[].slice.call(document.querySelectorAll('.slide')).forEach( function(item) {
		init(item);
	});

}