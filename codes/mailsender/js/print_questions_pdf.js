/**

 * @file
 * Implements javascript for webform functionality
 */

(function($, Drupal, window, document) {

  'use strict';

  // Create the callback for the command we used in our ajax response
  Drupal.ajax.prototype.commands.redirectUser = function(ajax, response)
  {
	console.log(response);
   window.open(response.path, '_blank');
	//var redirectWindow = window.open(response.path, '_blank');
	//redirectWindow.location;
	//window.location.href = response.path;
  };
})(jQuery, Drupal, this, this.document);