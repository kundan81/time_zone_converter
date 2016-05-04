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