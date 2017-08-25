(function ($) {
  $(function() {
    //Hire-Us
    if ($(window).width() > 1024) {
      $(window).scroll(function() {
        $('.hire-us').removeClass('reveal-footer');
        if($(window).scrollTop() + $(window).height() > ($(document).height() - 300) ) {
          //you are at bottom
         $('.hire-us').addClass('reveal-footer');
        }
        $('.footer').removeClass('fixed-footer');
        if($(window).scrollTop() + $(window).height() > ($(document).height() - 550) ) {
          //you are at bottom
         $('.footer').addClass('fixed-footer');
        }
      });
      $(window).resize(function() {
        $(window).scroll(function() {
          $('.hire-us').removeClass('reveal-footer');
          if($(window).scrollTop() + $(window).height() > ($(document).height() - 300) ) {
            //you are at bottom
           $('.hire-us').addClass('reveal-footer');
          }
          $('.footer').removeClass('fixed-footer');
          if($(window).scrollTop() + $(window).height() > ($(document).height() - 550) ) {
            //you are at bottom
           $('.footer').addClass('fixed-footer');
          }
        });
      });
    }
  })
})(jQuery);
