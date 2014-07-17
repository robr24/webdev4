
// fire on page load and any scroll event
$(document).on('ready scroll', function() {
    
	/******** STICKY NAVIGATION **********/
	//get coordinates of element, relative to document
	var menuOffset = $('#mainNav').offset().top,
		nav = $('#mainNav');

    // get the vertical position of the scroll bar
    var docScroll = $(document).scrollTop();

    if (docScroll >= menuOffset) {
        nav.addClass('fixed');
    } else {
        nav.removeClass('fixed');            
    }

	/******* LINKED SCROLLING ***********/
	/* requires viewport plugin */
	/* get the last section header that is within the viewport */
	/* play with first and last and then add in the bottom margin to the section elements */
  	var inview = '#' + $("section:in-viewport:first").attr('id');
  	/* match header up to the appropriate link */
  	var link = $('.nav-item > a[href="' + inview + '"]');

  	/* is can be replaced with hasClass */
  	if (link.length && !link.is('nav-link-selected')) {
    	// removes class from all nav links where applied
    	$('.nav-item > a').removeClass('nav-link-selected');
	    link.addClass('nav-link-selected');
  	}  	

});

$(document).on('ready', function() {

	/********** ANIMATED SCROLL TO ******/
	/* requires scroll to plugin */
	$('.nav-item > a').on('click', function(e) {
		// prevents link from firing normally
		e.preventDefault();
		$.scrollTo(this.hash, 1000,  { offset: -100,  onAfter: function(itm) {
			/* remove sticky nav */
			if (itm === '#top') {
				$('#mainNav').removeClass('fixed');
			}
		}});
	});



});




