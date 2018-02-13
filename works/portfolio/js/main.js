$(document).ready(function() {
    $('.myworks > .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
                margin: 20,
                autoplay: true,
                autoplayTimeout: 6000,
                autoplayHoverPause: true
            },
            1056: {
                items: 2,
                nav: true,
                loop: true,
                margin: 20,
                autoplay: true,
                autoplayTimeout: 6000,
                autoplayHoverPause: true
            }
        }
    });
    $('.skills > .owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
          0: {
              items: 2,
              nav: true,
              loop: true,
              margin: 30,
              autoplay: true,
              autoplayTimeout: 6000,
              autoplayHoverPause: true
          },
          1056: {
              items: 5,
              nav: true,
              loop: true,
              margin: 30,
              autoplay: true,
              autoplayTimeout: 6000,
              autoplayHoverPause: true
          }
      }
  });
    $('.owl-carousel').on('mouseleave',
        function() {
            owl.trigger('play.owl.autoplay', [
                1000
            ])
        }
    )
    $('.owl-carousel').on('mouseover',
        function() {
            owl.trigger('stop.owl.autoplay')
        }
    );
    Popup.init();
    mobile();
  })
  
  $(window).resize(function(){
    mobile();
  });
  
  
  /*** MENU ***/
  
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('.menu').toggleClass('nbg');
   });
  
   $('nav a').click(function(){
     $('#toggle').removeClass('active');
     $('#overlay').removeClass('open');
     $('.menu').removeClass('nbg');
   })
  
  /*** MAIN ***/
  
  $('.side').click(function() {
    $(this).parent().addClass('open');
    $('.main,.header,.footer').addClass('hidden');
    $(this).parent().find('.close-btn').addClass('show');
    $('.page-title-line,.page-title-text h2').addClass('animate');
  });
  $('.about .side').click(function() {
    $('.works').addClass('hidden');
  });
  $('.works .side').click(function() {
    $('.about').addClass('hidden');
  });
  $('.close-btn').click(function() {
    $(this).parent().removeClass('open');
    $('.close-btn').removeClass('show');
    $('.main,.about,.works,.header,.footer').removeClass('hidden');
    $('.page-title-line,.page-title-text h2').removeClass('animate');
  });
  
  /* TYPING */
  
  var str = 'JUN YOUNG.COM',
    arr = str.split(""),
    timer;
  
  function typing() {
    if (arr.length > 0) {
        document.getElementById('typing').innerHTML += arr.shift();
    } else {
        clearTimeout(timer);
    }
    timer = setTimeout(typing,
        200);
  }
  typing();
  
  /*** ABOUT ***/
  var contactDiv = $('.contact-info');
  $('.about').on('scroll',
    function() {
        var secT = $('.about').scrollTop(),
            secH = $('.about').height(),
            contactT = contactDiv.offset().top;
        if (secT + secH > contactT) {
            $('.contact-info li').each(function() {
                $(this).find('img').addClass('animate')
            });
        }
    }
  );
  
  /*** WORKS ***/
  
  $("figure").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
  );
  
  /* POPUP */
  
  var Popup = (function() {
      var $work = $('.work'),
          $workBox = $('.work-detail-box'),
          $workItem = $('.work-detail-box > div'),
          $back = $('.back'),
          $menu = $('.menu')
    
      function init() {
          initEvents();
      }
    
      function initEvents() {
          $workBox.fadeOut();
          $back.click(function() {
              $menu.delay(200).fadeIn();
              $workBox.fadeOut();
              $workItem.removeClass('show');
          });
          $work.on('click',
              function(event) {
                  $workBox.fadeIn();
                  $menu.fadeOut();
                  var $workItem = $workBox.find("[data-panel='" + $(this).data('panel') + "']");
                  $workItem.addClass('show');
                  return false;
              }
          );
      }
      return {
          init: init
      };
    })();
  
      $('.moreinfo-btn').click(function(){
        if($(this).hasClass('open')!==true){
        $('.work-detail-content').fadeIn();
      }else{
        $('.work-detail-content').fadeOut();
      }
      });
      $(".moreinfo-btn").click(function() {
         $(this).toggleClass("open");
      });
      $('.back').click(function(){
        if($('.moreinfo-btn').hasClass('open') == true){
          $('.work-detail-content').fadeOut();
        }
      })
  /*** MOBLIE DEVICE ***/
  
  var mobile = function() {
    if ($(window).width() < 1401) {
        $('.close-btn').parent().removeClass('open');
        $('.close-btn').removeClass('show');
        $('.main,.about,.works,.header,.footer').removeClass('hidden');
        $('.myworks').insertBefore($('.contact'));
        $('.profile-img').insertAfter($('.profile-content h3'));
        $('.contact-info li').each(function() {
          $(this).find('img').addClass('animate');
      });
    }else {
        $('.myworks').appendTo($('.works .page-content'));
        $('main').scrollTop(0);
    }
    if($(window).width() > 786){
      $('.profile-img').insertBefore($('.profile-content'));
    }
    if($(window).width() > 1024){
      $('.work-detail-content').fadeIn();
    }
  }
  
  