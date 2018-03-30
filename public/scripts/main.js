/**
 *
 * This script runs all the dynamic actions in the UBC Aviary's
 * web page, and also dynamically generates all the quick-links
 * at the top of the home page based on the content sections in the
 * 'content' directory.
 *
 * Author: Ben Clark - Mar. 2018
 *
 **/

$(document).ready(function() {

	generateLinksFromSectionElements();
});

generateLinksFromSectionElements = function() {

	// TODO
	console.log("page is loaded");

	// Get all the sections TODO

	extractSectionInfo();
}


extractSectionInfo = function() {

	// Check the name (length, spaces, etc.)

	// see if it shouldn't have a link made.
}
