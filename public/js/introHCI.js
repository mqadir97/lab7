'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeCtr").click(projectClick);// your code here
}

function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    ga('send', 'event', 'like', 'click');
}