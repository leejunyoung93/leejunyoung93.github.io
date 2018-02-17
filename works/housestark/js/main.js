
$(document).ready(function(){
	"use strict";
    $("#load").fadeOut(2800);
    setTimeout(function(){

        $("#loader").addClass('animated slideOutDown');

    },2000);
	/* Main Slider */
	$('.main-slider').flexslider({
		animation: "fade",
		slideshow: true,
		directionNav:false,
		controlNav: false,
		slideshowSpeed:8000,
		animationSpeed:2000
	});
    $('a#more-content').on( "click", function() {
        $("#main-content").addClass("more-content");
		$(".close-icon").addClass("show");
		$(".main-container").css('opacity','0');
		$(".overlay").css('z-index','2');
        $("#close-more-info").toggleClass("hide-close");

        return false;
    });

    $('.overlay, .close-icon').on( "click", function() {
        $("#main-content").removeClass("more-content");
		$(".close-icon").removeClass("show");
		$(".main-container").css('opacity','1');
		$(".overlay").css('z-index','0');
        return false;
    });
	$('.quote-slider').flexslider({
		animation: "slide",
		slideshow: true,
		directionNav:false,
		controlNav: true
	});
    $('.thumbnail').simpleLightbox();
	$('.members-slider').flexslider({
		animation: "slide",
		directionNav:true,
		controlNav: false,
		slideshow:false,
		itemWidth:286,
		prevText:"<",
		nextText:">"
	});
	$('.trailerplay').simpleLightbox();

});

