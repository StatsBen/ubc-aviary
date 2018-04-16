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

/* high-level function coordinating the generation of the links */
generateLinksFromSectionElements = function() {

	var allSections = $('div.section').each(function(index) {
		assignUniqueID( $(this), index);
		createLink( $(this) );
	});

}

/* Generates a unique, but readable id for each section element */
assignUniqueID = function(section, i) {
	var name = section.attr('name').toLowerCase().replace(' ', '-');
	var newID = i + '-' + name;
	section.attr('id', newID);
}

/* Generates a link element for the section and appends it */
createLink = function(section) {

	var sectionInfo = extractSectionInfo(section);


	if (sectionInfo.link && section) {

		runSectionTitleChecks(sectionInfo);

		var linkyBoi = $('<a>', {
			'id':    sectionInfo.id + '-link',
			'class': 'section-link',
			'href':  '#' + sectionInfo.id,
			'text':  sectionInfo.name
		});

		var listyBoi = $('<li>', {
			'id':    sectionInfo.id + '-list',
			'class': 'section-link-list-element'
		});

		$('ul#links-list').append(listyBoi).append(linkyBoi);
	}

}

/* Creates a handy lil' object with all the section's attributes */
extractSectionInfo = function(section) {

	var sectionInfo = [];
	sectionInfo.name    = section.attr('name');
	sectionInfo.id      = section.attr('id');
	sectionInfo.link    = (section.attr('generateLink') == 'true');
	sectionInfo.content = section.text();
	return(sectionInfo);

}

/* Prints snarky comments about the section titles to the console */
runSectionTitleChecks = function(sectionInfo) {
	var message;
	if (sectionInfo.name.length > 10) {
		message = 'Hm... ' + sectionInfo.name;
		message +=  " is a pretty long name, don't you think?"
		console.warn(message);
	}
}
