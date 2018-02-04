function $(selector){
	var $el = document.querySelectorAll(selector);
	var count = $el.length;
	if(count > 1){
		return $el;
	}else if(count == 1){
		return $el[0];
	}else{
		return;
	}
}

document.addEventListener('DOMContentLoaded', function(){
	// tPage();
	Slider();
});

// function tPage(){ 

//     setTimeout(function(){
//         $('.tpage').classList.remove('act')
//     },1300);

//     $tpage =  $('.tpage')

//     /*** 고치기 ***/
//     var tpage_current = $('h2').innerHTML;
//     $tpage.classList.add('tpage_'+ tpage_current +'_out')

//     /*** 고치기 ***/
//     // 요거 js 에서 처리하지 않고 jekyll에서 하는거 알려줄게.
//     //$header = $('header');
//     //if(tpage_current !== 'intro' ){
//     //    $header.classList.remove('header_hidden')
//     //}else{
//     //    $header.classList.add('header_hidden')
//     //}

//     var $tpage_link = $('.tpage_link');
//          /*** 고치기 ***/
//         for (var i = 0; i < $tpage_link.length; i++) {
//             $tpage_link[i].addEventListener('click',function(evt){
//             evt.preventDefault();
//             link_location = this.getAttribute('href');
//             setTimeout(function(){
//                 window.location = link_location
//             },2000);
//             var tpage_target = this.getAttribute('data-link');
//             $tpage.classList.remove('tpage_hidden','tpage_'+ tpage_current +'_out')
//             $tpage.classList.add('tpage_'+ tpage_target +'_in')
//         })
//     } 
// }


function Slider() {	
	var	$slide = $('.slide'),
		$item = $('.slide ul.list li.item'),
		$prevbtn = $('.slide .slide_nav button.prev'),
		$nextbtn = $('.slide .slide_nav button.next'),
		autoSlide = true,
		current = 0
		
		$('.slide span.length').innerHTML = "/ " + $item.length;

	$item[current].classList.add('current');
	if ($item.length > 1){
		$item[$item.length-1].classList.add('item_prev');
	}

	var control = function(dir) {
		if (dir === 'next') {
			current = current < $item.length-1 ? current + 1 : 0;
		} else {
			current = current > 0 ? current - 1 : $item.length-1;
		}

		var	nextItem = current < $item.length-1 ? current + 1 : 0,
			prevItem = current > 0 ? current - 1 : $item.length-1;

		$item[current].className = "item current";
		$item[prevItem].className = "item item_prev";
		$item[nextItem].className = "item";
	}

	setInterval(function() {
		if(autoSlide)control('next');
	},5000);

	$slide.addEventListener('mouseenter',function(){
		autoSlide = false;
	})
	$slide.addEventListener('mouseleave',function(){
		autoSlide = true;
	})

	$prevbtn.addEventListener('click', function() {
		control('prev');
	});

	$nextbtn.addEventListener('click', function() {
		control('next');
	});
};