var $ = jQuery;
/* 
Function for Sticky Sidebar for Desktop
*/
function stickIt() {

  if ($("body").hasClass("bw-desktop")) {

    var $stickElement = $('div#sidebar');
    var isiContBlock = $('.sidebar-isi .bean-isi-blocks');
    var sidebarBlock = $('#sidebar');

    //variables required for calculating height sidebar and isi content 
    var windowHeight = $(window).height();

    var topnavHeight = $('#topmenu').outerHeight(true);
    var indicationContentHeight = $('.indication-content').outerHeight(true)+22;
    var expandclose = $('.expand-collapse').outerHeight(true);

    var mainnavHeight = $('#main-menu-nav').outerHeight(true);
    var mainnavInnerHeight = $('#main-menu-nav').innerHeight();
    var sidebarIndicationBlockHeight = $(".indication-block-brand-info").outerHeight(true);

    //var sidebarBlockTitleHeight = $('#sidebar .block-title').outerHeight(true);
    
    var aPillPage = jQuery('body').hasClass('a-pill');


    //variables to be used on page load	
    //var scrollBarPadding = 5;
    var scrollBarPadding = 55; /* changed for height */

    //Variables as required per functional specs

    var scrollTopHeight = 54;


    //Main-menu-nav and ISI are separated by 27px.
    var sidebarTopHeight = -10;

    var sidebarBlockStickyTopheight = mainnavInnerHeight + sidebarTopHeight+22;

    var sidebarBlockStickyTopheight_apil = mainnavInnerHeight + sidebarTopHeight + indicationContentHeight;

    //Sidebar height used on. 1.Initial Page load 2. Scroll Up i.e. when fixScroll gets removed		
    var sidebarBlockHeight = windowHeight - topnavHeight - mainnavHeight - sidebarTopHeight - indicationContentHeight;
    var sidebarBlockTopheight = topnavHeight + mainnavHeight + sidebarTopHeight + indicationContentHeight;

    

    //ISI content height used on. 1.Initial Page load 2. Scroll Up i.e. when fixScroll gets removed
    //var isiContBlockHeight = sidebarBlockHeight - sidebarIndicationBlockHeight - scrollBarPadding;
    //removed sidebarIndicationBlockHeight as it is notr required
    var isiContBlockHeight = sidebarBlockHeight - scrollBarPadding;

    //variables used when fixscroll is added i.e. scrolling down
    var sidebarStickyBlockHeight = windowHeight - mainnavInnerHeight - sidebarTopHeight ;

    var isiContStickyBlockHeight = sidebarStickyBlockHeight - sidebarIndicationBlockHeight - scrollBarPadding -20;
    if ($stickElement.length) {
      display_sidebar_block(sidebarBlock, sidebarBlockHeight, sidebarBlockTopheight, 'initial');

      display_isi_content(isiContBlock, isiContBlockHeight);

      display_isi_content_scroll(isiContBlock);

      var scroll = false;

      $(window).scroll(function (e) {
        scroll = true;

        if ($(window).scrollTop() > scrollTopHeight) {

          $stickElement.addClass('fixScroll');

          display_sidebar_block(sidebarBlock, sidebarStickyBlockHeight, sidebarBlockStickyTopheight, 'sticky');

          display_isi_content(isiContBlock, isiContStickyBlockHeight);
          
        } else {
          if (aPillPage) {
            $stickElement.addClass('fixScroll');

            display_sidebar_block(sidebarBlock, sidebarStickyBlockHeight, sidebarBlockStickyTopheight_apil, 'sticky');

            display_isi_content(isiContBlock, isiContStickyBlockHeight);
          }
          else {
            $stickElement.removeClass('fixScroll');
            //Sidebar height used on. 2. Scroll Up
            
            /* Added for sticky sidebar issue start */
            mainnavHeight = $('#main-menu-nav').outerHeight(true);
            sidebarBlockTopheight = topnavHeight + mainnavHeight + sidebarTopHeight + indicationContentHeight;
            /* Added for sticky sidebar issue end */
            
            display_sidebar_block(sidebarBlock, sidebarBlockHeight, sidebarBlockTopheight, 'initial');
  
            //ISI content height used on. 2. Scroll Up
            display_isi_content(isiContBlock, isiContBlockHeight);
          }
        }
      });

      if (!scroll) {

        if ($(window).scrollTop() > scrollTopHeight) {

          $stickElement.addClass('fixScroll');

          display_sidebar_block(sidebarBlock, sidebarStickyBlockHeight, sidebarBlockStickyTopheight, 'sticky');

          display_isi_content(isiContBlock, isiContStickyBlockHeight);

        } else {
          if (aPillPage) {
            $stickElement.addClass('fixScroll');

            display_sidebar_block(sidebarBlock, sidebarStickyBlockHeight, sidebarBlockStickyTopheight_apil, 'sticky');

            display_isi_content(isiContBlock, isiContStickyBlockHeight);
          }
          else {
            $stickElement.removeClass('fixScroll');
            //Sidebar height used on. 2. Scroll Up
 
            display_sidebar_block(sidebarBlock, sidebarBlockHeight, sidebarBlockTopheight, 'initial');
  
            //ISI content height used on. 2. Scroll Up
            display_isi_content(isiContBlock, isiContBlockHeight);
          }
        }
      }


    }

  }

}
/*
Function to set sidebar
*/
function display_sidebar_block(sidebarBlock, sidebarBlockHeight, sidebarBlockTopheight, state) {
  if (state == 'initial') {

    sidebarBlock.height(sidebarBlockHeight).css({
      "top": sidebarBlockTopheight
    });
  }

  if (state == 'sticky') {

    sidebarBlock.height(sidebarBlockHeight).css({
      "top": sidebarBlockTopheight,
    });
  }
}
/*
Function to isi content div
*/
function display_isi_content(isiContBlock, isiContBlockHeight) {
  var portraitWidth = $(window).width(); //detect the iPad in Portrait orientation
  if (portraitWidth > 767 && portraitWidth <= 992) {
    isiContBlockHeight = isiContBlockHeight+50;
  }
  else if (portraitWidth < 767) {
    isiContBlockHeight = isiContBlockHeight+30;
  }
  isiContBlock.height(isiContBlockHeight).css({});
}
/*
Function to apply scroll to isi content div
*/
function display_isi_content_scroll(isiContBlock) {
  isiContBlock.mCustomScrollbar({
    autoDraggerLength: false,
    updateOnContentResize: true,
    theme: "dark-3",
    autoHideScrollbar: true,
    keyboard: {
      enable: true
    },
    mouseWheel: {
      preventDefault: true
    },
    callbacks:{
      onScrollStart:function(){
        callOmniture(isiContBlock);
      }
    }
  });
}
/*
window load
*/
$(document).ready(function () {
  setTimeout(function () {
    stickIt();
  }, 1000);

});

$(window).smartresize(function () {
  setTimeout(function () {
    stickIt();
  }, 500);
});

function callOmniture(isiContBlock) {
  var className = isiContBlock[0].className;
  if (className.indexOf('bean-isi-blocks') !== -1) {
    s.tl(this, "o", "right nav_isi scroll");
  }
}
