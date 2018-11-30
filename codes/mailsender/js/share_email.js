/**
 * @file
 * The JS for Share This Information form. 
 * @param {Object} $
 */

(function ($) {
  Drupal.behaviors.pfe_xeljanz_mailsender = {
    attach: function(context, settings) {
	  
	var sortable_elem = jQuery(".talking-to-doc-sortable li");
	  var ask_doc_question = [];	  
	  sortable_elem.each(function(e){
		if ( jQuery(this).hasClass('active')) {
			var question_id = jQuery(this).find('.acc-title').attr('id');
			question_id = question_id.replace('ask-question-','');
			ask_doc_question.push(question_id);
		}
	  });
	  if(ask_doc_question.length !== 0){
		var json = JSON.stringify(ask_doc_question);
		jQuery(".data-to-email").val(json);
	  }
    }
  };
}(jQuery));
