

var debug = true;
var rune_index = 0;

$(document).ready(function() {
	
		build_runes();
		if (window.console && debug) {
			console.log(runes[rune_index++].name);
		}
		
		$("#footer").delay(5000).fadeOut('slow');
		
		// window.navigator.onLine
		$("#fehu").bind('swiperight', function() {
			var page_handle = "#" + runes[rune_index++].name;
			$.mobile.changePage(page_handle, "slide");
		});
		
		// single tap brings up the nav in the footer
		$("#fehu").bind('tap', function() {
			
			if ($("#footer").css("display") == 'none') {
				$("#footer").fadeIn('slow');
			} else {
				$("#footer").fadeOut('slow');
			}
		})
	
});

