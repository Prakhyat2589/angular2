/**
 * @file
 * JavaScript functionalities for form validations
 */
(function ($) {
jQuery(document).ready(function() {  
  //share you story tabber
  $(".tabcontent").hide();
  $(".tabcontent.active").show();
  $(".tabs_link a").each( function() {         
    var tab = $(this).attr('data-to-show');
    var textarea_move = $('textarea.'+tab).closest('.form-item');
    var textarea_target = $('.tab-content').find('.tabcontent[data-content-show="'+tab+'"]');
    textarea_target.append(textarea_move);
  }); 

    $(".tabs_link a").click(function(event) {
      event.preventDefault();
      var tab = $(this).attr('data-to-show');
      $(this).parent().addClass("current");
      $(this).parent().siblings().removeClass("current");
      $(".tabcontent").hide();
      var tab_show = $('.tab-content').find('.tabcontent[data-content-show="'+tab+'"]');
      tab_show.show();
    });
    $('.form-submit, .webform-component--error-messages').hide();
    $("fieldset, .form-submit, .privacy-block").not('fieldset.webform-component--eligibility').hide();
    share_story_form();
    $('#edit-submitted-eligibility-meet-eligibility input').on('click', function() {
      share_story_form();
    });

  function share_story_form() {
    if ($('#edit-submitted-eligibility-meet-eligibility input').parent('span').hasClass('checked')) {
      $('.form-submit, .privacy-block').show();
      $('.webform-component--error-messages').show();
	  $("fieldset").show();
	  $(window).scrollTop($('.bw-mobile .webform-component--story-form').offset().top - 10);
    }
    else {
      $("fieldset, .form-submit").not('fieldset.webform-component--eligibility').hide();
      $('.form-submit, .privacy-block').hide();
      $('.webform-component--error-messages').hide();
    }
  }
});   
})(jQuery);
