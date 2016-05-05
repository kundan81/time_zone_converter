/**
 * @file
 * The theme system, which controls the output of Drupal.
 *
 * The theme system allows for nearly all output of the Drupal system to be
 * customized by user themes.
 */
(function ($) {
	$(document).ready(function() {
		$('#select-date-time').on('keydown',function(e) { 
			var key = e.charCode || e.keyCode;
			if(key == 122 || key == 27 )
			  {}
			else {
			  e.preventDefault();
			}
		});
	});
})(jQuery);