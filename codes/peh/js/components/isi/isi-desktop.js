var $ = jQuery;

/**
 * @file
 * Implement a homepage animation
 */
jQuery(document).ready(function() {
  if ($("body").hasClass("bw-desktop") || $("body").hasClass("bw-tablet")) {
    var $window = jQuery(window);
    function check_if_in_view() {
      
      var $animation_elements = jQuery('.responsive-menus-simple, #footer-wrapper');
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
         $element.addClass("in-view");
        }
        else {
          $element.removeClass("in-view");
        }
      });
    }
    
    var home_animate = function() {
      var $window = jQuery(window);
      $window.bind('scroll smartresize', check_if_in_view);
      $window.trigger('scroll');
    };
    
    home_animate();
    
    jQuery('body, .page-wrapper').bind('orientationchange', function(){
    setTimeout(function(){
      home_animate();
      jQuery(window).trigger('scroll');
    },100);
});
}

});

/*
Function for Sticky Sidebar for Desktop
*/
function stickIt() {

  if ($("body").hasClass("bw-desktop") || $("body").hasClass("bw-tablet")) {
    var $window = jQuery(window);

    var $stickElement = $('div#sidebar-second');
    var isiContBlock = $('.sidebar-isi .block-pfe-template-base .content');
    var sidebarBlock = $('#block-pfe-template-base-isi-block');

    var headerBlock = $('.responsive-menus-simple');
    var footerWrp = $('#footer-wrapper');
    var content = $('#content');
    var contentWrapper = jQuery('.content-wrapper');
    var header = $('#header');
    //variables required for calculating height sidebar and isi content
    var windowHeight = $window.innerHeight();
    var headerHeight = header.innerHeight();
    var isiTitleHeight = jQuery('.block-pfe-template-base h2').outerHeight(true);
    var isiHelpHeight = jQuery('.block-pfe-template-base span').outerHeight(true);

    var onLoadIsiHeight = windowHeight - (isiTitleHeight + isiHelpHeight) - headerHeight;

    if ($stickElement.length) {
      if (sidebarBlock.hasClass('sticky')) {
        isiContBlock.css({height: windowHeight});
      }
      else {
        isiContBlock.css({height: onLoadIsiHeight});
      }

      $(window).scroll(function (e) {
        var windowTopPosition = $window.scrollTop();
        if (jQuery('body').hasClass('front')) {
          var contentHeight = contentWrapper.innerHeight();
        }
        else {
          var contentHeight = content.innerHeight();
        }

        if(!headerBlock.hasClass('in-view')  && !footerWrp.hasClass('in-view')) {
          sidebarBlock.addClass('sticky');
          isiContBlock.css({height: windowHeight - (isiTitleHeight + isiHelpHeight)});
        }
        else if (headerBlock.hasClass('in-view') && !footerWrp.hasClass('in-view')) {
          sidebarBlock.removeClass('sticky');
          isiContBlock.css({height: windowHeight - isiTitleHeight - headerHeight + windowTopPosition});
        }
        else if (!headerBlock.hasClass('in-view') && footerWrp.hasClass('in-view')) {
          sidebarBlock.removeClass('sticky');
          isiContBlock.css({height: contentHeight - (isiTitleHeight + isiHelpHeight)});
        }

        if (!sidebarBlock.hasClass('sticky')) {
          if (headerBlock.hasClass('in-view') && !footerWrp.hasClass('in-view')) {
            isiContBlock.css({height: windowHeight - (isiTitleHeight + isiHelpHeight) - headerHeight + windowTopPosition});
          }
        }
      });
    }
  }
}

/*
Function to apply scroll to isi content div
*/
function initialize_isi_scrollbar(isiContBlock) {
  isiContBlock.mCustomScrollbar({
    autoDraggerLength: false,
    updateOnContentResize: true,
    theme: "dark-3",
    keyboard: {
      enable: true
    },
    mouseWheel: {
      preventDefault: true
    },
  });
}

/*
window load
*/
jQuery(document).ready(function () {
  if (!jQuery('body').hasClass('logged-in')) {
    var isiContBlock = $('.sidebar-isi .block-pfe-template-base .content');
    initialize_isi_scrollbar(isiContBlock);
    
    setTimeout(function() {
      stickIt();
      jQuery(window).delay(1000).trigger('scroll');
    }, 1000);
  }
});

jQuery(window).smartresize(function () {
  if (!jQuery('body').hasClass('logged-in')) {
    var isiContBlock = $('.sidebar-isi .block-pfe-template-base .content');
    initialize_isi_scrollbar(isiContBlock);
    
    setTimeout(function() {
      stickIt();
      jQuery(window).delay(1000).trigger('scroll');
    }, 1000);
  }
});


