/**

 * @file
 * Implements javascript for print questions pdf functionality.
 */

(function ($) {
   Drupal.behaviors.xeljanz_mailsender = {
    attach: function(context, settings) {
		jQuery(".print-btn").on('click', function(e) {
			//e.preventDefault();
			var sortable_elem = jQuery(".talking-to-doc-sortable li");
			jQuery("#edit-printable-data").html('');
			jQuery("#edit-printable-data").val('');
			var ask_doc_question = [];
			sortable_elem.each(function(e){
				if ( jQuery(this).hasClass('active')) {
					var question_id = jQuery(this).find('.ga-classes').attr('id');
					question_id = question_id.replace('ask-question-','');
					ask_doc_question.push(question_id);
				}
			});
			if(ask_doc_question != null){
				var json = JSON.stringify(ask_doc_question);
				var request = jQuery.ajax({
					url: '/print_questions_pdf',
					type: 'POST',
					data: {questions: json},
					cache: false,
				});
				request.done(function( msg ) {            
				});
				request.fail(function( jqXHR, textStatus ) {
				});
			}
		});
	}
  };
}(jQuery));