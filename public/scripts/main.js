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

createLink = function(section) {

// Check the name (length, spaces, etc.) TODO

// see if it shouldn't have a link made. TODO

// Add check to see if a section is empty TODO

	var sectionInfo = extractSectionInfo(section);

	if (sectionInfo.link) {

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


extractSectionInfo = function(section) {

	var sectionInfo = [];
	sectionInfo.name = section.attr('name');
	sectionInfo.id   = section.attr('id');
	sectionInfo.link = (section.attr('generateLink') == 'true');
	return(sectionInfo);

}
