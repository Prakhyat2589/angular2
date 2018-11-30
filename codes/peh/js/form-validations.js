var $ = jQuery;

$(document).ready(function() {

	/*Remove HTML5 default validations*/
	$('input, select, textarea').on("invalid", function(e) {
		e.preventDefault();
	});

	/*Adding Placeholder to the select drop on form page*/
	$(".webform-component select").attr("placeholder", "Please select a state");

	/*Allow only numbers to the zip field and mobile number field*/
	$('.webform-component--savings-zip-code input, .form-item-zipcode input, .brand-mobile-signup input, .card-number input, .webform-component--savings-mobile input, .webform-component--zip-code input').keypress(function(e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});

	/*Allow only number keypad to open for zip field in Mobile*/
	$(".dv-mobile .zip-code input, .dv-mobile .form-item-zipcode input, .dv-mobile .webform-component--zip-code input").attr("type", "tel");

	/*Allow only alphabets in name fields*/
	$('.webform-component--savings-first-name input, .webform-component--savings-last-name input, .webform-component--activate-card-first-name input, .webform-component--activate-card-last-name input').keypress(function(e) {
		var inputValue = e.charCode;
		if (!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)) {
			e.preventDefault();
		}
	});
});

