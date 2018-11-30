/*****************************************************************
 ------------------------------------------------------------------
 ISI Functionality
 ------------------------------------------------------------------
 *****************************************************************/

(function($) {
  $(document).ready(function() {

    /******* Variable Declaration *******/
    var $window = $(window);
    var isiHeight = window.innerHeight * (0.28);
    var $header = $('header');
    var $floatingIsiBlock = $('.floating-isi');
    var $inContentIsiBlock = $('.footer-isi');
    var $isiFloatContent = $('.floating-isi .footer-isi-content');
    var $isiBtn = $('.floating-isi .isi-btn');
    var $isiTitle = $('.floating-isi .footer-isi-title');
    var currentPos;
    var inContentIsiTop;


    /*** Apply height to ISI on page load ***/
    $isiFloatContent.css('height', isiHeight - ($isiTitle.outerHeight(true)) + 'px');
    $floatingIsiBlock.css('height', isiHeight + 'px');

    /**** Toggle text, class and animate on click of ISI Expand/Collapse ****/
    $isiBtn.click(function() {
      var $this = $(this);
      if ($this.hasClass('collapsed')) {
        $floatingIsiBlock.addClass('stack-up');
        animateIsiExpanded();
        $this.removeClass('collapsed');
        $this.addClass('expanded');
      } else {
        $floatingIsiBlock.addClass('stack-up');
        animateIsiCollapsed();
        $this.addClass('collapsed');
        $this.removeClass('expanded');
      }
    });

    /**** Animation Functions for ISI *****/
    function animateIsiExpanded() {
      $isiFloatContent.css('height', window.innerHeight - $isiTitle.outerHeight(true) + 'px');
      isiHeight = window.innerHeight;
      $floatingIsiBlock.animate({
        height: isiHeight
      },
      {
        duration: 1000
      }
      );
    }

    function animateIsiCollapsed() {
      isiHeight = window.innerHeight * (0.28);
      $floatingIsiBlock.animate({
        height: isiHeight
      },
      {
        duration: 1000,
        complete: function() {
          $isiFloatContent.css('height', isiHeight - $isiTitle.outerHeight(true) + 'px');
        }
      }
      );
    }

    /***** Apply Custom scrollbar to ISI ******/

    $isiFloatContent.mCustomScrollbar({
      autoDraggerLength: true,
      updateOnContentResize: true,
      theme: "dark-3",
      keyboard: {
        enable: true
      },
      mouseWheel: {
        preventDefault: true
      },
      scrollInertia: 500
    });

    /* functionality for showing in content ISI on scrolling down the page on WINDOW LOAD */
    $window.on('scroll', function() {
      showHideIsi();
    });

     /*** Expand/Collapse AND apply height to ISI on Window Resize ***/
    $window.resize(function() {
      isiHeight = window.innerHeight * (0.28);
      if ($isiBtn.hasClass('collapsed')) {
        $isiFloatContent.css('height', isiHeight - $isiTitle.outerHeight(true) + 'px');
        $floatingIsiBlock.css('height', isiHeight + 'px');
      } else {
        $isiFloatContent.css('height', window.innerHeight - $isiTitle.outerHeight(true) + 'px');
        $floatingIsiBlock.css('height', window.innerHeight + 'px');
      }

      /* functionality for showing in content ISI on scrolling down the page on WINDOW RESIZE */
      showHideIsi();
    });

    // $('.paragraphs-items-full').dialog();

    /* Common Function for for show/hide Floating ISI */
    function showHideIsi() {
      currentPos = $window.scrollTop();
      inContentIsiTop = $inContentIsiBlock.offset().top - (window.innerHeight - $floatingIsiBlock.outerHeight());
      if (currentPos > inContentIsiTop) {
        $floatingIsiBlock.addClass('visible-lg');
      } else if (currentPos < inContentIsiTop) {
        $floatingIsiBlock.removeClass('visible-lg');
      }
    }
  });
})(jQuery);