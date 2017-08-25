(($) ->
  $ ->
    #Hire-Us
    if $(window).width() > 1024
      $(window).scroll ->
        $('.hire-us').removeClass 'reveal-footer'
        if $(window).scrollTop() + $(window).height() > $(document).height() - 300
          #you are at bottom
          $('.hire-us').addClass 'reveal-footer'
        $('.footer').removeClass 'fixed-footer'
        if $(window).scrollTop() + $(window).height() > $(document).height() - 550
          #you are at bottom
          $('.footer').addClass 'fixed-footer'
        return
      $(window).resize ->
        $(window).scroll ->
          $('.hire-us').removeClass 'reveal-footer'
          if $(window).scrollTop() + $(window).height() > $(document).height() - 300
            #you are at bottom
            $('.hire-us').addClass 'reveal-footer'
          $('.footer').removeClass 'fixed-footer'
          if $(window).scrollTop() + $(window).height() > $(document).height() - 550
            #you are at bottom
            $('.footer').addClass 'fixed-footer'
          return
        return
    return
  return
) jQuery
