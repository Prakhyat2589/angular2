/**
 * @file
 * Analytic code
 **/
jQuery(document).ready(function() {
  //header menu
  jQuery(".navbar-header .logo-wrap a").attr("sc:linkname", "nav_logo");
  //Top navigation
  jQuery("#topmenu .region-topmenu ul.navbar-nav li.first >a").attr("sc:linkname", "eyebrow nav_xeljanz sites");
  jQuery("#block-block-5 .other-sites-submenu >a:first").attr("sc:linkname", "eyebrow nav_RA");
  jQuery("#block-block-5 .other-sites-submenu >a:eq(1)").attr("sc:linkname", "eyebrow nav_UC");
  jQuery("#topmenu .region-topmenu ul.navbar-nav li:eq(2) > a").attr("sc:linkname", "eyebrow nav_ISI");
  jQuery("#topmenu .region-topmenu ul.navbar-nav li.top-menu-indication-li > a").attr("sc:linkname", "eyebrow nav_indications open");
  jQuery("#topmenu .region-topmenu ul.navbar-nav li:eq(3) > a").attr("sc:linkname", "eyebrow nav_PI");
  jQuery("#topmenu .region-topmenu ul.navbar-nav li:eq(4) > a").attr("sc:linkname", "eyebrow nav_med guide");
  jQuery("#topmenu .region-topmenu ul.navbar-nav a.ga-hcps-header").attr("sc:linkname", "eyebrow nav_HCP");
  
  jQuery("#firstUserslide div.header > button").on('click', function() {
	  s.tl(this, "o", "eyebrow nav_ indication close");
  });
  
  jQuery("#slide-menu li a.home,.tablet-menu .home-icon a").attr("sc:linkname", "nav_home");
  jQuery("#slide-menu ul.menu > li.depth-0 > a.ga-navigation-ra").attr("sc:linkname", "nav_what is psa");
  jQuery("#slide-menu ul.menu > li.depth-0 > a.ga-navigation-aboutxeljanz").attr("sc:linkname", "nav_about xeljanz"); 
  jQuery("#slide-menu ul.menu > li.depth-0 > a.ga-ra-support").attr("sc:linkname", "nav_support resources");
  jQuery("#navmenu-sidebar ul.reg > li > a, li.mobile-menu-sidebar > a.ga-register-info").attr("sc:linkname", "nav_register");

  jQuery("#slide-menu ul.menu > li > a.ga-about-ranjoin").attr("sc:linkname", "what is psa_about psa");
  jQuery("#slide-menu ul.menu > li > a.ga-rafact").attr("sc:linkname", "what is psa_understanding PSA");
  jQuery("#slide-menu ul.menu > li > a.ga-join-damage").attr("sc:linkname", "what is PSA_quick facts");

  jQuery("#slide-menu ul.menu > li > a.ga-ra-treatment").attr("sc:linkname", "what is PSA_treatments for PSA");
  jQuery("#slide-menu ul.menu > li > a.ga-ra-treatment-option").attr("sc:linkname", "what is PSA_treatment options");

  jQuery("#slide-menu ul.menu > li > a.ga-whatisxeljanz").attr("sc:linkname", "about xeljanz_what is xeljanz");
  jQuery("#slide-menu ul.menu > li > a.ga-quickfact").attr("sc:linkname", "about xeljanz_what is xeljanz_quick facts");
  jQuery("#slide-menu ul.menu > li > a.ga-xeljanz-works").attr("sc:linkname", "about xeljanz_what is xeljanz_how xeljanz works");
  jQuery("#slide-menu ul.menu > li > a.ga-xeljanz-select").attr("sc:linkname", "about xeljanz_what is xeljanz_xeljanz milestones");
  jQuery("#slide-menu ul.menu > li > a.ga-clinical-result").attr("sc:linkname", "about xeljanz_what is xeljanz_clinical trial results");
  jQuery("#slide-menu ul.menu > li > a.ga-side-effect").attr("sc:linkname", "about xeljanz_what is xeljanz_safety");

  jQuery("#slide-menu ul.menu > li > a.ga-xeljanz-you").attr("sc:linkname", "about xeljanz_is xeljanz for you_another treatment option");
  jQuery("#slide-menu ul.menu > li > a.ga-ra-symptoms").attr("sc:linkname", "about xeljanz_is xeljanz for you_rethink");

  jQuery("#slide-menu ul.menu > li > a.ga-commom-question").attr("sc:linkname", "about xeljanz_FAQ");
  jQuery("#slide-menu ul.menu > li > a.ga-diff-xel-xr").attr("sc:linkname", "about xeljanz_FAQ_difference between xeljanz and xeljanz xr");
  jQuery("#slide-menu ul.menu > li > a.ga-about-xeljanz").attr("sc:linkname", "about xeljanz_FAQ_about xeljanz");

  jQuery("#slide-menu ul.menu > li > a.ga-xeljanz-financial").attr("sc:linkname", "support resources_financial support");
  jQuery("#slide-menu ul.menu > li > a.ga-about-xelsource").attr("sc:linkname", "support resources_xelsource");
  jQuery("#slide-menu ul.menu > li > a.ga-xeljanz-savingsoptions").attr("sc:linkname", "support resources_savings options");
  jQuery("#slide-menu ul.menu > li > a.ga-faqs").attr("sc:linkname", "support resources_financial support questions");
  jQuery("#slide-menu ul.menu > li > a.ga-copaysaving-card").attr("sc:linkname", "support resources_copay card");

  jQuery("#slide-menu ul.menu > li > a.ga-support-program").attr("sc:linkname", "support resources_ongoing support");
  jQuery("#slide-menu ul.menu > li > a.ga-aboutxeljanz-you").attr("sc:linkname", "support resources_xeljanz+you");
  jQuery("#slide-menu ul.menu > li > a.ga-share-story").attr("sc:linkname", "support resources_xeljanz+you_share your story");
  // Homepage Banner section starts
  // What is PSA page starts
  jQuery(".page-node-36 ol.breadcrumb > li:eq(0) > a").attr("sc:linkname", "home_breadcrumb");
  // About Psoriatic page
  jQuery(".page-node-36 ol.breadcrumb > li:eq(0) > a").attr("sc:linkname", "home_breadcrumb");

  // Registration form
  jQuery("#webform-client-form-38 input[type=radio]").on('click', function () {
    if (jQuery(this).attr('name') == 'submitted[are_you_currently_taking_xeljanz]') {
      var radio_select = jQuery(this).val();
      switch (radio_select) {
        case 'NEITHER':
          radio_select = "registration_neither";
          break;
        case 'Xeljanz XR 11 mg tablets':
          radio_select = "registration_xeljanz 11mg";
          break;
        case 'Xeljanz 5 mg tablets':
          radio_select = "registration_xeljanz 5mg";
          break;
      }
      s.tl(this, "o", radio_select);
    }
  });

  jQuery("#webform-client-form-38 #edit-submitted-fieldset-no-field-start-date-month").change(function (){
    s.tl(this, "o", 'registration_month');
  });

  jQuery("#webform-client-form-38 #edit-submitted-fieldset-no-field-start-date-year").change(function (){
    s.tl(this, "o", 'registration_year');
  });

  jQuery(document).on('change', 'input:checkbox.medications', function () {
      var op_select = jQuery(this).val();
      switch (op_select) {
        case 'Pill':
          op_select = "registration_pill";
          break;
        case 'Injection':
          op_select = "registration_injection";
          break;
        case 'Infusion':
          op_select = "registration_infusion";
          break;
        case "I don't know":
          op_select = "registration_dont know";
          break;
      }
      s.tl(this, "o", op_select);
  });

  jQuery("#webform-client-form-38 input.ga-register-firstname").on('blur change', function (){
    s.tl(this, "o", 'registration_first name');
  });

  jQuery("#webform-client-form-38 input.ga-register-lastname").on('blur change', function (){
    s.tl(this, "o", 'registration_last name');
  });

  jQuery("#webform-client-form-38 input.ga-register-email").on('blur change', function (){
    s.tl(this, "o", 'registration_email');
  });

  jQuery("#webform-client-form-38 input.ga-register-confirmemail").on('blur change', function (){
    s.tl(this, "o", 'registration_confirm email');
  });

  jQuery("#webform-client-form-38 input.ga-register-address1").on('blur change', function (){
    s.tl(this, "o", 'registration_street');
  });

  jQuery("#webform-client-form-38 input.ga-register-address2").on('blur change', function (){
    s.tl(this, "o", 'registration_street 2');
  });

  jQuery("#webform-client-form-38 input.ga-register-city").on('blur change', function (){
    s.tl(this, "o", 'registration_city');
  });

  jQuery("#webform-client-form-38 #edit-submitted-fieldset-user-info-state").change(function (){
    s.tl(this, "o", 'registration_state');
  });

  jQuery("#webform-client-form-38 input.ga-register-zipcode").on('blur change', function (){
    s.tl(this, "o", 'registration_zip');
  });

  jQuery("#webform-client-form-38 #datepicker_text > input[type=text]").on('input propertychange paste', function (){
    s.tl(this, "o", 'registration_next appointment');
  });

  // jQuery("#webform-client-form-38 .ga-register-verify").change(function (){
  //   s.tl(this, "o", 'registration_18 years or older');
  // });

  jQuery("#webform-client-form-38 input.ga-register-zipcode").on('blur change', function (){
    s.tl(this, "o", 'registration_send materials');
  });


  jQuery(document).on('change', 'input:checkbox.ga-term-condition', function () {
    s.tl(this, "o", 'registration_meet requirements');
  });
  jQuery(document).on('change', 'input:checkbox.ga-register-verify, input:checkbox.ga-register-confirm-material', function () {
    if (jQuery(this).attr('name') == 'submitted[fieldset_common][i_verify][Yes]' || jQuery(this).attr('name') == 'submitted[fieldset_common][i_agree][BI]') {
      var op_select = jQuery(this).val();
      switch (op_select) {
        case 'VI':
          op_select = "registration_18 years or older";
          break;
        case 'BI':
          op_select = "registration_send materials";
          break;
      }
      s.tl(this, "o", op_select);

    }
  });
  //onselect datepicker function 
  // if (jQuery('.treating-with-xeljanz .webform-calendar').length) {
  //   jQuery('.treating-with-xeljanz .webform-calendar').datepicker('option', 'onSelect',
  //      function(dateText, inst) {
  //         var selected_date = $(this).datepicker('getDate');
  //         var date_string = $.datepicker.formatDate('mm/dd/yy', selected_date);
  //         jQuery('.datepicker_input_text_yesno').val(date_string);
  //         s.tl(this, "o", 'registration_date');
  //   });
  // }
  // if (jQuery('.next-doctors-appointment .webform-calendar').length) {
  //   jQuery('.next-doctors-appointment .webform-calendar').datepicker('option', 'onSelect',
  //      function(dateText, inst) {
  //         //alert('glImgExpiry-->' + dateText);
  //         var selected_date = $(this).datepicker('getDate');
  //         var date_string = $.datepicker.formatDate('mm/dd/yy', selected_date);
  //         jQuery('.datepicker_input_text').val(date_string);
  //         s.tl(this, "o", 'registration_next appointment');
  //   });
  // }
  jQuery("body.page-node-38 div.sticky-bottom-content a.cta-btn").attr("sc:linkname", "registration_signup");
// Share your story form
  //jQuery("#webform-client-form-82");
  jQuery(document).on('change', 'input:checkbox.ga-patient-requirement', function () {
    s.tl(this, "o", 'share your story_definted requirements');
  });

  jQuery("#webform-client-form-82 a.ga-patient-decision").attr("sc:linkname", "share your story_decision");
  jQuery("#webform-client-form-82 a.ga-patient-experience").attr("sc:linkname", "share your story experience");
  jQuery("#webform-client-form-82 a.ga-patient-advice").attr("sc:linkname", "share your story_advice");

  jQuery("#webform-client-form-82 .ga-patient-your-decision").blur(function (){
    s.tl(this, "o", 'share your story_decision box');
  });
  jQuery("#webform-client-form-82 .ga-patient-your-experience").blur(function (){
    s.tl(this, "o", 'share your story_experience box');
  });
  jQuery("#webform-client-form-82 .ga-patient-your-advice").blur(function (){
    s.tl(this, "o", 'share your story_advice box');
  });

  jQuery("#webform-client-form-82 input.ga-patient-first-name").on('blur change', function (){
    s.tl(this, "o", 'share your story_first name');
  });
  jQuery("#webform-client-form-82 input.ga-patient-last-name").on('blur change', function (){
    s.tl(this, "o", 'share your story_last name');
  });
  jQuery("#webform-client-form-82 input.ga-patient-email-address").on('blur change', function (){
    s.tl(this, "o", 'share your share your story_email');
  });
  jQuery("#webform-client-form-82 input.ga-patient-confirm-email").on('blur change', function (){
    s.tl(this, "o", 'share your story_confirm email');
  });
  jQuery("#webform-client-form-82 input.ga-patient-phone-number").on('blur change', function (){
    s.tl(this, "o", 'share your story_phone');
  });

  jQuery(document).on('change', 'input:checkbox.ga-patient-support', function () {
    var op_select = jQuery(this).val();
    switch (op_select) {
      case 'Yes':
        op_select = "share your story_yest";
        break;
      case 'No':
        op_select = "share your story_no";
        break;
    }
    s.tl(this, "o", op_select);
  });

  jQuery("#webform-client-form-82 button.webform-submit").on('click', function (){
    s.tl(this, "o", 'share your story_submit');
  });
  jQuery(".page-node-82 div.sticky-bottom-content a.cta-btn").attr("sc:linkname", "share your story_confirmation_signup");

  // Copay savings card form
  jQuery(document).on('change', '#webform-client-form-90 input:radio.ga-copay-ra', function () {
    var op_select = jQuery(this).val();
    switch (op_select) {
      case 'Xeljanz 5 mg tablets':
        op_select = "copay signup_5MG";
        break;
      case 'Xeljanz XR 11 mg tablets':
        op_select = "copay signup_11MG";
        break;
      case 'NEITHER':
        op_select = "copay signup_neither";
        break;
    }
    s.tl(this, "o", op_select);
  });
  jQuery("#webform-client-form-90 input.ga-copay-member-id").on('blur change', function (){
    s.tl(this, "o", 'copay signup_ID');
  });

  jQuery("#webform-client-form-90 div.member-id > div.help-block > a.search-glass").on('mouseover', function (){
    s.tl(this, "o", 'copay signup_whats this');
  });

  jQuery("#webform-client-form-90 a.ga-copay-terms-condition").attr("sc:linkname", "copay signup_terms");
  
  jQuery(document).on('change', '#webform-client-form-90 input:checkbox#edit-submitted-fieldset-2-copay-fieldset-agree-terms-1', function () {
    s.tl(this, "o", 'copay signup_requirements');
  });

  jQuery(document).on('change', '#webform-client-form-90 input:checkbox.ga-copay-reg-conf-send-materials', function () {
    s.tl(this, "o", '');
  });

  jQuery("#webform-client-form-90 button.webform-submit").on('click', function (){
    s.tl(this, "o", 'copay signup_submit');
  });

  jQuery("body.page-node-90 div.sticky-bottom-content a.cta-btn").attr("sc:linkname", "copay signup_signup");

  // Unsubscribe form
  jQuery("#webform-client-form-89 input.ga-unsbuscribe-email").on('blur change', function (){
    s.tl(this, "o", 'unsubscribe_email_error');
  });

  jQuery("#webform-client-form-89 a.ga-nav-text-contact-us").attr("sc:linkname", "unsubscribe_contact");
  jQuery("#webform-client-form-89 button.webform-submit").on('click', function (){
    s.tl(this, "o", 'unsubscribe_submit');
  });
  jQuery("body.page-node-89 div.sticky-bottom-content a.cta-btn").attr("sc:linkname", "unsubscribe_signup");
  jQuery("body.page-unsubscribe-thank-you div.sticky-bottom-content a.cta-btn").attr("sc:linkname", "unsubscribe_signup");
  
  // contact us page
  jQuery("body.page-node-33 div.sticky-bottom-content a.cta-btn").attr("sc:linkname", "contact_signup");

  // Content slider
  setTimeout(function (){
    jQuery("#bt-content-slider a.left").on('click', function() {
      s.tl(this, "o", 'trial results_previous');
    });
    jQuery("#bt-content-slider a.ga-clinical-trial-nextarrow").click( function() {
      s.tl(this, "o", 'trial results_next');
    });
  }, 3000);
  jQuery("#bt-content-slider ol.carousel-indicators > li").each(function (index, value){
      op_select = "trial results_radio button";
      jQuery(this).on('click', function () { s.tl(this, "o", op_select);});
  });

  // Treatment types page
  jQuery("#content-expand-173 div#ui-accordion-content-expand-173-header-0").on('click', function() { 
    if (jQuery(this).hasClass('ga-expand-Non-biologic')) {
      s.tl(this, "o", 'treatments for psa_non-biologics_close');      
    }
    else {
      s.tl(this, "o", 'treatments for psa_dmards_non-biologics');
    }
  });

  jQuery("#content-expand-173 div#ui-accordion-content-expand-173-header-1").on('click', function() { 
    if (jQuery(this).hasClass('ga-collapse-biologics')) {
      s.tl(this, "o", 'treatments for psa_dmards_biologics');
    }
    else {
      s.tl(this, "o", 'treatments for psa_biologics_close');
    }
  });

  // jQuery("#ui-accordion-content-expand-173-panel-1 a.search-glass:eq(0)").on('mouseover', function () {
  //   s.tl(this, "o", 'treatments for psa_biologics_close');
  // });

  // jQuery("#ui-accordion-content-expand-173-panel-1 a.search-glass:eq(1)").on('mouseover', function () {
  //   s.tl(this, "o", 'treatments for psa_biologics_close');
  // });
  // Side effect section
  jQuery(".ga-collapse-serious-infection").on('click', function () {
    s.tl(this, "o", 'safety_serious infection_close');
  });
  jQuery(".ga-click-serious-infection-next").attr("sc:linkname", "safety_serious infection_next");

  jQuery(".ga-collapse-cancer-imune").on('click', function () {
    s.tl(this, "o", 'safety_health problems_close');
  });
  jQuery(".ga-click-cancer-imune-next").attr("sc:linkname", "safety_health problems_next");
  jQuery(".ga-click-cancer-imune-back").attr("sc:linkname", "safety_health problems_back");

  jQuery(".ga-collapse-tears-stomach").on('click', function () {
    s.tl(this, "o", 'safety_tears_close');
  });
  jQuery(".ga-click-tears-stomach-next").attr("sc:linkname", "safety_tears_next");
  jQuery(".ga-click-tears-stomach-back").attr("sc:linkname", "safety_tears_back");

  jQuery(".ga-collapse-lab-result").on('click', function () {
    s.tl(this, "o", 'safety_lab test_close');
  });
  jQuery(".ga-click-lab-result-next").attr("sc:linkname", "safety_lab test_next");
  jQuery(".ga-click-lab-result-back").attr("sc:linkname", "safety_lab test_back");

  jQuery(".ga-collapse-hcp").on('click', function () {
    s.tl(this, "o", 'safety_HCP_close');
  });
  jQuery(".ga-click-hcp-next").attr("sc:linkname", "safety_HCP_next");
  jQuery(".ga-click-hcp-back").attr("sc:linkname", "safety_HCP_back");

  jQuery(".ga-collapse-side-effects").on('click', function () {
    s.tl(this, "o", 'safety_side effects_close');
  });
  jQuery(".ga-click-side-effects-back").attr("sc:linkname", "safety_side effects_back");


  // jQuery("#content-expand-173 div.ga-collapse-Non-biologic").on('click', function() { 
  //   s.tl(this, "o", 'treatments for psa_non-biologics_close'); 
  // });

  // Faq page
  jQuery("#quicktabs-faq_quicktab li:eq(0) a").attr("sc:linkname", "about xeljanz_talking to your doctor");
  jQuery("#quicktabs-faq_quicktab li:eq(1) a").attr("sc:linkname", "about xeljanz_xeljanz and xeljanz xr");
  jQuery("#quicktabs-faq_quicktab li:eq(2) a").attr("sc:linkname", "about xeljanz_about safety");

  jQuery("#quicktabs-container-faq_quicktab #quicktabs-tabpage-faq_quicktab-0 .ques-198").closest('li.views-row').on('mousedown', function () {
    s.tl(this, "o", 'about xeljanz_talk to doc_changing treatments');
  });
  jQuery("#quicktabs-container-faq_quicktab #quicktabs-tabpage-faq_quicktab-0 .ques-197").closest('li.views-row').on('mousedown', function () {
    s.tl(this, "o", 'about xeljanz_talk to doc_changing treatments');
  });
  jQuery("#quicktabs-container-faq_quicktab #quicktabs-tabpage-faq_quicktab-0 .ques-196").closest('li.views-row').on('mousedown', function () {
    s.tl(this, "o", 'about xeljanz_talk to doc_2 weeks');
  });
 jQuery("#quicktabs-container-faq_quicktab #quicktabs-tabpage-faq_quicktab-0 .ques-195").closest('li.views-row').on('mousedown', function () {
    s.tl(this, "o", 'about xeljanz_talk to doc_daily activities');
  });
  jQuery("#quicktabs-container-faq_quicktab #quicktabs-tabpage-faq_quicktab-0 .ques-189").closest('li.views-row').on('mousedown', function () {
    s.tl(this, "o", 'about xeljanz_talk to doc_other info');
  });
  jQuery("#quicktabs-container-faq_quicktab #quicktabs-tabpage-faq_quicktab-0 .ques-190").closest('li.views-row').on('mousedown', function () {
    s.tl(this, "o", 'about xeljanz_talk to doc_forget pills');
  });

  jQuery("#quicktabs-container-faq_quicktab #quicktabs-tabpage-faq_quicktab-1 .views-row").each(function (index, val) {
    jQuery(this).find('div.views-field').attr({'id':'xelandxelxr'+index});
    switch (index) {
      case 0:
        sc_open = "about xeljanz_right for me_open";
        sc_close = "about xeljanz_right for me_close";
        break;
      case 1:
        sc_open = "about xeljanz_what is xeljanz_open";
        sc_close = "about xeljanz_what is xeljanz_close";
        break;
      case 2:
        sc_open = "about xeljanz_notice difference_clinical studies";
        sc_close = "about xeljanz_notice difference_close";
        break;
      case 3:
        sc_open = "about xeljanz_joint pain_open";
        sc_close = "about xeljanz_joint pain_close";
        break;
      case 4:
        sc_open = "about xeljanz_ingredients_open";
        sc_close = "about xeljanz_ingredients_close";
        break;
      case 5:
        sc_open = "about xeljanz_tests_open";
        sc_close = "about xeljanz_tests_close";
        break;
      case 6:
        sc_open = "about xeljanz_influsions_open";
        sc_close = "about xeljanz_influsions_close";
        break;
      case 7:
        sc_open = "about xeljanz_stool_open";
        sc_close = "about xeljanz_stool_close";
        break;
      case 9:
        sc_open = "about xeljanz_serious side effects_open";
        sc_close = "about xeljanz_serious side effects_close";
        break;
      case 10:
        sc_open = "about xeljanz_miss dose_open";
        sc_close = "about xeljanz_miss dose_close";
        break;
      case 11:
        sc_open = "about xeljanz_expectations_open";
        sc_close = "about xeljanz_expectations_close";
        break;
      case 8:
        sc_open = "about xeljanz_remembering_open";
        sc_close = "about xeljanz_remembering_close";
        break;
    }
    jQuery(this).find('div.views-field').attr({'sc_open':sc_open});
    jQuery(this).find('div.views-field').attr({'sc_close':sc_close});
    jQuery(this).find('div.views-field').find('a').attr({'sc:linkname':sc_open});

    jQuery(this).find('div.views-field').on('click', function () {
      if (jQuery(this).hasClass('ui-state-active')) {
        var op  = jQuery(this).attr('sc_close');
      }
      else {
        var op  = jQuery(this).attr('sc_open');
      }
      jQuery(this).find('a').attr({'sc:linkname':op});
      //s.tl(this, "o", op);
    });
  });

jQuery("#quicktabs-container-faq_quicktab #quicktabs-tabpage-faq_quicktab-2 .views-row").each(function (index, val) {
    jQuery(this).find('div.views-field').attr({'id':'xelandxelxr'+index});
    switch (index) {
      case 1:
        sc_open = "about xeljanz_side effects_safety";
        sc_close = "about xeljanz_side effects_close";
        break;
      case 2:
        sc_open = "about xeljanz_common side effects_safety";
        sc_close = "about xeljanz_common side effects_close";
        break;
      case 3:
        sc_open = "about xeljanz_experience side effects_medwatch";
        sc_close = "about xeljanz_experience side effects_medwatch";
        break;
      case 4:
        sc_open = "about xeljanz_pregnant_safety";
        sc_close = "about xeljanz_pregnant_close";
        break;
      case 5:
        sc_open = "about xeljanz_breastfeeding_open";
        sc_close = "about xeljanz_breastfeeding_close";
        break;
    }
    jQuery(this).find('div.views-field').attr({'sc_open':sc_open});
    jQuery(this).find('div.views-field').attr({'sc_close':sc_close});
    jQuery(this).find('div.views-field').find('a').attr({'sc:linkname':sc_open});

    jQuery(this).find('div.views-field').on('click', function () {
      if (jQuery(this).hasClass('ui-state-active')) {
        var op  = jQuery(this).attr('sc_close');
      }
      else {
        var op  = jQuery(this).attr('sc_open');
      }
      jQuery(this).find('a').attr({'sc:linkname':op});
      //s.tl(this, "o", op);
    });
  });

  // FAQ page
  jQuery(".freq-asked-ques .views-row").each(function (index, val) {
    jQuery(this).find('div.views-field').attr({'id':'xelandxelxr'+index});
    switch (index) {
      case 3:
        sc_open = "Q&A_insurance change_open";
        sc_close = "Q&A_insurance change_close";
        break;
      case 0:
        sc_open = "Q&A_copay pharmacy_open";
        sc_close = "Q&A_copay pharmacy_close";
        break;
      case 1:
        sc_open = "Q&A_copay qualification_open";
        sc_close = "Q&A_copay qualification_close";
        break;
      case 2:
        sc_open = "Q&A_insurance approvals_open";
        sc_close = "Q&A_insurance approvals_close";
        break;
      case 4:
        sc_open = "Q&A_claim denied_open";
        sc_close = "Q&A_claim denied_denied";
        break;
    }
    jQuery(this).find('div.views-field').attr({'sc_open':sc_open});
    jQuery(this).find('div.views-field').attr({'sc_close':sc_close});
    jQuery(this).find('div.views-field').find('a:first').attr({'sc:linkname':sc_open});

    jQuery(this).find('div.views-field').on('click', function () {
      if (jQuery(this).hasClass('ui-state-active')) {
        var op  = jQuery(this).attr('sc_close');
      }
      else {
        var op  = jQuery(this).attr('sc_open');
      }
      jQuery(this).find('a').attr({'sc:linkname':op});
      //s.tl(this, "o", op);
    });
  });

  //ISI expand and collapse for desktop
  jQuery(".isi-btn-wrap .isi-button a").attr("sc:linkname", "important safety information and indication|open");

  jQuery(".modal-dialog .ga-isiclose-popup").click(function() {
    s.tl(this, "o", "important safety information and indication|close");
  });
  //copay terma and conditions close
  jQuery(".modal-dialog .ga-copaycard-close").click(function() {
    s.tl(this, "o", "Copay Terms and conditions|close");
  });

  /* xeljanz-you page omniture*/

  //section-tip
  jQuery(".fp-viewing-xeljanz-and-you .session-tip ul li a").attr("sc:linkname", "xeljanz+you_about");
  jQuery(".fp-viewing-xeljanz-and-you .session-tip ul li + li a").attr("sc:linkname", "xeljanz+you_share your story");

  //isgn up today
  jQuery(".ga-register-click-now").attr("sc:linkname", "About XEL+You_brandbox_sign up");

  //submit your story button
  jQuery(".ga-nav-click-submit-story").attr("sc:linkname", "share your story_brandbox_submit");

  /* financial support questions */

  //section-tip
  jQuery("a.ga-button-about-xelsource").attr("sc:linkname", "Financial Support_XELSOURCE");
  jQuery("a.ga-button-savings-options").attr("sc:linkname", "Financial Support_ savings options");
  jQuery("a.ga-button-savings-faqs").attr("sc:linkname", "Financial Support_Q&A");
  jQuery("a.ga-button-co-pay-savings-card").attr("sc:linkname", "Financial Support_copay card");

  ////vertical tab list
  jQuery(".vertical-tabs-list .ga-resources-click-xelsource").attr("sc:linkname", "financial support_contacting xelsource");
  jQuery(".vertical-tabs-list .ga-resources-getting-prescription").attr("sc:linkname", "financial support_getting started");
  jQuery(".vertical-tabs-list .ga-resources-paying-xeljanz").attr("sc:linkname", "financial support_paying for treatment");

  //call on xelsource
  jQuery(".xel-wrap.text-left").click(function() {
    s.tl(this, "o", "xelsource_phone");
  });
  
  //FAQ's
  
  //tooltip
  jQuery(".ga-diff-btw-xelxr").attr("sc:linkname", "FAQ_Difference");
  jQuery(".ga-button-about-xeljanz-and-xeljanz-xr").attr("sc:linkname", "FAQ_About XELJANZ");

  //About XELJANZ & XELJANZ XR
  jQuery(".quicktabs-tabs.quicktabs-style-nostyle li:nth-last-child(3) > a").attr("sc:linkname", "about xeljanz_talking to your doctor");
  jQuery(".quicktabs-tabs.quicktabs-style-nostyle li:nth-last-child(2) > a").attr("sc:linkname", "about xeljanz_xeljanz and xeljanz xr");
  jQuery(".quicktabs-tabs.quicktabs-style-nostyle li:nth-last-child(1) > a").attr("sc:linkname", "about xeljanz_about safety");

  //About XELJANZ & XELJANZ XR
  jQuery("#block-views-tallboy-pages-block-16 .views-row-1").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_side effects");
  });

  jQuery("#block-views-tallboy-pages-block-16 .views-row-2").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_side effects");
  });

  jQuery("#block-views-tallboy-pages-block-16 .views-row-3").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_other info");
  });

  jQuery("#block-views-tallboy-pages-block-16 .views-row-4").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_other info");
  });

  jQuery("#block-views-tallboy-pages-block-16 .views-row-5").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_2 weeks");
  });

  jQuery("#block-views-tallboy-pages-block-16 .views-row-6").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_forget pills");
  });


 
   /* EXPLORE YOUR POSSIBILITIES */

  //tooltip
  // jQuery(".ga-diff-btw-xelxr").attr("sc:linkname", "FAQ_Difference");
  // jQuery(".ga-button-about-xeljanz-and-xeljanz-xr").attr("sc:linkname", "FAQ_About XELJANZ");

  /* WHAT IS XELJANZ? */

  // tooltip
  jQuery("a.ga-button-quick-facts").attr("sc:linkname", "what is xeljanz_quick facts");
  jQuery("a.ga-button-how-xeljanz-xr-works").attr("sc:linkname", "what is xeljanz_how xeljanz works");
  jQuery("a.ga-button-xeljanz-milestones").attr("sc:linkname", "what is xeljanz_xeljanz milestones");
  jQuery("a.ga-button-clinical-trial-results").attr("sc:linkname", "what is xeljanz_clincial trial results");
  jQuery("a.ga-button-side-effects").attr("sc:linkname", "what is xeljanz_safety");


  //quick facts in Quick Facts About XELJANZ XR */
  jQuery(".fp-viewing-quick-facts .vertical-tabs-list li:nth-child(1) > a").attr("sc:linkname", "what is xeljanz_quick facts_small pill");
  jQuery(".fp-viewing-quick-facts .vertical-tabs-list li:nth-child(2) > a").attr("sc:linkname", "what is xeljanz_quick facts_ treatment option");
  jQuery(".fp-viewing-quick-facts .vertical-tabs-list li:nth-child(3) > a").attr("sc:linkname", "what is xeljanz_quick facts_join pain");
  jQuery(".fp-viewing-quick-facts .vertical-tabs-list li:nth-child(4) > a").attr("sc:linkname", "what is xeljanz_quick facts_physical function");
  jQuery(".fp-viewing-quick-facts .vertical-tabs-list li:nth-child(5) > a").attr("sc:linkname", "what is xeljanz_quick facts_ISI");
  jQuery(".fp-viewing-quick-facts .vertical-tabs-list li:nth-child(6) > a").attr("sc:linkname", "what is xeljanz_quick facts_jak inhibitor");
  jQuery(".fp-viewing-quick-facts .vertical-tabs-list li:nth-child(7) > a").attr("sc:linkname", "what is xeljanz_quick facts_bottle");
  jQuery(".fp-viewing-quick-facts .vertical-tabs-list li:nth-child(8) > a").attr("sc:linkname", "what is xeljanz_quick facts_common side effects");

  //carousel arrows
  // jQuery(".mob-control-wrap .ga-clinical-trial-prevarrow").attr("sc:linkname", "trial results_previous");
  // jQuery(".mob-control-wrap .ga-trial-progress-nextarrow").attr("sc:linkname", "trial results_next");
  // // for desktop
  // jQuery(".carousel-wrap .ga-clinical-trial-prevarrow").attr("sc:linkname", "trial results_previous");
  // jQuery(".carousel-wrap .ga-trial-progress-nextarrow").attr("sc:linkname", "trial results_next");

  //grey button's close button
  jQuery(".ga-collapse-serious-infection").click(function() {
    s.tl(this, "o", "safety_serious infection_close");
  });
  
  jQuery(".ga-collapse-cancer-imune").click(function() {
    s.tl(this, "o", "safety_health problems_close");
  });

  jQuery(".ga-collapse-tears-stomach").click(function() {
    s.tl(this, "o", "safety_tears_close");
  });

  jQuery(".ga-collapse-lab-result").click(function() {
    s.tl(this, "o", "safety_lab test_close");
  });

  jQuery(".ga-collapse-hcp").click(function() {
    s.tl(this, "o", "safety_HCP_close");
  });

  jQuery(".ga-collapse-side-effects").click(function() {
    s.tl(this, "o", "safety_serious infection_close");
  });  
  
 // grey buttons in side effects section
 jQuery("div.morph-button-fixed button").click(function() {
    if(jQuery(this).hasClass("ga-expand-serious-infection")) {
      s.tl(this, "o", "safety_serious infection_open");
    }
    if(jQuery(this).hasClass("ga-expand-cancer-imune")) {
      s.tl(this, "o", "safety_health problems_open");
    }    
    if(jQuery(this).hasClass("ga-expand-tears-stomach")) {
      s.tl(this, "o", "safety_tears_open");
    }
    if(jQuery(this).hasClass("ga-expand-lab-result")) {
      s.tl(this, "o", "safety_lab test_open");
    }
    if(jQuery(this).hasClass("ga-expand-hcp")) {
      s.tl(this, "o", "safety_HCP_open");
    }
    if(jQuery(this).hasClass("ga-expand-side-effects")) {
      s.tl(this, "o", "safety_side effects_open");
    }
  });

  /* PSORIATIC ARTHRITIS TREATMENT RESOURCES*/

  //NONBIOLOGIC DMARDs button in DMARDs
  jQuery(".ga-expand-Non-biologi").click(function() {
    s.tl(this, "o", "treatments for psa_dmards_non-biologics");
  });

  //BIOLOGIC DMARDsbutton in DMARDs
  // jQuery(".ga-expand-biologics").click(function() {
  //   s.tl(this, "o", "treatments for psa_dmards_biologics");
  // });

  /* ABOUT PSORIATIC ARTHRITIS */

  //tooltip
     jQuery(".ga-button-psa-facts").attr("sc:linkname", "ABOUT PSA_quick facts");
  jQuery(".ga-button-understanding-psoriatic-arthritis").attr("sc:linkname", "ABOUT PSA_understanding PSA");
  //Footer Menu links
  jQuery(".footer-wrap ul.menu > li:nth-last-child(3) ul.menu > li.first > a").attr("sc:linkname", "footer_about psa");
  jQuery(".footer-wrap ul.menu > li:nth-last-child(3) ul.menu > li.last > a").attr("sc:linkname", "footer_psa treatments");

  jQuery(".footer-wrap ul.menu > li:nth-last-child(2) ul.menu > li.first > a").attr("sc:linkname", "footer_what is xeljanz");
  jQuery(".footer-wrap ul.menu > li:nth-last-child(2) ul.menu > li:nth-child(2) > a").attr("sc:linkname", "footer_ discover different treatment");
  jQuery(".footer-wrap ul.menu > li:nth-last-child(2) ul.menu > li.last > a").attr("sc:linkname", "footer_FAQ");

  jQuery(".footer-wrap ul.menu > li:nth-last-child(1) ul.menu > li.first > a").attr("sc:linkname", "footer_financial support");
  jQuery(".footer-wrap ul.menu > li:nth-last-child(1) ul.menu > li.last > a").attr("sc:linkname", "footer_xeljanz+you");

  jQuery(".footer ul li a.ga-navigation-privacypolicy").attr("sc:linkname", "footer_privacy policy");
  jQuery(".footer ul li a.ga-navigation-termsofuse").attr("sc:linkname", "footer_terms of use");
  jQuery(".footer ul li a.ga-navigation-unsubscribe").attr("sc:linkname", "footer_unsubscribe");
  jQuery(".footer ul li a.ga-navigation-contactus").attr("sc:linkname", "footer_contact");

  jQuery(".footer img.ga-footer-logo").parent('a').attr("sc:linkname", "footer_pfizer");  
  jQuery(".footer ul li a.ga-navigation-ra").attr("sc:linkname", "footer_what is psa");
  jQuery(".footer ul li a.ga-navigation-aboutxeljanz").attr("sc:linkname", "footer_about xeljanz");
  jQuery(".footer ul li a.ga-ra-support").attr("sc:linkname", "footer_ xeljanz support resources");
  // For breadcrumb.
  jQuery(".page-node-35 ol.breadcrumb li:first > a").attr("sc:linkname", "home_breadcrumb");

  jQuery(".page-node-60,.page-node-97 ol.breadcrumb li:first > a").attr("sc:linkname", "home_breadcrumb");
  jQuery(".page-node-60,.page-node-97 ol.breadcrumb li:nth-child(2) > a").attr("sc:linkname", "about xeljanz_breadcrumb");


  jQuery("#ui-accordion-content-expand-173-panel-1 .search-glass:first").attr("sc:linkname", "biologic_dmards_recombinant DNA technology");
  jQuery("#ui-accordion-content-expand-173-panel-1 .search-glass:nth-child(2)").attr("sc:linkname", "biologic_dmards_immunosuppressants");

  jQuery("#page-node-37 .ga-text-ltc").attr("sc:linkname", "support resources_terms and conditions");
  jQuery("#ui-accordion-1-panel-3 .search-glass").attr({"sc:linkname":"Q&A_insurance change_PA"});

  jQuery(".xel-co-pay-second-block a:first").attr({"sc:linkname":"copay card_xeljanz kit"});
  jQuery(".abt-xel-copay-left a").attr({"sc:linkname":"copay card_card image"});

  jQuery(".abt-xel-copay-ft a[data-target='#xelsourceTerms']").attr({"sc:linkname":"copay card_see terms"});

  jQuery("#webform-client-form-82 .ga-patient-support[value='Yes']").click(function () {
    s.tl(this, "o", "share your story_yes");
  });
  jQuery("#webform-client-form-82 .ga-patient-support[value='No']").click(function () {
    s.tl(this, "o", "share your story_no");
  });

  jQuery("#webform-client-form-38 #edit-submitted-fieldset-no-fieldset-pill-pill-types").change(function () {
    if (jQuery(this).val() == 'Over-the-counter') {
      s.tl(this, "o", "registration_pill_over the counter");
    }
    else if (jQuery(this).val() == 'Other') {
      s.tl(this, "o", "registration_pill_other");
    }
    else if (jQuery(this).val() == 'XELJANZ') {
      s.tl(this, "o", "registration_pill_xeljanz");
    }
  });

  jQuery(".page-node-56 ol.breadcrumb li:first > a").attr("sc:linkname", "home_breadcrumb");
  jQuery(".page-node-56 ol.breadcrumb li:nth-child(2) > a").attr("sc:linkname", "about xeljanz_breadcrumb");

  jQuery(".page-node-153 ol.breadcrumb li:first > a").attr("sc:linkname", "home_breadcrumb");
  jQuery(".page-node-153 ol.breadcrumb li:nth-child(2) > a").attr("sc:linkname", "about xeljanz_breadcrumb");

  jQuery(".page-node-101 ol.breadcrumb li:first > a").attr("sc:linkname", "home_breadcrumb");
  jQuery(".page-node-101 ol.breadcrumb li:nth-child(2) > a").attr("sc:linkname", "about xeljanz_breadcrumb");

  jQuery(".page-node-100 ol.breadcrumb li:first > a").attr("sc:linkname", "home_breadcrumb");
  jQuery(".page-node-100 ol.breadcrumb li:nth-child(2) > a").attr("sc:linkname", "about xeljanz_breadcrumb");


});