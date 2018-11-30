/**
 * @file
 * Implements javascript for webform functionality.
 */
(function ($) {
  Drupal.behaviors.pfe_webform_extra = {
    attach: function (context, settings) {
      //hide submit button
      $('.form-submit').hide();
      //Show submit button after radion click
      if ($('input[id^=edit-submitted-are-you-currently-taking-xeljanz]:checked').length || $('input[id^=edit-submitted-are-you-taking-xeljanz-1]:checked').length) {
        $('.form-submit').show();
      }
      //$('.sign-up .webform-component--error-message h3.mob-required').hide();
      //if ($('.form-item-submitted-are-you-taking-xeljanz'))
      $('#edit-submitted-are-you-currently-taking-xeljanz input, #edit-submitted-are-you-taking-xeljanz-1, #edit-submitted-are-you-taking-xeljanz-2').on('click', function () {		
        $('.form-submit').show();
        $('.main-container').addClass('container-open');       
        if ($('input[id^=edit-submitted-are-you-taking-xeljanz-3]:checked').length) {
          $('.form-submit').hide();
        }
      });
	  
      if ($('input[id^=edit-submitted-are-you-taking-xeljanz-3]:checked').length) {
        $('.form-submit').hide();
      }
      $('#edit-submitted-are-you-taking-xeljanz-3').on('click', function () {
        $('.form-submit').hide();
        $('.main-container').removeClass('container-open');
      });
	  
      //Zipcode client side validation
      $('.zipcode').attr('maxlength', 5);
      $('.zipcode').bind('keypress', function (e) {
        return !(e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && e.which != 46);
      });

      //Add description after label
      // $('.description').each(function() {
      // var ele = $(this).closest('div.form-item').find('label:eq(0)');
      // $(this).insertAfter(ele).addClass('comm-desc');
      // });

		
      $('.taking_xeljanz').each(function () {
        if ($(this).is(':checked')) {
          if ($(this).val() === 'NEITHER') {
            if (Drupal.settings.pfe_webform_calendar) {
              $('#datepicker_text').parent().remove();
              $('.next-doctors-appointment label:first-child').append(Drupal.settings.pfe_webform_calendar.calendar);
            }
            $('.treating-with-xeljanz .webform-calendar').hide();
            $('.next-doctors-appointment .webform-calendar').show();
            $('#datepicker_text_yesno').parent().remove();
          } else if ($(this).val() === 'Xeljanz 5 mg tablets' || $(this).val() === 'Xeljanz XR 11 mg tablets') {
            if (Drupal.settings.pfe_webform_calendar) {
              $('#datepicker_text_yesno').parent().remove();
              $('.treating-with-xeljanz label:first-child').append(Drupal.settings.pfe_webform_calendar.calendar_yesno);
			  
			  $('#datepicker_text').parent().remove();
              $('.next-doctors-appointment label:first-child').append(Drupal.settings.pfe_webform_calendar.calendar);
            }
            $('.treating-with-xeljanz .webform-calendar').show();
            $('.next-doctors-appointment .webform-calendar').show();
            //$('#datepicker_text').parent().remove();
          }
        }
      });
      $('.taking_xeljanz').on('change', function () {
        if ($(this).val() == 'NEITHER') {
          if (Drupal.settings.pfe_webform_calendar) {
            $('#datepicker_text').parent().remove();
            $('.next-doctors-appointment label:first-child').append(Drupal.settings.pfe_webform_calendar.calendar);
          }          
          $('.next-doctors-appointment .webform-calendar').show();
          //$('#datepicker_text_yesno').parent().remove();
          //$('.treating-with-xeljanz .form-error-msg').remove();
          //$('.treating-with-xeljanz .webform-calendar').val('');

          //$('.datepicker_input_text_yesno').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
		  $('.datepicker_input_text').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
        } else if ($(this).val() == 'Xeljanz 5 mg tablets' || $(this).val() == 'Xeljanz XR 11 mg tablets') {
          if (Drupal.settings.pfe_webform_calendar) {
            $('#datepicker_text_yesno').parent().remove();
            $('.treating-with-xeljanz label:first-child').append(Drupal.settings.pfe_webform_calendar.calendar_yesno);
			
			$('#datepicker_text').parent().remove();
            $('.next-doctors-appointment label:first-child').append(Drupal.settings.pfe_webform_calendar.calendar);
          }
          $('.treating-with-xeljanz .webform-calendar').show();
		  $('.next-doctors-appointment .webform-calendar').show();

          $('.treating-with-xeljanz .form-error-msg').remove();
          $('.treating-with-xeljanz .webform-calendar').val('');

		  $('.next-doctors-appointment .form-error-msg').remove();
          $('.next-doctors-appointment .webform-calendar').val('');

          $('.datepicker_input_text_yesno').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
		  $('.datepicker_input_text').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
        } else if ($(this).val() != '') {
          $('#datepicker_text').parent().remove();
        }
      });
      $('#edit-submitted-are-you-currently-taking-xeljanz-2, #edit-submitted-are-you-currently-taking-xeljanz-1,#edit-submitted-are-you-currently-taking-xeljanz-3').on('click', function () {
        //Add GA class for datepicker       
        $('.form-item.webform-component.webform-component-date .webform-calendar').addClass('ga-taking-xeljanz-appt');	
      });
      $('#webform-client-form-38 .form-submit').on('click', function () {
        if ($('#edit-submitted-are-you-currently-taking-xeljanz div:nth-child(1) label span, #edit-submitted-are-you-currently-taking-xeljanz div:nth-child(2) label span').hasClass("checked")) {
          var entered_date = $('.treating-with-xeljanz .webform-calendar').val();
		  var appointment_date = $('.next-doctors-appointment .webform-calendar').val();		

          if (entered_date.length == 0 && appointment_date.length == 0) {
            $('.datepicker_input_text_yesno').addClass("error");
            $('.datepicker_input_text_yesno').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calender_error.png");
            $('.webform-datepicker').addClass("error");
            setTimeout(function () {
              $('<div class="form-error-msg">Please complete this field.</div>').insertAfter($('#datepicker_text_yesno'));
            }, 100);
			
			$('.datepicker_input_text').addClass("error");
            $('.datepicker_input_text').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calender_error.png");
            $('.webform-datepicker').addClass("error");
            setTimeout(function () {
              $('<div class="form-error-msg">Please complete this field.</div>').insertAfter($('#datepicker_text'));
            }, 100);
            return false;
          } 
		  else if (entered_date.length == 0 && appointment_date.length != 0) {
            $('.datepicker_input_text_yesno').addClass("error");
            $('.datepicker_input_text_yesno').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calender_error.png");
            $('.webform-datepicker').addClass("error");
            setTimeout(function () {
              $('<div class="form-error-msg">Please complete this field.</div>').insertAfter($('#datepicker_text_yesno'));
            }, 100);
			
			$('.datepicker_input_text').removeClass("error");
            $('.datepicker_input_text').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
            return false;
          }
          else if (entered_date.length != 0 && appointment_date.length == 0) {			 
            $('.datepicker_input_text').addClass("error");
            $('.datepicker_input_text').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calender_error.png");
            $('.webform-datepicker').addClass("error");
            setTimeout(function () {
              $('<div class="form-error-msg">Please complete this field.</div>').insertAfter($('#datepicker_text'));
            }, 100);
			
			$('.datepicker_input_text_yesno').removeClass("error");
            $('.datepicker_input_text_yesno').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
            return false;
          }
          else {
          $('.datepicker_input_text_yesno').removeClass("error");
          $('.datepicker_input_text_yesno').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
		  
		  $('.datepicker_input_text').removeClass("error");
          $('.datepicker_input_text').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
          }		  
        } else {
          $('.datepicker_input_text_yesno').removeClass("error");
          $('.datepicker_input_text_yesno').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
		  
		  $('.datepicker_input_text').removeClass("error");
          $('.datepicker_input_text').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
        }
		
		if ($('#edit-submitted-are-you-currently-taking-xeljanz div:nth-child(3) label span').hasClass("checked")) {
          var entered_date = $('.next-doctors-appointment .webform-calendar').val();

          if (entered_date.length == 0) {
            $('.datepicker_input_text').addClass("error");
            $('.datepicker_input_text').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calender_error.png");
            $('.webform-datepicker').addClass("error");
            setTimeout(function () {
              $('<div class="form-error-msg">Please complete this field.</div>').insertAfter($('#datepicker_text'));
            }, 100);
            return false;
          } else {
            $('.datepicker_input_text').removeClass("error");
            $('.datepicker_input_text').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
          }
        } else {
          $('.datepicker_input_text').removeClass("error");
          $('.datepicker_input_text').parents('.control-label').next('.webform-datepicker').find('input[type=image]').attr("src", "/sites/default/themes/custom/psa_xeljanz/images/calendar.png");
        }
      });
      $("#edit-submitted-fieldset-appointment-when-is-your-next-doctors-appointment-day").on('change', function () {
        var selected_date = $('.next-doctors-appointment .webform-calendar').datepicker('getDate');
        var date_string = $.datepicker.formatDate('mm/dd/yy', selected_date);
        $('.datepicker_input_text').val(date_string);
      });
      $("#edit-submitted-fieldset-yes-when-did-you-start-treating-with-xeljanz-month").on('change', function () {
        var selected_date = $('.treating-with-xeljanz .webform-calendar').datepicker('getDate');
        var date_string = $.datepicker.formatDate('mm/dd/yy', selected_date);
        $('.datepicker_input_text_yesno').val(date_string);
      });
      
      /* datepicker for textbox */
      
      $('.treating-with-xeljanz .webform-calendar').on('click focus', function () {
        //$(this).val('');
        datepickerCheck('.datepicker_input_text, .datepicker_input_text_yesno');
      });


      $('.datepicker_input_text, .datepicker_input_text_yesno').on('blur', function () {
        //$('.treating-with-xeljanz .webform-calendar').val($(this).val());
        datepickerCheck('.datepicker_input_text, .datepicker_input_text_yesno');
      });

      function datepickerCheck(date_picker_class) {
        var date_val = $(date_picker_class).val();
        var date_val1 = Date.parse(date_val);
       
        //console.log(isNaN(date_val1));
        if (isNaN(date_val1) == true && date_val !== '') {
          $(date_picker_class).val('');
        } else {
          $('.treating-with-xeljanz .webform-calendar').val(date_val);
          //$('.treating-with-xeljanz .webform-calendar').datepicker('setDate', date_val);
        }
      }

      $('.datepicker_input_text, .datepicker_input_text_yesno').on('change', function () {
        var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        var Val_date = $(this).val();
        if (Val_date.match(dateformat)) {
          var seperator1 = Val_date.split('/');
          var seperator2 = Val_date.split('-');

          if (seperator1.length > 1) {
            var splitdate = Val_date.split('/');
          } else if (seperator2.length > 1) {
            var splitdate = Val_date.split('-');
          }
          var mm = parseInt(splitdate[0]);
          var dd = parseInt(splitdate[1]);
          var yy = parseInt(splitdate[2]);
          var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          if (mm == 1 || mm > 2) {
            if (dd > ListofDays[mm - 1]) {
              $(this).val("");
              return false;
            }
          }
          if (mm == 2) {
            var lyear = false;
            if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
              lyear = true;
            }
            if ((lyear == false) && (dd >= 29)) {
              $(this).val("");
              return false;
            }
            if ((lyear == true) && (dd > 29)) {
              $(this).val("");
              return false;
            }
          }
        } else {
          $(this).val("");
          return false;
        }
      });

      //Align the description position to initial state after bootstrap update	
      $('.help-block', context).addClass('description comm-desc').insertAfter('.prefer_comm > label');
      
	  //Add Class to pill select option
	  setTimeout(function(){
		  $('.form-item-submitted-fieldset-no-fieldset-pill-which-medications-are-you-taking-pill input').on('change', function () {
			if ($(this).is(':checked')) {
			  $(this).parents('.form-item-submitted-fieldset-no-fieldset-pill-which-medications-are-you-taking-pill').addClass('pill-checked');
			}
			else {
			  $(this).parents('.form-item-submitted-fieldset-no-fieldset-pill-which-medications-are-you-taking-pill').removeClass('pill-checked');
			}
		  });		  
	   }, 1000);
	   
	  //Focus on the form when radio button 1 & 2 of sign-up form is checked 
		$('#uniform-edit-submitted-are-you-currently-taking-xeljanz-1 input, uniform-edit-submitted-are-you-currently-taking-xeljanz-2 input').on('click', function () {     
		  setTimeout(function () {
		   $('html, body').animate({
			  scrollTop: $('.treating-with-xeljanz').offset().top
		   }, 500)
		  },1000);
		});
		
	   //Focus on the form when radio button 3 of sign-up form is checked 
		$('#uniform-edit-submitted-are-you-currently-taking-xeljanz-3 input').on('click', function () {     
		  setTimeout(function () {
		   $('html, body').animate({
			  scrollTop: $('.treating-with-xeljanz').offset().top
		   }, 500)
		  },1000);
		});
	}
  }
})(jQuery);