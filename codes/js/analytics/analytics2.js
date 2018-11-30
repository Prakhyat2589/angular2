/**
 * @file
 * Analytic code
 **/
jQuery(document).ready(function() {

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
  
  if(jQuery(".view-display-id-block_12 .views-row-2 .ui-accordion-icons").hasClass("ui-accordion-header-active")) {
      jQuery(".view-display-id-block_12 .views-row-2 .ui-accordion-icons.ui-accordion-header-active a").attr("sc:linkname", "Q&A_copay pharmacy_close");

   }else { 
    jQuery(".view-display-id-block_12 .views-row-2 .ui-accordion-icons a").attr("sc:linkname", "Q&A_free open");
   }

  // jQuery(".view-display-id-block_12 .views-row-1 .ui-accordion-icons.ui-accordion-header-active a").attr("sc:linkname", "Q&A_free trial_close");
  // jQuery(".view-display-id-block_12 .views-row-2 .ui-accordion-icons.ui-accordion-header-active a").attr("sc:linkname", "Q&A_copay pharmacy_close");
  // jQuery(".view-display-id-block_12 .views-row-3 .ui-accordion-icons.ui-accordion-header-active a").attr("sc:linkname", "Q&A_copay qualification_close");
  // jQuery(".view-display-id-block_12 .views-row-4 .ui-accordion-icons.ui-accordion-header-active a").attr("sc:linkname", "QQ&A_insurance approvals_close");
  // jQuery(".view-display-id-block_12 .views-row-5 .ui-accordion-icons.ui-accordion-header-active a").attr("sc:linkname", "Q&A_insurance change_close");

  // jQuery(".view-display-id-block_12 .views-row-1 a").attr("sc:linkname", "Q&A_free trial_open");
  // jQuery(".view-display-id-block_12 .views-row-2 a").attr("sc:linkname", "Q&A_copay pharmacy_open");
  // jQuery(".view-display-id-block_12 .views-row-3 a").attr("sc:linkname", "Q&A_copay qualification_open");
  // jQuery(".view-display-id-block_12 .views-row-4 a").attr("sc:linkname", "Q&A_insurance approvals_open");
  // jQuery(".view-display-id-block_12 .views-row-5 a").attr("sc:linkname", "Q&A_insurance change_open");
  /* frequently asked questions */

  //tooltip
  jQuery(".ga-diff-btw-xelxr").attr("sc:linkname", "FAQ_Difference");
  jQuery(".ga-button-about-xeljanz-and-xeljanz-xr").attr("sc:linkname", "FAQ_About XELJANZ");

  //About XELJANZ & XELJANZ XR
  jQuery(".quicktabs-tabs.quicktabs-style-nostyle li:nth-last-child(3) > a").attr("sc:linkname", "about xeljanz_talking to your doctor");
  jQuery(".quicktabs-tabs.quicktabs-style-nostyle li:nth-last-child(2) > a").attr("sc:linkname", "about xeljanz_xeljanz and xeljanz xr");
  jQuery(".quicktabs-tabs.quicktabs-style-nostyle li:nth-last-child(1) > a").attr("sc:linkname", "about xeljanz_about safety");

  //About XELJANZ & XELJANZ XR
  jQuery("#block-views-tallboy-pages-block-16 .views-row-1").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_relieve symptoms");
  });

  jQuery("#block-views-tallboy-pages-block-16 .views-row-2").click(function() {
      s.tl(this, "o", "aabout xeljanz_talk to doc_changing treatments");
  });

  jQuery("#block-views-tallboy-pages-block-16 .views-row-3").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_2 weeks");
  });

  jQuery("#block-views-tallboy-pages-block-16 .views-row-4").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_daily activities");
  });

  jQuery("#block-views-tallboy-pages-block-16 .views-row-5").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_other info");
  });

  jQuery("#block-views-tallboy-pages-block-16 .views-row-6").click(function() {
      s.tl(this, "o", "about xeljanz_talk to doc_tracking treatment");
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
  jQuery(".ga-expand-biologics").click(function() {
    s.tl(this, "o", "treatments for psa_dmards_biologics");
  });

  /* ABOUT PSORIATIC ARTHRITIS */

  //tooltip
     jQuery(".ga-button-psa-facts").attr("sc:linkname", "ABOUT PSA_quick facts");
  jQuery(".ga-button-understanding-psoriatic-arthritis").attr("sc:linkname", "ABOUT PSA_understanding PSA");
  
}); 