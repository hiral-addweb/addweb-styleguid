(function ($) {
  $(function() {
    
    //  Selectric js
    jQuery(function() {
      jQuery('.search-area select').selectric();
    });
    // End

    // Sticky Header
    jQuery(window).scroll(function() {
      var scrolled = jQuery(window).scrollTop();
      if(scrolled >= 52) {
        jQuery('body').addClass('sticky-header');
      }
      else {
        jQuery('body').removeClass('sticky-header');
      }
    });
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
