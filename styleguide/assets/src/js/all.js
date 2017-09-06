(function ($) {
  $(function() {

    //  Selectric js
    // $(function() {
    //   $('.search-area select').selectric();
    // });
    // End

    // Added technology name class of Portfolio filter section
    setTimeout(function(){
      $('.search-area ul li').each(function() {
        var technology_list = $(this).text();
        technology_list = technology_list.toLowerCase().replace(' ', '-');
        $(this).attr('class', technology_list);
      });
    }, 100);

    // Sticky Header
    $(window).scroll(function() {
      var scrolled = $(window).scrollTop();
      if(scrolled >= 52) {
        $('body').addClass('sticky-header');
      }
      else {
        $('body').removeClass('sticky-header');
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

    /* Responsive Menu */

    // Add mobile menu link
    // $('.main-menu ul li ul').parent('li').prepend('<div class="cart-arrow"></div>');
    $('.mobile-menu-btn').click(function() {
      alert('test');
      $('.main-menu-left, .main-menu-right').slideToggle();
    });

    // $('.cart-arrow').click(function() {
    //   if ($(this).siblings('ul').css('display') == 'block') {
    //     $(this).siblings('ul').slideUp();
    //   }
    //   else {
    //     $('.main-menu ul ul').slideUp();
    //     $(this).siblings('ul').slideDown();
    //   }
    // });

  })
})(jQuery);
