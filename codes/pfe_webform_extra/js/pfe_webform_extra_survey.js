/**
 * @file
 * Survey webform functionality
 */
 (function ($) {
      Drupal.behaviors.pfe_webform_extra_survey = {
        attach: function(context, settings) {
          $('.xelsource label:eq(0)').html('XELSOURCE<sup>SM</sup>');
          $('.copay-terms-wrap label:eq(0)').html('Co-Pay Savings Card<sup class="dag">&dagger;</sup>');
          $('.elig-patients label:eq(0)').html('3. Do you know about the XELJANZ Co-Pay Savings Card for eligible patients?<sup class="dag">&dagger;</sup>');
          if (!$('a[data-target="#copayTerms"]').prev().hasClass('dag')) {
            $('<sup class="dag">&dagger;</sup>').insertBefore('a[data-target="#copayTerms"]');
          }

          $('.check-class').hide();

          $('.add-check.webform-component-checkboxes').each(function () {
            var checkApply = $('.check-class').clone();
            var elem = $(this).find('label:eq(0)');
            var findElem = $(this).find('span.check-apply-class');
            if(findElem.length == 0) {
              checkApply.appendTo(elem).addClass('check-apply-class').removeClass('check-class').show();
            }
          });
          if ($('input.main-page-form').val() == 'page break 1') {
            $('.main-container').addClass('container-open');
          }
          
          if ($('.member_id_number').hasClass('error')) {
            $('.psoriasis-xeljanz-alerts').hide();
            $('.webform-component--error-message').html('<div class="alert xeljanz-alerts alert-block alert-danger" tabindex="-1"><strong>PLEASE CORRECT THE FOLLOWING ERROR</strong></div>')
          }

          if (!jQuery(".survey-2").parent().hasClass('survey-wrapper') && jQuery('form .survey-2').length > 0) {
            jQuery("form").find('fieldset, button').wrapAll('<div class="survey-wrapper" />');
          }
        }
      }
 })(jQuery);