var $ = jQuery;
$(document).ready(function() {
	deviceClass();
  getDevice();
	$(window).smartresize(function () {
		deviceClass();	
    getDevice();
	});	
});
/*****************************************************************
------------------------------------------------------------------
Function - Script - Device Detection
------------------------------------------------------------------
*****************************************************************/
function getDevice() {
	var device = "desktop";
	$('body').addClass('dv-desktop').removeClass('dv-mobile dv-tablet');
	var agent = window.navigator.userAgent;
	var redirectagent = navigator.userAgent.toLowerCase();
	var redirect_devices = ['vnd.wap.xhtml+xml', 'sony', 'symbian', 'nokia', 'samsung', 'mobile', 'windows ce', 'epoc', 'opera mini', 'nitro', 'j2me', 'midp-', 'cldc-', 'netfront', 'mot', 'up.browser', 'up.link', 'audiovox', 'blackberry', 'ericsson', 'panasonic', 'philips', 'sanyo', 'sharp', 'sie-', 'portalmmm', 'blazer', 'avantgo', 'danger', 'palm', 'series60', 'palmsource', 'pocketpc', 'smartphone', 'rover', 'ipaq', 'au-mic', 'alcatel', 'ericy', 'vodafone', 'wap1', 'wap2', 'teleca', 'playstation', 'lge', 'lg-', 'iphone', 'android', 'htc', 'dream', 'webos', 'bolt', 'nintendo'];
	for (var i in redirect_devices) {
		if (redirectagent.indexOf(redirect_devices[i]) != -1) {
			device = "mobile";
			$('body').addClass('dv-mobile').removeClass('dv-desktop dv-tablet');;
		}
	}
	if (agent.indexOf('iPad') > -1) {
		device = "iPad";
		$('body').addClass('dv-tablet').removeClass('dv-mobile dv-desktop');;
	}
	if((redirectagent.indexOf("android") > -1) && !(redirectagent.indexOf("mobile") > -1)){
		device="android";
		$('body').addClass('dv-tablet').removeClass('dv-mobile dv-desktop');
	}
	/*--Added to check browser type---*/
	if (agent.indexOf("Firefox") != -1) {
		jQuery('body').addClass('mozilla');
	}
	if (agent.indexOf("Chrome") != -1) {
		jQuery('body').addClass('chrome');
	}
	if (agent.indexOf("MSIE") != -1) {
		jQuery('body').addClass('ie');
	}
	if (agent.indexOf("Safari") != -1 && navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('Android') == -1) {
		jQuery('body').addClass('safari');
	}
	/*--Added to check if resolution is that of Desktop but user agent is of Mobile---*/
	winWidth=Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		 if(winWidth >= 1000) {			
				if((redirectagent.indexOf("mobile") > -1)){
					$('body').addClass('bw-desktop').removeClass('bw-tablet bw-mobile');					
					$('body').addClass('dv-desktop').removeClass('dv-mobile dv-tablet');					
				}
		}
	
	return device;
}
/*****************************************************************
------------------------------------------------------------------
Function - Device Specific Class
------------------------------------------------------------------
*****************************************************************/
function deviceClass() {
	dv_mobile = $('body').hasClass('dv-mobile'),
	dv_tablet = $('body').hasClass('dv-tablet'),
	dv_desktop = $('body').hasClass('dv-desktop');
}