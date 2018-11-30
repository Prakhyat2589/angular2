var $ = jQuery,
    isTooltipVisible = false;
$(document).ready(function() {
    var is_iPad = navigator.userAgent.match(/iPad/i) != null;
    /*********************************************************************
     ----------------------------------------------------------------------
     Add Placeholder in Pharmacy Finder Input
     ----------------------------------------------------------------------
     *********************************************************************/
    setTimeout(function() {
        $(".pharmacy-finder .form-item-zip input").attr("placeholder", "Enter ZIP Code");
    }, 50);

    /*********************************************************************
     ----------------------------------------------------------------------
     Slide Toggle Responsive Menu in Mobile
     ----------------------------------------------------------------------
     *********************************************************************/
    $(".bw-tablet .responsive-menus-simple, .bw-mobile .responsive-menus-simple").hide();
    $(".toggler").click(function() {
        $(".responsive-menus-simple").slideToggle("slow");
    });

    /*********************************************************************
     ----------------------------------------------------------------------
     Uniform
     ----------------------------------------------------------------------
     *********************************************************************/
    $('input:checkbox , input:radio, input:text, select').uniform();

    /*********************************************************************
     ----------------------------------------------------------------------
     Hide Card number field when disabled on Homepage
     ----------------------------------------------------------------------
     *********************************************************************/
    if ($('.mobile-card-number input').is('[readonly]')) {
        $('.mobile-card-number').addClass('element-invisible');
        $('.brand-mobile-signup').addClass('mobile-only');
    } else {
        $('.mobile-card-number').removeClass('element-invisible');
        $('.brand-mobile-signup').removeClass('mobile-only');
    }




    /*********************************************************************
     ----------------------------------------------------------------------
     Site Leaving Overlay
     ----------------------------------------------------------------------
     *********************************************************************/
    $('.exit-link').magnificPopup({
        items: {
            src: '.site-leaving-overlay',
            type: 'inline'
        },
        callbacks: {
            elementParse: function(item) {
                var magnificPopup = $.magnificPopup.instance;
                $(item.src).addClass('show');

                magnificPopup.close();

                /*Close overlay*/
                $('.overlay-close, .continue-link, .stay-link').on('click', function() {
                    magnificPopup.close();
                });

                /*Assigning current href to Continue button in overlay*/
                var currentUrl = magnificPopup.st.el[0];
                $(magnificPopup.items[0].src).find('.continue-link').attr('href', currentUrl);
            },
            open: function() {
                document.ontouchmove = function(e) {
                    e.preventDefault();
                }
            },
            afterClose: function() {
                document.ontouchmove = function() {
                    return true;
                }
            }
        }
    });

    /* California link tooltip */
    $('.california-link').click(function() {
        $('.california-tooltip-wrap .tooltip').fadeIn(500);
        $('.california-tooltip-wrap .close-btn').click(function() {
            $('.california-tooltip-wrap .tooltip').fadeOut(500);
        });
    });

    $(window).smartresize(function() {



        /*********************************************************************
         ----------------------------------------------------------------------
         Slide Toggle Responsive Menu in Mobile
         ----------------------------------------------------------------------
         *********************************************************************/
        $(".bw-tablet .responsive-menus-simple, .bw-mobile .responsive-menus-simple").hide();
        if ($(".responsive-menus").hasClass("responsive-toggled")) {
            $(".bw-tablet .responsive-menus-simple, .bw-mobile .responsive-menus-simple").show();
        }

        /*********************************************************************
         ----------------------------------------------------------------------
         Uniform
         ----------------------------------------------------------------------
         *********************************************************************/
        $('input:checkbox , input:radio, input:text, select').uniform();
        /* Align indication and medication links on window resize */
        realignLinks();
        /*Hide Tooltip on resize*/
        if ($('.tooltipster-sidetip').is(":visible")) {
            $('.indications-desktop-nav').tooltipster('hide');
        }
    });

    window.addEventListener("orientationchange", function() {
        realignLinks();
        if (is_iPad) {
            $('.indications-desktop-nav').tooltipster('destroy');
            tooltipInitialize();
        }
        /*Hide Tooltip on orientation Change*/
        if ($('.tooltipster-sidetip').is(":visible")) {
            $('.indications-desktop-nav').tooltipster('hide');
        }
    });

    /* Align indication and medication links on document ready */
    realignLinks();
    tooltipInitialize();

    /*Remove href atribute from tooltip indications link*/
    $('.indications-desktop-nav a').removeAttr('href');

    /*********************************************************************
     ----------------------------------------------------------------------
     Ad choice popup
     ----------------------------------------------------------------------
     *********************************************************************/
    //--><![CDATA[// ><!--

    (function() {
        var ev = document.createElement('script');
        ev.type = 'text/javascript';
        ev.async = true;
        ev.setAttribute('data-ev-tag-pid', 2537);
        ev.setAttribute('data-ev-tag-ocid', 2025);
        ev.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/pub/tag.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ev, s);
    })();

    //--><!]]>

    /*********************************************************************
     ----------------------------------------------------------------------
     Auto populate check box based on address field
     ----------------------------------------------------------------------
     *********************************************************************/

    $("#edit-submitted-savings-address-1, #edit-submitted-savings-address-2-optional").keyup(function() {
        if ($(this).val()) {
            $("#uniform-edit-submitted-savings-select-for-mail-1 span").addClass('checked');
        } else if (!($("#edit-submitted-savings-address-1").val() || $("#edit-submitted-savings-address-2-optional").val())) {
            $("#uniform-edit-submitted-savings-select-for-mail-1 span").removeClass('checked');
        }
    });

    /*********************************************************************
     ----------------------------------------------------------------------
     DashBoard Functionality
     ----------------------------------------------------------------------
     *********************************************************************/
    $('.panel-flexible-inside .panels-flexible-row:not(:first-child) .pane-block').hide();
    $('.page-custom-dashboard #page-wrapper .panels-flexible-row:not(:first-child) h2').each(function() {
        $(this).click(function() {
            $(this).toggleClass("pane-open");
            $(this).parent().parent().find('.pane-block').slideToggle();
        });

    });

    /**   Custom Link Tracking - Omniture  **/
    jQuery('a').each(function() {
        if ($(this).text() != '') {
            $(this).attr("sc:linkname", $(this).text());
        }
    });

    // Commenting the click event for custom omniture
    /* jQuery("a").click(function () {
      s.tl(this, "o", $(this).attr("sc:linkname"));
    }); */

    jQuery('.make-sure-brand-select').change(function() {
        jQuery('.make-sure-brand-select option:selected').each(function() {
            s.tl(this, "o", "home | choose dosage | " + jQuery(this).text());
        });
    });

    /***********For FAQ**************/
    jQuery(".paragraphs-items-field-faq-main-full h3.ui-accordion-header").each(function() {
        jQuery(this).click(function() {
            QuestionText = jQuery(this).text();
            if (!jQuery(this).hasClass("ui-accordion-header-active")) {
                s.tl(this, "o", "FAQ | " + QuestionText + " | collapse");
            } else {
                s.tl(this, "o", "FAQ | " + QuestionText + " | expand");
            }
        });
    });

    /***********Loader Icon on Ajax call of Mobile Section on Home-page**************/
    $(document).ajaxStart(function() {
        $("#webform-client-form-81 .loader").css("display", "block");
    });
    $(document).ajaxComplete(function() {
        $("#webform-client-form-81 .loader").css("display", "none");
    });

    /*********************************************************************
     ----------------------------------------------------------------------
     Add ToolTip to the Indication Link
     ----------------------------------------------------------------------
     *********************************************************************/
    function tooltipInitialize() {
        /*Fetch Indications Content*/
        var indicationTooltipText = Drupal.settings.peh_template.indication_tooltip_text;
        setTimeout(function() {
            if ($('body').hasClass('bw-desktop') && !is_iPad) {
                $('.indications-desktop-nav').tooltipster({
                    content: indicationTooltipText,
                    contentAsHTML: true,
                    arrow: false,
                    side: 'bottom',
                    maxWidth: 600,
                    maxHeight: 150,
                    zIndex: 9,
                    functionPosition: function(instance, helper, position) {
                        position.coord.top += -6;
                        position.coord.left += 180;
                        return position;
                    },
                });
            } else if ($('body').hasClass('bw-desktop') && is_iPad) {
                $('.indications-desktop-nav').tooltipster({
                    content: indicationTooltipText,
                    contentAsHTML: true,
                    arrow: false,
                    trigger: 'click',
                    touchDevices: true,
                    side: 'bottom',
                    maxWidth: 600,
                    maxHeight: 150,
                    zIndex: 9,
                    functionPosition: function(instance, helper, position) {
                        position.coord.top += -6;
                        position.coord.left += 50;
                        return position;
                    },
                });
            } else if ($('body').hasClass('bw-tablet') && is_iPad) {
                $('.indications-desktop-nav').tooltipster({
                    content: indicationTooltipText,
                    contentAsHTML: true,
                    trigger: 'click',
                    arrow: false,
                    touchDevices: true,
                    side: 'bottom',
                    width: 100,
                    maxHeight: 150,
                    zIndex: 9,
                    functionPosition: function(instance, helper, position) {
                        position.coord.top += 6;
                        return position;
                    },
                });
            } else {
                $('.indications-desktop-nav').tooltipster({
                    content: indicationTooltipText,
                    trigger: 'click',
                    contentAsHTML: true,
                    arrow: false,
                    width: 100,
                    maxHeight: 150,
                    side: 'bottom',
                    zIndex: 9,
                    functionPosition: function(instance, helper, position) {
                        position.coord.top += 0;
                        return position;
                    },
                });
            }
        }, 500);
    }

    /***********Apply left offset to Indication and medication guide links for mobile and ipad portrait**************/
    function realignLinks() {
        setTimeout(function() {
            if ($('body').hasClass('bw-tablet') || $('body').hasClass('bw-mobile')) {
                $('.indications-desktop-nav').css('left', $('.pfizer-nav').outerWidth(true) + 'px');
                $('.medication-desktop-nav').css('left', $('.pfizer-nav').outerWidth(true) + $('.isi-nav').outerWidth(true) + 'px');
                $('.top-menu-container .safety-header-links').css('height', $('.safety-header-links .menu').outerHeight(true) + $('.medication-desktop-nav').outerHeight(true) + 30 + 'px');
            } else {
                $('.indications-desktop-nav').css('left', 'auto');
                $('.medication-desktop-nav').css('left', 'auto');
                $('.safety-header-links').css('height', 'auto');
            }
        }, 500);
    }

    /* Overwriting the title text of the ISI in the right side bar */
    if ($('#block-pfe-template-base-isi-block h2').length) {
        $('#block-pfe-template-base-isi-block h2').text('IMPORTANT SAFETY INFORMATION');
    }
});