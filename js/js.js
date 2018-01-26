
/**
 * Menu
 */
 $('.menu').click(function() {
    $(this).toggleClass('menu_open');
    $('.menu_overlay').toggleClass('open');
    $('header').toggleClass('showmenu');
   });
 