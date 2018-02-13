(function($) {
    $.fn.spinner = function() {
        this.each(function() {
            var el = $(this);

            // add elements
            el.wrap('<span class="spinner"></span>');     
            el.before('<span class="sub">-</span>');
            el.after('<span class="add">+</span>');

            // substract
            el.parent().on('click', '.sub', function () {
                if (el.val() > parseInt(el.attr('min')))
                    el.val( function(i, oldval) { return --oldval; });
            });

            // increment
            el.parent().on('click', '.add', function () {
                if (el.val() < parseInt(el.attr('max')))
                    el.val( function(i, oldval) { return ++oldval; });
            });
        });
    };
})(jQuery);

$('#load').delay(4000).fadeOut();

$('input[type=number]').spinner();
$(".alarm-btn").click(function() {
    $('#logo').html('').append('<strong>NOW</strong>')
  });
$("#mypage-btn").click(function() {
  $('#logo').html('').append('<strong>MY</strong> PAGE')
});
$("#nowsail-btn").click(function() {
    $('#logo').html('').append('<strong>NOW</strong> 세일')
 });
$("#nowstore-btn").click(function() {
    $('#logo').html('').append('<strong>NOW</strong> 스토어')
 });
 $("#nowkeep-btn").click(function() {
    $('#logo').html('').append('<strong>NOW</strong> 냉장고')
 });
 $("#nowevent-btn").click(function() {
    $('#logo').html('').append('<strong>NOW</strong> 이벤트')
 });
 $("#nowchange-btn").click(function() {
    $('#logo').html('').append('<strong>NOW</strong> 체인지')
 });



$('.store-box.sail,.store-box.store,.store-box-btn.store,#map-search-box').hide();
$('.store-box.sail').first().show();
$('.store-box-btn.sail li:first-child,.store-box-btn.store li:first-child').addClass('active')
$(".store-box-btn.sail li").click(function() {
    
$(".store-box.sail").fadeOut();
var activeTab = $(this).attr("rel"); 
$("#"+activeTab).fadeIn();		
    
$(".store-box-btn.sail li").removeClass("active");
$(this).addClass("active");


});

$(".map-search").click(function() {
$("#store-box1").fadeIn();
});

$(".search-button").click(function() {
    $('.storeimg,.storetitle').hide(500);
    $(".store-box-btn.store").fadeIn();
    $('.store-box.store').first().fadeIn();
    });
    $(".store-box-btn.store li").click(function() {
        
    $(".store-box.store").fadeOut();
    var activeTab = $(this).attr("rel"); 
    $("#"+activeTab).fadeIn();		
        
    $(".store-box-btn.store li").removeClass("active");
    $(this).addClass("active");
    
    
    });




$(".tab-content").hide();
$(".tab-content:first").show();
$(".card-btn").click(function() {
    
$(".tab-content").fadeOut();
var activeTab = $(this).attr("rel"); 
$("#"+activeTab).fadeIn();		
    
$(".card-btn").removeClass("current");
$(this).addClass("current");

});

$('.payment-check').click(function(){
    $('.check').toggleClass('active');
})


var _id = 0;
var itemN = $('.card-slider-item').length;
var itemW = $('#card-slider').width();	
$('.card-slider-item').width(itemW);			
    $('#card-next').click(function(){
        slideRight();
    });

    $('#card-prev').click(function(){
        slideLeft();
    });
function slideLeft(){
    _id--;
    if(_id==-1){
        _id = itemN-1;
    }
    $('#card-slider-container ul').animate({left: -(itemW*_id)},400); 
    paddleCheck();
}
function slideRight(){
    _id++;
    if(_id==itemN){
        _id = 0;
    }
    $('#card-slider-container ul').animate({left: -(itemW*_id)},400); 
    paddleCheck();
}

function paddleCheck(){
    if(_id == 0){
        $('#card-prev').addClass('disabled');
        $('#card-next').removeClass('disabled');		
    }else if(_id == itemN-1){
        $('#card-next').addClass('disabled');
        $('#card-prev').removeClass('disabled');
    }
};	
paddleCheck();
$('.cancel-btn').click(function(){
    $(this).parent().appendTo('.keep-box');
    $(this).hide();
    $(this).parent().find('.goto-btn').show();
});

$('a.exchange-btn').click(function(e){
    var id= e.target.getAttribute('id');
    if ((id!=null)&&(id!=''))
    $('div.'+id+'').appendTo('.exchange-box');
    $('div.'+id+' .goto-btn').hide();
    $('div.'+id+' .cancel-btn').show();
});

$('.close-btn1').click(function(){
    $('.cd-popup').removeClass('is-visible')
});
