var $ = jQuery;
(function ($) {
  $(function () {
    $(window).smartresize(function () {
      menuoffset();
      resetViewport();      
    });
    jQuery(window).keyup(function (e) {
      if (e.keyCode == 27 && jQuery('html').hasClass('morph-open')) { // esc
        jQuery('.morph-button.active.open .icon-close').trigger('click');
      }
    });

    $('.sign-up .btn-primary.form-submit').text('SIGN ME UP');

    /*****************************************************************
    ------------------------------------------------------------------
    Mobile - Push Menu
    ------------------------------------------------------------------
    *****************************************************************/
    $('[data-toggle="push"]').each(function () {
      var $this = $(this);
      var $target = $($this.data('target') || $this.attr('href') || '#navbar');
      var direction = $this.data('direction') || 'left';
      $target.addClass('navbar-push').addClass('navbar-push-' + direction);
      var $canvas = $($this.data('canvas') || 'body');
      $canvas.addClass('push-canvas');
      $this.on('click', function (e) {
        $this.toggleClass('active');
        if ($this.is('.fa-bars')) {
          $this.toggleClass('fa-rotate-90');
        }
        $canvas.toggleClass('pushed-' + direction);
        $target.toggleClass('in');
        if ($('body').hasClass('pushed-left')) {
          $('body').addClass('body-left');
          $('.floating-isi').css({
            'left': -($('#slide-menu').width()),
            "right": "auto"
          });
          if ($('body').hasClass('bw-tablet')) {
            document.ontouchmove = function (e) {
              e.preventDefault();
            }
          }
        } else {
          $('.floating-isi').css({
            'left': '0',
            'right': '0'
          });
          setTimeout(function () {
            $('body').removeClass('body-left');
          }, 1000);
          document.ontouchmove = function (e) {
            return true;
          }
        }
      });
    });
    $('body, .floating-isi, .one-third-isi-cont').on('touchstart', function (e) {
      if ($('#slide-menu').hasClass('in')) {
        if ($(e.target).closest('.header-extra-menu ul li').last().length == 0 && !$('#main-menu-nav button.navbar-toggle').is(":visible")) {
          if ($(e.target).closest('#slide-menu').length != 1) {
            $('.header-extra-menu ul li:last a').click();
          }
        }
        if ($(e.target).closest('.navbar-header').length == 0) {
          if ($('#slide-menu').hasClass('in')) {
            $('#main-menu-nav button.navbar-toggle').click();
          }
        }
      }
    }).find('#slide-menu').on('touchstart', function (e) {
      e.stopPropagation();
    });
    /*****************************************************************
    ------------------------------------------------------------------
    Mobile - making scroll disable on pop open
    ------------------------------------------------------------------
    *****************************************************************/
    jQuery('.modal').on('shown.bs.modal', function () {
      $('html').addClass('modal-open');
      document.ontouchmove = function (e) {
        e.preventDefault();
      }
    }).on('hidden.bs.modal', function () {
      $('html').removeClass('modal-open');
      if ((!jQuery('html').hasClass('morph-open')) || (!jQuery('body').hasClass('bw-mobile page-uncommon-sense'))) {
        document.ontouchmove = function (e) {
          return true;
        }
      }
    });
    /*****************************************************************
    ------------------------------------------------------------------
    Replacing ISI content on popup
    ------------------------------------------------------------------
    *****************************************************************/
    jQuery('.indication-popup').on('shown.bs.modal', function () {
      var isiCont = $('.sidebar-isi .content').html();
      $('.indication-popup .mCSB_container').html(isiCont);     
    });        

    /*****************************************************************
    ------------------------------------------------------------------
    Desktop - making scroll visible on video popup open
    ------------------------------------------------------------------
    *****************************************************************/
    jQuery('.modal.videomodal').on('shown.bs.modal', function () {
      jQuery('body, .page-wrapper').removeClass('modal-open');
      document.ontouchmove = function (e) {
        return true;
      }
    });
    /*****************************************************************
    ------------------------------------------------------------------
    Desktop Menu Dropdown functionality
    ------------------------------------------------------------------
    *****************************************************************/
    $('#main-menu-nav [data-toggle="menudown"]').each(function () {
      var $this = $(this);
      var $target = $($this.data('target') || $this.find('ul:eq(0)'));
      $target.addClass('navbar-dropdown-menu-1').addClass('depth-1').hide();
      $this.find('ul li ul').addClass('depth-2');
    });
    device_menu_handler();
    $(window).smartresize(function () {
      device_menu_handler();
    });
    /*****************************************************************
    ------------------------------------------------------------------
    Add Top Menu classes for toggle
    ------------------------------------------------------------------
    *****************************************************************/
    $('#other-site-link').click(function () {
      if ($(this).hasClass('collapseExample-open')) {
        $('#collapseExample').slideUp(600);
        $(this).removeClass('collapseExample-open');
        $(this).find('.glyphicon-arrow-down').removeClass('whiteArrUp');
        setTimeout(function () {
          stickIt();
        }, 600);
      } else {        
        $('#collapseExample').slideDown(600);
        $(this).addClass('collapseExample-open');
        $(this).find('.glyphicon-arrow-down').addClass('whiteArrUp');
        setTimeout(function () {
          stickIt();
        }, 600);
      }
    });
    /**
     * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
     */
    function reposition() {
      var modal = $(this),
      dialog = modal.find('.modal-dialog');
      modal.css('display', 'block');
      // Dividing by two centers the modal exactly, but dividing by three
      // or four works better for larger screens.
      if (modal.attr('id') != 'find-a-rheumat-terms') {

         //Position of the popup above footer ISI in mobile
		 if($('body').hasClass('dv-mobile')){
			dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 4));

			//For smaller devices like iphone5, GalaxyS
			if($(window).width() <= 375) {
				dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 5));

				  //Apply scollbar for the popups in smaller devices
				  $('#firstUserPopup .modal-content .first-visitor-content').mCustomScrollbar({
					autoDraggerLength: false,
					updateOnContentResize: true,
					theme: "dark-3",
					autoHideScrollbar: true,
					keyboard: {
					  enable: true
					},
					mouseWheel: {
					  preventDefault: true
					},
					scrollInertia: 50
				  });
			}
			else {
				$('#firstUserPopup .modal-content .first-visitor-content').mCustomScrollbar('destroy');
			}
		 }

		 else if ($('body').hasClass('dv-tablet')) {
			dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 3));
		 }

		 //Position of the popup in the middle of the screen for the rest of the devices
		 else {
			dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
		 }

      }
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function () {
      $('.modal:visible').each(reposition);
    });
    /*****************************************************************
    ------------------------------------------------------------------
    Display changes for mobile for what-is-xeljanz page
    ------------------------------------------------------------------
    *****************************************************************/
    device_slider_section();
    $(window).smartresize(function () {
      device_slider_section();
      mobilemenuopen();
      movemenu();
      $('input:checkbox , input:radio, input:text, select').uniform();
    });
    /*****************************************************************
    ------------------------------------------------------------------
    mCustomScrollbar for Page a Doctor Page
    ------------------------------------------------------------------
    *****************************************************************/
    $(document).ready(function () {
      setTimeout(function(){     
      }, 1000);
      $(window).load(function () {
        $.mCustomScrollbar.defaults.axis = "yx";
        $('.one-third-isi-wrap').mCustomScrollbar({
          autoDraggerLength: false,
          updateOnContentResize: true,
          theme: "dark-3",
          autoHideScrollbar: true,
          keyboard: {
            enable: true
          },
          mouseWheel: {
            preventDefault: true
          },
          scrollInertia: 50
        });
        $('.data-results, .copay-terms-body, .information .modal-wrap .popup-contentwrap').mCustomScrollbar({
          autoDraggerLength: false,
          updateOnContentResize: true,
          theme: "dark-3",
          autoHideScrollbar: false,
          keyboard: {
            enable: true
          },
          mouseWheel: {
            preventDefault: true
          },
          scrollInertia: 50
        });
        //Top Menu Indication popup 
        $('[data-toggle="modal"]').click(function () {
          $('.content-lightboxes .modal-content .modal-body').mCustomScrollbar({
            autoDraggerLength: false,
            updateOnContentResize: true,
            theme: "dark-3",
            autoHideScrollbar: true,
            keyboard: {
              enable: true
            },
            mouseWheel: {
              preventDefault: true
            },
            scrollInertia: 50
          });
        });
      });
    });
    /*****************************************************************
    ------------------------------------------------------------------
    Function to add toggle class on button click
    ------------------------------------------------------------------
    *****************************************************************/
    $('.email-form-expand .btn-primary').click(function () {
      container = jQuery(this).closest('div.animation-element').attr('id');
      if ($(this).hasClass('collapseExample-open')) {
        setTimeout("jQuery('#' + container + ' .expand-body .btn-primary').removeClass('collapseExample-open');", 1000);
        setTimeout("jQuery('#' + container + ' .expand-body .btn-primary').find('.content-expand .btn-primary span').removeClass('whiteArrUp');", 1000);
      } else {
        setTimeout("jQuery('#' + container + ' .expand-body .btn-primary').addClass('collapseExample-open');", 1000);
        setTimeout("jQuery('#' + container + ' .expand-body .btn-primary').find('.content-expand .btn-primary span').addClass('whiteArrUp');", 1000);
      }
    });
    /*****************************************************************
    ------------------------------------------------------------------
    Function for SORT Dropdown functioality
    ------------------------------------------------------------------
    *****************************************************************/
    $('.select-ans').hide();
    $('#option1').show();
    $('#selectoption').change(function () {
      $('.select-ans').hide();
      $('#' + $(this).val()).show();
    });
    /*****************************************************************
    ------------------------------------------------------------------
    Function to add paragraph after submit button on unsubscribe page
    ------------------------------------------------------------------
    *****************************************************************/
    $('.unsubscribe .webform-component-markup p').insertAfter('.unsubscribe .webform-submit');
    /*****************************************************************
    ------------------------------------------------------------------
    Function for adding class to body on video thumbnail click
    ------------------------------------------------------------------
    *****************************************************************/
    jQuery('.modal.videomodal').on('shown.bs.modal', function () {
      $('body, html').addClass('popup-in');
    })
    jQuery('.modal.videomodal').on('hidden.bs.modal', function () {
        $('body, html').removeClass('popup-in');
      })
    /*****************************************************************
    ------------------------------------------------------------------
    Code snippet to hide carousel arrows when share this info is open
    ------------------------------------------------------------------
    *****************************************************************/
    $('.share-text .ctools-modal-share-info-modal-style').on('mouseover', function () {
      var open_form = $(this).closest('.share-text').find('.share-info-form');
      open_form.addClass('openform');
    });
    $('.share-text .ctools-modal-share-info-modal-style').on('mouseout', function () {
      var open_form = $(this).closest('.share-text').find('.share-info-form');
      open_form.removeClass('openform');
    });
    $('.share-text .ctools-modal-share-info-modal-style').on('click', function () {
      var share_popup = $(this).closest('.share-text').find(".share-info-form");
      if ($(this).hasClass('shown')) {
        $(this).removeClass('shown');
        $(share_popup).slideToggle("50000");
      } else {
        $(".share-info-form").show();
        $(this).addClass('shown');
        var modal_check = setInterval(function () {
          if ($('.modal-share-info-success-message').length > 0) {
            clearInterval(modal_check);
            $(share_popup).slideToggle("10000");
          }
        }, 3000);
      }
    });
    /*****************************************************************
    ------------------------------------------------------------------
    Code snippet to prevent clicking on search glass tooltip link
    ------------------------------------------------------------------
    *****************************************************************/
    $("a.search-glass").on("click", function (e) {
      e.preventDefault();
    });

    /*****************************************************************
    ------------------------------------------------------------------
    Page Hide
    ------------------------------------------------------------------
    *****************************************************************/
    setTimeout(function () {
      $('body').css({
        "visibility": "visible",
        "background": ""
      });
    }, 2000);
  });
})(jQuery);
/*****************************************************************
------------------------------------------------------------------
function for slider navigation
------------------------------------------------------------------
*****************************************************************/
function device_slider_section() {
  if ($('body').hasClass('bw-mobile')) {
    //Tabber-Accordion section
    $('.mob-section').show();
    $('.desk-section').hide();
    //Add sliding navbar at the top of slider
    if ($('.fp-slidesNav.top').length == 0) {
      $('.fp-controlArrow.fp-prev').prependTo('.fp-slidesNav');
      $('.fp-controlArrow.fp-next').appendTo('.fp-slidesNav');
      var topSliderNav = $('.fp-slidesNav').clone();
      topSliderNav.prependTo('.fp-slides').removeClass('bottom').addClass('top');
    }
  } else {
    //Tabber-Accordion section
    $('.mob-section').hide();
    $('.desk-section').show();
    //Add sliding navbar at the top of slider
    $('.fp-slidesNav.top').remove();
  }
}
/*****************************************************************
------------------------------------------------------------------
function for Desktop Menu Dropdown, top menu position for tablet
------------------------------------------------------------------
*****************************************************************/
function device_menu_handler() {
  if ($('body').hasClass('bw-tablet')) {
    $('.top-submenu-mobile, .top-menu-mobile').remove();
    // Unbind the hover effect for tablet menu
    $('#main-menu-nav [data-toggle="menudown"]').off('mouseover');
    $('#main-menu-nav [data-toggle="menudown"]').off('mouseout');
    /*Function to show ipad submenu expanded--*/
    if ($('.navbar-toggle').hasClass('active')) {
      $('ul.depth-1').show();
    }
    $('.navbar-toggle').click(function () {
      if ($(this).hasClass('active')) {
        $('ul.depth-1').show();
      }
      //Top menu positioning for tablet
      if ($('#slide-menu ul .top-menu-tablet').length == 0) {
        var topMenuLast = $('.top-menu-menus li.last').clone(),
          topSubmenu = $('.other-sites-submenu').clone();
        var targetli = $('#slide-menu ul li[data-toggle="menudown"].last');
        topMenuLast.insertAfter(targetli)
          .addClass('top-menu-tablet expanded')
          .removeClass('collapsed col-sm-3 col-xs-3 col-lg-auto')
          .attr('data-toggle', '');
        topMenuLast.find('a').attr('data-toggle', '');
      }
    });
  } else if ($('body').hasClass('bw-mobile')) {
    //Top menu positioning for mobile
    if ($('#slide-menu ul .top-menu-mobile').length == 0) {
      var topMenuLast = $('.top-menu-menus li.last').clone(),
        topSubmenu = $('.other-sites-submenu').clone();
      var targetli = $('#slide-menu ul li[data-toggle="menudown"].last');
      topMenuLast.insertAfter(targetli)
        .addClass('top-menu-mobile expanded')
        .removeClass('collapsed col-sm-3 col-xs-3 col-lg-auto')
        .attr('data-toggle', '');
      topMenuLast.find('a').attr('data-toggle', '');
    }
    //Top menu positionning
    $('.top-submenu-tablet').remove();
    $('.top-menu-tablet').remove();
  } else {
    //Menu Dropdow functionaliy for desktop
    $('ul.depth-1').hide();
    //Top menu positionning
    $('.top-submenu-tablet, .top-menu-tablet, .top-submenu-mobile, .top-menu-mobile').remove();
    $('#main-menu-nav [data-toggle="menudown"]').each(function () {
      var $this = $(this);
      var $target = $($this.data('target') || $this.find('ul:eq(0)'));
      // Add extra classes
      $target.addClass('navbar-menudown-menu-1').addClass('depth-1').hide();
      $this.find('ul li ul').addClass('depth-2');
      $this.on('mouseover', function (e) {
        // Remove border of previous element
        $this.prev('li.expanded').addClass('border-out');
        // Add active class to current element only
        $this.siblings().removeClass('active').find('ul.depth-1').hide();
        var $target = $($this.data('target') || $this.find('ul:eq(0)'));
        $this.addClass('active');
        // Show submenu
        $target.show();
      });
      $this.on('mouseout', function (e) {
        $this.prev('li.expanded').removeClass('border-out');
        var $target = $($this.data('target') || $this.find('ul:eq(0)'));
        $this.removeClass('active');
        $target.hide();
      });
    });
    //}
  }
}

