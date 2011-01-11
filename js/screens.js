

/*
	onload functions to determine which site to redirect the user to, i.e. phone, tablet or screen
*/
$(document).ready(function() {
	var user_agent = navigator.userAgent;
	if (user_agent.search(/mobile/i) != -1) {
			if (user_agent.search(/iPad/) != -1) {
				//tablets (we realy just mean iPads)
				window.location = "tablet/index.html";
			} else {
				//phones 
				window.location = "phone/index.html";
			}
	} // everything else just stays here..
	
});