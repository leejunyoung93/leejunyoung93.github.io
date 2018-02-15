

( function( window ) {

'use strict';
  
    
$(document).ready(function() {
	
	var current=0;
	var slide_length = $('.slide_ul>li').length;
	var btn_ul = '<ul class="l_slide_btn"></ul>';
	


	$('.slide_ul>li').hide();
	$('.slide_ul>li').first().show();
	
	
	$(btn_ul).prependTo($('.slide'))
	for (var i = 0 ; i < slide_length; i++){
		var child = '<li><a href="#none">'+i+'</a></li>';
		$(child).appendTo($('.l_slide_btn'));
	}
	
	$('.l_slide_btn > li > a').first().addClass('active');	
	$('.l_slide_btn > li > a').on('click' , slide_stop);


function slide_stop(){
		var fade_idx = $(this).parent().index(); 
		current = $(this).parent().index();
		if($('.slide_ul > li:animated').length >= 1) return false;
		$('.slide_ul > li').fadeOut(400);
		$('.slide_ul > li').eq(fade_idx).fadeIn(400);
		$('.l_slide_btn > li > a').removeClass('active');	
		$(this).addClass('active');
		
	}	
});



})( window );


