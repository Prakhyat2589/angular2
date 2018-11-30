jQuery(document).ready(function($) {
	
  var ask_doc_question_global = [];

  //Add active class on the selected questions
  $("ul.talking-to-doc-sortable li").each(function() {
	var sortable_elem = jQuery(".talking-to-doc-sortable li");
    $(this).click(function(index) {
      $(this).toggleClass('active');
	  ask_doc_question_global = [];	  
	  jQuery(".talking-to-doc-sortable li").each(function(e){
		if ( jQuery(this).hasClass('active')) {
			var question_id = jQuery(this).find('.acc-title').attr('id');
			question_id = question_id.replace('ask-question-','');
			ask_doc_question_global.push(question_id);
		}
	  });
	  if(ask_doc_question_global.length !== 0){
		var json = JSON.stringify(ask_doc_question_global);
		var json =  btoa(json);
		var json =  '==@'+json+'$==';
		jQuery('.faq-print-msg').remove();
		jQuery(".print-btn").attr({"href":'/print_questions_pdf/'+json});
	  }
	  else {
		jQuery(".print-btn").attr({"href":'javascript:void(0)'});
	  }
    });
  });
  
  jQuery(".print-btn").on('click', function(e) {
    var sortable_elem = jQuery(".talking-to-doc-sortable li");
	var ask_doc_question = [];	  
	sortable_elem.each(function(e){
      if ( jQuery(this).hasClass('active')) {			
	    var question_id = jQuery(this).find('.acc-title').attr('id');
		question_id = question_id.replace('ask-question-','');
		ask_doc_question.push(question_id);
	  }		
	});
	if(ask_doc_question.length === 0){
	  e.preventDefault();
	  if(jQuery('.faq-print-msg').length === 0) {
		jQuery('<div class="faq-print-msg">Please select at least one question to print/email.</div>').insertBefore(jQuery('.faq-footnote'));
	  }
	}
	else {
	  jQuery('.faq-print-msg').remove();
	}	  
  });
  
  jQuery(".dummy-email-btn").on('click', function(e) {
    var sortable_elem = jQuery(".talking-to-doc-sortable li");
	var ask_doc_question = [];	  
	sortable_elem.each(function(e){
      if ( jQuery(this).hasClass('active')) {			
	    var question_id = jQuery(this).find('.acc-title').attr('id');
		question_id = question_id.replace('ask-question-','');
		ask_doc_question.push(question_id);
	  }		
	});
	if(ask_doc_question.length === 0){
	  e.preventDefault();
	  if(jQuery('.faq-print-msg').length === 0) {
		jQuery('<div class="faq-print-msg">Please select at least one question to print/email.</div>').insertBefore(jQuery('.faq-footnote'));
	  }
	}
	else {
	  jQuery(".email-btn").trigger('click');
	}	  
  });

  //Sort for browsers 
  $("ul.talking-to-doc-sortable").sortable({
	update: function( event, ui ) {
	  ask_doc_question_global = [];
		  jQuery(".talking-to-doc-sortable li").each(function(e, index){
			if ( jQuery(this).hasClass('active')) {
				var question_id = jQuery(this).find('.acc-title').attr('id');
				question_id = question_id.replace('ask-question-','');
				ask_doc_question_global.push(question_id);
			}
		  });
		  if(ask_doc_question_global.length !== 0){
			var json = JSON.stringify(ask_doc_question_global);
			json =  btoa(json);
			json =  '==@'+json+'$==';
			jQuery('.faq-print-msg').remove();
			jQuery(".print-btn").attr({"href":'/print_questions_pdf/'+json});
		  }
		  else {
		   jQuery(".print-btn").attr({"href":'javascript:void(0)'});
	      }
	}
  });
  $("ul.talking-to-doc-sortable").disableSelection();

  //Sort for touch devices
  $('.dv-mobile ul.talking-to-doc-sortable, .dv-tablet ul.talking-to-doc-sortable').draggable();

  //Assign DOM elements to variable
  var curr = $("ul.quicktabs-tabs li a");
  var previous = $("<span class='previous'>");
  var next = $("<span class='next'>");

  //Append and prepend span elements to anchor links of the tab-1 of quick-tabs
  $(curr).prepend(previous);
  $(curr).append(next);

  $('ul.quicktabs-tabs li:first-child').addClass('active-header');

  //Add and remove class on the click of the next element
  $('.next').on('click', function() {
    var $toHighlight = $(this).parents('li').next().length > 0 ? $(this).parents('li').next() : $(this).parents('li').siblings().first();
    $(this).parents('li').removeClass('active-header');
    $toHighlight.addClass('active-header');
    quicktabs_content();
  });

  //Add and remove class on the click of the previous element
  $('.previous').on('click', function() {
    var $toHighlight = $(this).parents('li').prev().length > 0 ? $(this).parents('li').prev() : $(this).parents('li').siblings().last();
    $(this).parents('li').removeClass('active-header');
    $toHighlight.addClass('active-header');
    quicktabs_content();
  });

});

/*Show and Hide the quick-tabs content on the click of the header*/
function quicktabs_content() {

  //When first tab is active
  if ($('ul.quicktabs-tabs li:first-child').hasClass('active-header')) {
    $('.quicktabs-tabpage').hide();
    $('#quicktabs-tabpage-faq_quicktab-0').show();
  }

  //When second tab is active
  if ($('ul.quicktabs-tabs li:nth-child(2)').hasClass('active-header')) {
    $('.quicktabs-tabpage').hide();
    $('#quicktabs-tabpage-faq_quicktab-1').show();
  }

  //When third tab is active
  if ($('ul.quicktabs-tabs li:nth-child(3)').hasClass('active-header')) {
    $('.quicktabs-tabpage').hide();
    $('#quicktabs-tabpage-faq_quicktab-2').show();
  }
}
