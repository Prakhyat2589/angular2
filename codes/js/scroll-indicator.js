/* Scroll Indicator */
$(document).ready(function () {  
  var quickFactsTipFlag = true;
  /* Start Scroll Indicator Code */
  if ($(".fullpage-wrapper").length) {
    var sidebarLeft = $("#sidebar").offset().left;
    var fullpageTop = $(".fullpage-wrapper").offset().top + 15;
    var sectionTop = $(".section-row-first").offset().top;
    var sidebarTop = $("#sidebar").offset().top;
    var sidebarPositionTop = $("#sidebar").position().top;
    var sectionPositionTop = $(".section-row-first").position().top;

  }

  //Hide scroll indicator if only one section is present on the tallboy page
  if ($('#fp-nav ul').children().length < 2 ) {
     $('#fp-nav ul').hide();    
  }

  $('#fp-nav').css({
    "top": sectionTop + 20
  });
  $('#fp-nav').addClass('session-tip');
  $('#fp-nav').attr({
    'title': 'These dots show you where you are on the page',
    "data-placement": "left",
    "selector": "#fp-nav",
    "container": ".page-wrapper"
  });

  var scroll_indicator = getCookie('scroll-indicator-tooltip');
  $(window).on('scroll touchmove', function (e) {
    var yAxis = $(this).scrollTop();
    var posScroll = $(window).scrollTop();

    if ($(".fullpage-wrapper").length) {
      var sidebarLeft = $("#sidebar").offset().left;
      var fullpageTop = $(".fullpage-wrapper").offset().top + 15;
      var sectionTop = $(".section-row-first").offset().top;
      var sidebarTop = $("#sidebar").offset().top;
      var sidebarPositionTop = $("#sidebar").position().top;
      var sectionPositionTop = $(".section-row-first").position().top;

    }


    if (posScroll > 0 && (sectionTop < sidebarTop)) {

      $('#fp-nav').css({
        "top": parseInt($("#sidebar").css('top'), 10) + 17
      });


    } else if (posScroll > 0 && (sectionTop > sidebarTop)) {
      $('#fp-nav').css({
        "top": sectionTop + 17
      });


    } else {
      $('#fp-nav').css({
        "top": sectionTop + 17
      });


    }




    /***Scroll Indicator Tabs****/
    var lastSection = jQuery('.panels-flexible-row.section').last();

    //Scroll to top fixed
    if (jQuery(window).scrollTop() >= ($('.footer-content').position().top) - jQuery(window).height() + 260) {
      $('#fp-nav').fadeOut(200);
    } else {
      $('#fp-nav').fadeIn(200);
    }


    if (yAxis >= 54) {
      if (quickFactsTipFlag) {
        $('#fp-nav').tooltip('destroy');
        var scroll_indi_tool = getCookie('scroll-indicator-tooltip');
        if (!scroll_indi_tool) {
          setTimeout(function () {
            $('#fp-nav').tooltip('show');
          }, 4000);
          setTimeout(function () {
            $('#fp-nav').tooltip('destroy');
          }, 6000);
          quickFactsTipFlag = false
          setCookie('scroll-indicator-tooltip', '10');
        }
      }
    }
    /***ends****/
  });

  $('#fp-nav ul li').each(function () {
    $(this).find('a').attr({
      'title': $(this).find('.fp-tooltip').html(),
      "data-toggle": "tooltip",
      "data-placement": "left",
      "data-html": "true"
    });

    $(this).find('a').on({
      'mouseenter focusin': function () {
        $(this).tooltip('show');
      },
      'mouseleave focusout': function () {
        $(this).tooltip('hide');
      }
    });
  });

 

});