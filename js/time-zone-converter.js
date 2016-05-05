/**
 * @file
 *
 * This js file restricting user to not enter date & time directly.
 * User can change date & time with the help of pop up window. 
 * Pop window will be open when user click on Date time input field.
 *
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