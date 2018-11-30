/**
 * @file
 * Submit handler for webform functionality 
 */
(function ($) {
  $(document).ready(function () {
    //For superscripting
    if ($(".medications").html() != undefined) {
      $(".medications label").each(function () {
        $(this).html(
          $(this).html().replace(/&reg;/gi, '<sup>&reg;</sup>').replace(/®/gi, '<sup>&reg;</sup>')
          .replace(/&trade;/gi, '<sup>&trade;</sup>')
          .replace(/™/gi, '<sup>&trade;</sup>')
          .replace(/&copy;/gi, '<sup>&copy;</sup>')
          .replace(/©/gi, '<sup>&copy;</sup>')
        );
      });
    }
    $('input:checkbox , input:radio, input:text, select, input.form-checkbox').uniform();

    //Prevent copy/paste for email fields
    $('input.confirm_e_mail_address, input.e_mail_address').bind("cut copy paste", function (e) {
      e.preventDefault();
    });

    $('#edit-submitted-fieldset-user-info-phone-number').bind('keypress', function (e) {
      return !(e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && e.which != 46 && e.which != 13);
    });
    $('#edit-submitted-fieldset-user-info-first-name, #edit-submitted-fieldset-user-info-last-name, #edit-submitted-fieldset-user-info-city, #edit-submitted-first-name, #edit-submitted-last-name').bind('keypress', function (e) {
      switch (e.keyCode) {
      case 8: // Backspace
      case 46: //Delete
      case 13: // Enter
      case 37: // Left
      case 38: // Up
      case 39: // Right
      case 40: // Down
        break;
      default:
        var regex = /^[a-zA-Z~!@#$%^&*_+-.,'\s]*$/;
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
          return true;
        }
        e.preventDefault();
        return false;
        break;
      }
    });
    
    $('#edit-submitted-first-name, #edit-submitted-last-name').bind('keypress', function (e) {
      switch (e.keyCode) {
      case 8: // Backspace
      case 46: //Delete
      case 13: // Enter
      case 72: // Left
      case 80: // Up
      case 75: // Right
      case 77: // Down
      case 9:
        break;
      default:
        var regex = /^[a-zA-Z~!@#$%^&*_+-.,'\s]*$/;
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
          return true;
        }
        e.preventDefault();
        return false;
        break;
      }
    });

    //
    $('<span class="form-required" title="This field is required.">*</span>').insertBefore('#edit-submitted-field-confirmation label');
    $('#edit-submitted-fieldset-common-i-verify label').append('<span class="form-required" title="This field is required.">*</span>');
    //Form submissions          
    function validate_email(obj_val) {
      //var email_pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/i);
      var email_pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (jQuery.trim(obj_val)) {
        if (!email_pattern.test(obj_val)) {
          return false;
        }
      }
      return true;
    }
    $('.webform-client-form .form-submit.form-submition-on').attr("disabled", "disabled");
    //form client side validation
    $('.webform-client-form .form-submit').on('click', function (e) {

      //remove error div on every submit action.
      $(".form-error-msg").remove();

      if ($(this).hasClass('form-submition-on')) {
        e.preventDefault();
        return false;
      } else {
        $(this).addClass('form-submition-on');
      }
      var form_errors_flag = false;
      $('input.required, select.required').each(function () {
        if (!$(this).val()) {
          $(this).addClass('error');
          $(this).closest('.form-item').addClass('error');
          //add error msg div for each field.                   
          if (!$(this).next().hasClass('form-error-msg')) {
            if ($(this).parent().hasClass('selector')) {
              $('<div class="form-error-msg">Please complete this field.</div>').insertAfter($(this).parent());
            } else {
              $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($(this));
            }

          }
          form_errors_flag = true;
        } else {
          $(this).removeClass('error');
          $(this).closest('.form-item').removeClass('error');
          //errormsg class remove
          $(this).find(".form-error-msg").remove();
        }
      });
      $('input:radio').each(function () {
        if ($('input:radio').attr('required') == 'required' && $(this).is(':visible')) {
          var err_check = $(this).closest('.webform-component-radios').find('span.checked');
          if (!err_check.length) {
            $(this).addClass('error');
            $(this).closest('.form-item').addClass('error');
            //add error msg div for each field.      

            if (!$(this).parents('.form-radios').next().hasClass('form-error-msg')) {
              $('<div class="form-error-msg">Please complete this field.</div>').insertAfter($(this).parents('.form-radios'));
            }
            form_errors_flag = true;
          } else {
            $(this).removeClass('error');
            $(this).closest('.form-item').removeClass('error');
            //errormsg class remove
            $(this).find(".form-error-msg").remove();
          }
        }
      });
      $('input:checkbox').each(function () {
        if ($(this).closest('div').hasClass('checker') && ($(this).attr('required') == 'required' || $(this).closest('.webform-component-checkboxes ').hasClass('required')) && $(this).is(':visible')) {
          var err_check = $(this).closest('.webform-component-checkboxes').find('span.checked');
          if (!err_check.length) {
            $(this).addClass('error');
            $(this).closest('.form-item').addClass('error');
            //add error msg div for each field.                             
            if ($(this).parents('.webform-component-checkboxes').find('.form-error-msg').length ==0 ) {
              //$('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($(this).parents('.webform-component-checkboxes'));
              $(this).parents('.webform-component-checkboxes').append('<div class="form-error-msg">Please complete this field.</div>');
			  $('.bw-mobile .webform-component--fieldset-no--fieldset-pill--pill-types').addClass('pill-error');
            }
            form_errors_flag = true;
          } else {
            $(this).removeClass('error');
            $(this).closest('.form-item').removeClass('error');
            //errormsg class remove
            $(this).find(".form-error-msg").remove();
			$('.bw-mobile .webform-component--fieldset-no--fieldset-pill--pill-types').removeClass('pill-error');
          }
        }
      });
      //added new ids of first name and last name.
      var inps = ['edit-submitted-fieldset-user-info-first-name', 'edit-submitted-fieldset-user-info-last-name', 'edit-submitted-fieldset-user-info-city', 'edit-submitted-first-name', 'edit-submitted-last-name'];
      $.each(inps, function (index, value) {
        var vals = $('#' + value).val();
        var re = /^[a-zA-Z~!@#$%^&*_+-.,']([\sa-zA-Z~!@#$%^&*_+-.,']?)+$/;
        if ($('#' + value).is(':visible') && (!re.test(vals) /* || vals.length < 3*/ )) {
          $('#' + value).addClass('error');
          $('#' + value).closest('.form-item').addClass('error');
          //add error msg div for each field.    
          if (!$('#' + value).next().hasClass('form-error-msg')) {

            $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($('#' + value));
          }
          form_errors_flag = true;
        } else {
          $('#' + value).removeClass('error');
          $('#' + value).closest('.form-item').removeClass('error');
          //errormsg class remove
          $('#' + value).find(".form-error-msg").remove();
        }
      });
      var phoneno = $('#edit-submitted-fieldset-user-info-phone-number').val();
      var ph_reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if ((!phoneno || !ph_reg.test(phoneno)) && $('#edit-submitted-fieldset-user-info-phone-number').is(':visible')) {
        $('#edit-submitted-fieldset-user-info-phone-number').addClass('error');
        //add error msg div for each field.                             
        if (!$('#edit-submitted-fieldset-user-info-phone-number').next().hasClass('form-error-msg')) {
          $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($('#edit-submitted-fieldset-user-info-phone-number'));
        }
        form_errors_flag = true;
      } else if ($('#edit-submitted-fieldset-user-info-phone-number').is(':visible') && phoneno) {
        $('#edit-submitted-fieldset-user-info-phone-number').removeClass('error');
        //errormsg class remove
        $('#edit-submitted-fieldset-user-info-phone-number').find(".form-error-msg").remove();
      }

      var zipval = $('#edit-submitted-fieldset-user-info-zip-code').val();
      if (!$.isNumeric(zipval) && $('#edit-submitted-fieldset-user-info-zip-code').is(':visible')) {
        $('#edit-submitted-fieldset-user-info-zip-code').addClass('error');
        //add error msg div for each field.                             
        if (!$('#edit-submitted-fieldset-user-info-zip-code').next().hasClass('form-error-msg')) {
          $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($('#edit-submitted-fieldset-user-info-zip-code'));
        }
        form_errors_flag = true;
      } else if ($('#edit-submitted-fieldset-user-info-zip-code').is(':visible')) {
        $('#edit-submitted-fieldset-user-info-zip-code').removeClass('error');
        //errormsg class remove
        $('#edit-submitted-fieldset-user-info-zip-code').find(".form-error-msg").remove();
      }
      var unsub_email_val = $('#edit-submitted-email-address').val();
      if ($('#edit-submitted-email-address').is(':visible') && ((unsub_email_val && !validate_email(unsub_email_val)) || !unsub_email_val)) {
        $('#edit-submitted-email-address').addClass('error');
        //add error msg div for each field.
        if (!$('#edit-submitted-email-address').next().hasClass('form-error-msg')) {
          $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($('#edit-submitted-email-address'));
        }
        form_errors_flag = true;
      } else if ($('#edit-submitted-email-address').is(':visible')) {
        $('#edit-submitted-fieldset-user-info-e-mail-address').removeClass('error');
        //errormsg class remove
        $('#edit-submitted-fieldset-user-info-e-mail-address').find(".form-error-msg").remove();
      }
      var email_val = $('#edit-submitted-fieldset-user-info-e-mail-address').val();
      var confirm_email_val = $('#edit-submitted-fieldset-user-info-confirm-e-mail-address').val();
      if ($('#edit-submitted-fieldset-user-info-e-mail-address').is(':visible') && email_val && !validate_email(email_val)) {
        $('#edit-submitted-fieldset-user-info-e-mail-address').addClass('error');
        //add error msg div for each field.
        if (!$('#edit-submitted-fieldset-user-info-e-mail-address').next().hasClass('form-error-msg')) {
          $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($('#edit-submitted-fieldset-user-info-e-mail-address'));
        }
        form_errors_flag = true;
        //$('#edit-submitted-fieldset-user-info-e-mail-address').closest('.form-item').addClass('error');
      } else if ($('#edit-submitted-fieldset-user-info-e-mail-address').is(':visible') && email_val && validate_email(email_val)) {
        $('#edit-submitted-fieldset-user-info-e-mail-address').removeClass('error');
        //errormsg class remove
        $('#edit-submitted-fieldset-user-info-e-mail-address').find(".form-error-msg").remove();
      }
      if (confirm_email_val && (!validate_email(confirm_email_val) || ($('#edit-submitted-fieldset-user-info-e-mail-address').is(':visible') && email_val != confirm_email_val))) {
        $('#edit-submitted-fieldset-user-info-confirm-e-mail-address').addClass('error');
        //add error msg div for each field.
        if (!$('#edit-submitted-fieldset-user-info-confirm-e-mail-address').next().hasClass('form-error-msg')) {
          $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($('#edit-submitted-fieldset-user-info-confirm-e-mail-address'));
        }
        form_errors_flag = true;
        //$('#edit-submitted-fieldset-user-info-e-mail-address').closest('.form-item').addClass('error');
      } else if ($('#edit-submitted-fieldset-user-info-confirm-e-mail-address').is(':visible') && confirm_email_val) {
        $('#edit-submitted-fieldset-user-info-confirm-e-mail-address').removeClass('error');
        //errormsg class remove
        $('#edit-submitted-fieldset-user-info-confirm-e-mail-address').find(".form-error-msg").remove();
      }

      //DATE -- Month and year validation
      if ($('select.month.form-select').is(':visible')) {
        var current_month = (new Date).getMonth() + 1;
        var current_year = (new Date).getFullYear();
        if (($('#edit-submitted-fieldset-no-field-start-date-month').val() && $('#edit-submitted-fieldset-no-field-start-date-month').val() > current_month && $('#edit-submitted-fieldset-no-field-start-date-year').val() == current_year) ||
          ($('#edit-submitted-fieldset-no-field-start-date-month').val() == '' || $('#edit-submitted-fieldset-no-field-start-date-year').val() == '') ||
          ($('#edit-submitted-fieldset-no-field-start-date-month').val() && $('#edit-submitted-fieldset-no-field-start-date-month').val() < 11 && $('#edit-submitted-fieldset-no-field-start-date-year').val() <= '2012')) {
          $('select.start-treatment-day.month.form-select').addClass('error');
          $('select.start-treatment-day.year.form-select').addClass('error');
          $('select.start-treatment-day.month.form-select').closest('.form-item').addClass('error');
          $('select.start-treatment-day.year.form-select').closest('.form-item').addClass('error');
          //add error msg div for each field.

          if (!$('select.form-select').next().hasClass('form-error-msg')) {
            if($('body').hasClass('sign-up')){
               $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($('select.form-select').parents('.webform-container-inline'));
            }else{
              $('<div class="form-error-msg">Please complete this field.</div>').insertAfter($('select.form-select').parents('.webform-container-inline'));
            }
            
            //  $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($('select.start-treatment-day.year.form-select'));
          }
          form_errors_flag = true;
        } 
		 else {
           $('select.start-treatment-day.month.form-select').removeClass('error');
           $('select.start-treatment-day.year.form-select').removeClass('error');
           $('select.start-treatment-day.month.form-select').closest('.form-item').removeClass('error');
           $('select.start-treatment-day.year.form-select').closest('.form-item').removeClass('error');
           //errormsg class remove
           $('select.start-treatment-day.year.form-select').find(".form-error-msg").remove();
		   $('.bw-mobile .webform-component--fieldset-no--fieldset-pill--pill-types').removeClass('pill-error');
         }
      }

	  if ($('.datepicker_input_text_yesno').is(':visible')) {
        var datepicker_value = $('input.datepicker_input_text_yesno').val();
        if(datepicker_value == '') {
          form_errors_flag = true;
          $(this).addClass('error');
        }
      }
      if ($('.datepicker_input_text').is(':visible')) {
        var datepicker_value = $('input.datepicker_input_text').val();
        if(datepicker_value == '') {
          form_errors_flag = true;
          $(this).addClass('error');
        }
      }

      //Member ID validation - 10 digit and start with 2
      if ($('.member_id_number').length > 0) {
      var member_no = $('input.member_id_number').val();
      if (member_no.length > 0) {
        if (member_no.length < 10 || member_no.substring(0, 1) != "2" || !$.isNumeric(member_no)) {
          $('input.member_id_number').addClass('error');
          //add error msg div for each field.
          if (!$('input.member_id_number').next().hasClass('form-error-msg')) {
            $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($('input.member_id_number'));
          }
          form_errors_flag = true;
        } else {
          //errormsg class remove
          $('input.member_id_number').find(".form-error-msg").remove();
        }
      } else {
        //errormsg class remove
        $('input.member_id_number').find(".form-error-msg").remove();
      }
    }

      //share your story textarea validations
      var text_flag = false;
      var must_enter_text = ['decision-content', 'experience-content', 'advice-content'];
      if (($('textarea.decision-content').is(':visible') || $('textarea.experience-content').is(':visible') || $('textarea.advice-content').is(':visible')) &&
        !($('textarea.decision-content').val() || $('textarea.experience-content').val() || $('textarea.advice-content').val())) {
        $('textarea, .webform-component-textarea').addClass('error');
        $('textarea').closest('.form-item').addClass('error');
        $('.webform-component--story-form--answer-at-least-one p').addClass('error');
         //add error msg div for each field.
         if (!$('.webform-component-textarea .form-textarea-wrapper').next().hasClass('form-error-msg')) {
            $('<div class="form-error-msg">Please correct/complete this field.</div>').insertAfter($('.webform-component-textarea .form-textarea-wrapper'));
         }
        
        text_flag = true;
      } else if (($('textarea.decision-content').is(':visible') || $('textarea.experience-content').is(':visible') || $('textarea.advice-content').is(':visible'))) {
        text_flag = false;
        $('textarea, .webform-component-textarea').removeClass('error');
        $('textarea').closest('.form-item').removeClass('error');
        $('.webform-component--story-form--answer-at-least-one p').removeClass('error');
         //errormsg class remove
        $('.webform-component-textarea .form-textarea-wrapper').find(".form-error-msg").remove();
      }
      if (text_flag && !form_errors_flag) {
        e.preventDefault();
        //Focus on error message
        var slideTo = $('.xeljanz-alerts').offset().top - $('#main-menu-nav').outerHeight() - 10;
        jQuery('html,body,.page-wrapper').animate({
          scrollTop: slideTo,
        }, {
          duration: 1200
        });
        $(this).addClass('submit-form-error');
        e.preventDefault();
        return false;
      }
      
      if (form_errors_flag) {
      /*$('.webform-component--error-message').html('<div class="alert xeljanz-alerts alert-block alert-danger" tabindex="-1">' + Drupal.settings.pfe_webform_extra.single_error + '</div>');
        $('.webform-component--error-messages').html('<div class="alert xeljanz-alerts alert-block alert-danger" tabindex="-1">' + Drupal.settings.pfe_webform_extra.errors + '</div>');*/
        
        $('.webform-component--error-message').addClass('xeljanz-alerts');
        $('.webform-component--error-messages').addClass('xeljanz-alerts');
        //Focus on error message
        var $element = $(".xeljanz-alerts"),
          $window = jQuery(window),
          window_height = $window.height(),
          window_top_position = $window.scrollTop();
          window_bottom_position = (window_top_position + window_height),
          element_height = $element.outerHeight(),
          element_top_position = $element.offset().top,
          element_bottom_position = (element_top_position + element_height);
        if (!((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position))) {
          var slideTo = $('form.webform-client-form').offset().top - $('#main-menu-nav').outerHeight() - 10;
          
          jQuery('html,body,.page-wrapper').animate({
            scrollTop: slideTo,
          }, {
            duration: 1200
          });
        }
        $(this).addClass('submit-form-error');
        $(this).removeClass('form-submition-on');
        e.preventDefault();
      } else {
        $(this).addClass('form-submition-on');
        $(this).removeClass('submit-form-error');
      }
    });

    //Add error class to parent element for error message
    $('input:radio, select').each(function () {
      if ($(this).hasClass('error')) {
        $(this).closest('.form-item').addClass('error');
        /*$('.webform-component--error-message').html('<div class="alert xeljanz-alerts alert-block alert-danger" tabindex="-1">' + Drupal.settings.pfe_webform_extra.single_error + '</div>');
        $('.webform-component--error-messages').html('<div class="alert xeljanz-alerts alert-block alert-danger" tabindex="-1">' + Drupal.settings.pfe_webform_extra.errors + '</div>');
        $('.psoriasis-xeljanz-alerts').hide();*/
      } else {
        $(this).closest('.form-item').removeClass('error');
      }
    });

    //Focus on error message
    $('.xeljanz-alerts').css('outline', 'none');
  });
})(jQuery);