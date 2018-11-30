var $ = jQuery;
$(document).ready(function () {
  /*****************************************************************
  ------------------------------------------------------------------
  ISI Functionality
  ------------------------------------------------------------------
  *****************************************************************/
  startISI();
  // Store the window width
  var windowWidth = $(window).width();
  var onModeChanged = function () {
    var docHeight = $(document).height();
    jQuery("body").append("<div class='orientation-landscape'><div class='ori-wrap'><h2>To view this website, turn your mobile device to its upright/vertical position.</h2> <div class='icon vicon-flip-icon'></div></div></div>");
    jQuery(".orientation-landscape").height(docHeight);
  }
  if ((window.orientation == 90 || window.orientation == -90) && $("body").hasClass('dv-mobile')) {
    onModeChanged();
  }
  $(window).on('orientationchange', function () {
    var orientation = window.orientation;
    /* Display orientation change image for mobile landscape mode: start */
    if ((orientation == 90 || orientation == -90) && $("body").hasClass('dv-mobile')) {
      onModeChanged();
    } else if ((orientation == 0 || orientation == 180) && $("body").hasClass('dv-mobile')) {
      jQuery('.orientation-landscape').hide();
      jQuery('.orientation-landscape').remove();
    }
    /* Display orientation change image for mobile landscape mode: end */
    setTimeout(function () {
      if ($("body").hasClass('dv-tablet') && $("body").hasClass('bw-desktop')) {
        $("body").css({
          "padding-bottom": ""
        });
        updateISI();
        checkISI();
      } else if ($("body").hasClass('dv-tablet')) {
        $("body").css({
          "padding-bottom": "241px"
        });
        updateISI();
        checkISI();
      }
    }, 100);
  });
  $(window).smartresize(function () {
    setTimeout(function () {
      if ($(window).width() != windowWidth && $("body").hasClass('dv-desktop')) {
        // Update the window width for next time
        windowWidth = $(window).width();
        // Do stuff here
        updateISI();
        checkISI();
      }
    }, 100);
  });
});
/*****************************************************************
------------------------------------------------------------------
Function - ISI Functionality
------------------------------------------------------------------
*****************************************************************/
function startISI() {
  updateISI();
  one_fifth_collapseISI();
  $(".footer").show(); // To solve UI distorted at the time of page loading.	
  $(".isi-btn").unbind('click').click(function () {
    btnISI();
  });
}

function updateISI() {
  fullHeight = $(window).height(); // Calculate window height
  isiHeight = $(window).height() * (0.33); // For 1/3 ISI
  one_fifth_isiHeight = $(window).height() * (0.20); // For 1/5 ISI
  footer_isi = $(".footer-isi").innerHeight();
  btn_height = $(".isi-btn-wrap").innerHeight();
  content_height = footer_isi - btn_height;  
}

function one_fifth_collapseISI() {
  if ($("body").hasClass('bw-mobile')) {
    if ($("body").hasClass('dv-mobile')) {
      var mobile_ht = isiHeight;
    } else {
      var mobile_ht = "25.7%";
    }
    $(".footer-isi").animate({
      height: mobile_ht
    }, {
      duration: 1000,
      progress: function () {
        $(".isi-btn").removeClass("expand");
        updateISI();
        $(".one-third-isi-wrap").css("height", content_height - 40);
      },
      complete: function () {
        $(".scrollSec-one").css("bottom", content_height + 41);
        $("body").css({
          "padding-bottom": footer_isi,
          "overflow-y": ""
        });
      }
    });
  } else if ($("body").hasClass('bw-tablet')) {
    if ($("body").hasClass('dv-tablet')) {
      var ht = "231px";
    } else {
      var ht = "22.6%";
    }
    $(".footer-isi").animate({
      height: ht
    }, {
      duration: 1000,
      progress: function () {
        $(".isi-btn").removeClass("expand");
        updateISI();
        $(".one-third-isi-wrap").css("height", content_height - 40);
      },
      complete: function () {
        $(".scrollSec-one").css("bottom", content_height + 41);
        $("body").css({
          "padding-bottom": footer_isi,
          "overflow-y": ""
        });
      }
    });
  } else {
    $(".scrollSec-one").css("bottom", "");
    $("body").css({
      "padding-bottom": 0,
      "overflow-y": ""
    });
  }
}

function expandISI() {
  //Final Commented Code
  $(".footer-isi").animate({
    height: "100%"
  }, {
    duration: 1000,
    progress: function () {
      $(".isi-btn").addClass("expand");
      updateISI();
      $(".one-third-isi-wrap").css("height", content_height - 40);
    },
    complete: function () {
      $("body").css({
        "padding-bottom": "",
        "overflow-y": "hidden"
      });
    }
  });
}

function checkISI() {
  if ($(".isi-btn").hasClass('expand')) {
    expandISI();
  } else {
    one_fifth_collapseISI();
  }
}

function btnISI() {
  if ($(".isi-btn").hasClass('expand')) {
    one_fifth_collapseISI();
  } else {
    expandISI();
  }
}