/*mscrollbar ISI desktop*/
$(document).ready(function () {
  mobilemenuopen();
  movemenu();
  //Uniform js
  $('input:checkbox , input:radio, input:text, select, input.form-checkbox').uniform();
  //Redirect to same section on page
  $('a.redirect-section').click(function () {
    var target = $(this).attr('redirect-section');
    target = $('[data-anchor=' + target + ']');
    if (target.length) {
      $('html,body, .page-wrapper').animate({
        scrollTop: target.offset().top + 1
      }, 1000);
      return false;
    }
  });
  //Close Morph button (side effects) on body click
  $('body').click(function (event) {
    if (!jQuery(event.target).closest('.morph-content').length && !jQuery('body').hasClass('page-uncommon-sense')) {
      $('.morph-button.active.open .icon-close').trigger('click');
    }
  });
  //GA classes code
  jQuery('.tabbable li.vertical-tab-button').each(function () {
    var links = jQuery(this).find('a:eq(0)').attr('href');
    var class_find = jQuery(links).find('span.ga-classes').attr('ga-class');
    jQuery(this).find('a:eq(0)').addClass(class_find);
  });
  jQuery('.mob-quick-facts .views-accordion-header a, .about-xelsource-section-mob .views-accordion-header a').on('click', function () {
    var eles = jQuery('.ui-accordion-header-active');
    setTimeout(function () {
      var window_top_position = jQuery(window).scrollTop();
      if (window_top_position > jQuery('.ui-accordion-header-active a:eq(0)').offset().top) {
        var top_ele = jQuery('.ui-accordion-header-active a:eq(0)').offset().top - 20;
        jQuery('html,body,.page-wrapper').animate({
          scrollTop: top_ele,
        }, 'fast');
      }
    }, 1000);
  });
  // JS for mobile number disable for iphone
  jQuery(function () {
    if (jQuery('body').hasClass('.bw-mobile')) {
      jQuery("span.no-tel").css({
        "pointer-events": "none",
        "cursor": "text"
      });
    }
  });
  
  //Hide ISI on keyboard show for mobile and tablet
  if ($('body').hasClass('bw-mobile') || $('body').hasClass('dv-tablet')) {
    var footer_ht = $(".footer-isi").innerHeight();
    $("input:text, select, textarea, email").not("input:radio, input:checkbox").on('focus', function () {
        footer_ht = $(".footer-isi").innerHeight();
        $('body').css("padding-bottom", "");
        $('body').addClass('keyboard-open');
        setTimeout(function () {
          stickIt();
        }, 600);
        $('.floating-isi').addClass('form-isi-footer');
      })
      .on('blur', function () {
        $('body').css("padding-bottom", footer_ht + 10);
        $('.floating-isi').removeClass('form-isi-footer');
        setTimeout(function () {
          stickIt();
        }, 600);
        $('body').removeClass('keyboard-open');
      });
  }
  $('.dv-tablet, .dv-mobile').on('touchstart', function (e) {
    var target = $(e.target);
    if (!target.is('input')) {
      if ($('body').hasClass('keyboard-open')) {
        document.activeElement.blur();
        $('body').removeClass('keyboard-open');
      }
    }
  });
  // To avoid cross-frame scripting.
  if (top.location != self.location) {
    top.location = self.location;
  }
});
$(document).ready(function () {
  if ($('body').hasClass('bw-desktop')) {
    jQuery('.ga-indication-header').attr('data-target', '#firstuserslide');
    jQuery('.ga-isi-header').attr('data-target', '#indicationPopup');
  }
  if ($('body').hasClass('front')) {
    $('html').css('overflow-x', 'hidden');
  }
  $('a[href^="tel"]').on('click', function (e) {
    if ($("body").hasClass("dv-desktop")) {
      e.preventDefault();
      e.stopPropagation();
    }

  });
  $('.other-resources-fp .section-row-first .views-row-1, .other-resources-fp .section-row-first .views-row-2').find('#playerLightbox2, #playerLightbox').appendTo('.other-resources-fp .section-row-first .view-content');
  $('.dv-tablet.what-is-xeljanz .section-row-second').find('.lt-overlay').appendTo('.dv-tablet.what-is-xeljanz .section-row-second');

  menuoffset();
  if ($('body').hasClass('sign-up')) {
    $('.webform-calendar').attr('src', '/sites/default/themes/custom/psa_xeljanz/images/calendar.png');
  }
});
/*****************************************************************
------------------------------------------------------------------
Function to keep sub navigation open by default in mobile mode
------------------------------------------------------------------
*****************************************************************/
function mobilemenuopen() {
  if ((getDevice() == "mobile") || jQuery('body').hasClass('bw-mobile')) {
    jQuery("#slide-menu .menu.nav.navbar-nav.depth-1").css('display', 'block');
    /*--Added to check if resolution is that of Desktop but user agent is of Mobile---*/
    if (winWidth > 991) {
      jQuery("#slide-menu .menu.nav.navbar-nav.depth-1").css('display', 'none');
    }
  }
}
/*****************************************************************
------------------------------------------------------------------
Function to move sidebar menu after first link in mobile menu
------------------------------------------------------------------
*****************************************************************/
function movemenu() {
  if ((getDevice() == "mobile") || jQuery('body').hasClass('bw-mobile') || jQuery('body').hasClass('bw-tablet')) {
    if (jQuery('.mobile-menu-sidebar').length == 0) {
      jQuery("#navmenu-sidebar ul.reg li").clone().insertAfter('#main-menu-nav .main-nav li.first.leaf').addClass('mobile-menu-sidebar');
      jQuery("#navmenu-sidebar ul.reg").hide();
      /*--Added to check if resolution is that of Desktop but user agent is of Mobile---*/
      if (winWidth > 991) {
        jQuery("#navmenu-sidebar ul.reg").show();
        jQuery("li.mobile-menu-sidebar").remove();
      }
    }
  } else {
    jQuery("li.mobile-menu-sidebar").remove();
    jQuery("#navmenu-sidebar ul.reg").show();
  }
}
/*****************************************************************
------------------------------------------------------------------
Function to Reset Viewport
------------------------------------------------------------------
*****************************************************************/
function resetViewport() {
  //console.log("resetViewport");
  setTimeout(function () {
    if ($('meta[name=viewport]').length) {
      $('meta[name=viewport]').remove();
      $('head').prepend('<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">');
    }
  }, 300);
}

  /*********************************************
  -----------------------------------------------
   Swap position of asterick and checkbox in update information page
  ----------------------------------------------
  **********************************************/
$(document).ready(function () {
  setTimeout(function () {
    $('.update-information .checkbox label > div').insertBefore('.ga-update-taking-xel span.form-required')
   },1000);
});

/**********************************************************************************************
------------------------------------------------------------------------------------------------
Function to calculate menu offset from left and to assign the same offset value to cookie popup
-----------------------------------------------------------------------------------------------
**************************************************************************************************/
function menuoffset() {
  var offsetval = $("#main-menu-nav").offset();
  jQuery('.bw-desktop .information.global-popup .modal-dialog').css('marginLeft', offsetval.left + 0);
}
$(window).load(function () {
  menuoffset();

  //Applying height moving image 
  setTimeout('var mov_height = jQuery(".tallboy-video").height();jQuery(".pt-wrp, .pt-pullquote").css({height:mov_height})', 1500);
});


/*************************************************
--------------------------------------------------
Applying moving image height to content on resize
--------------------------------------------------
**************************************************/
$(window).bind('resize', function () {
  var mov_height = jQuery(".tallboy-video").height();
  jQuery(".pt-wrp, .pt-pullquote").css({
    height: mov_height
  });
});
