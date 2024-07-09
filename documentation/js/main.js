(function(){
    'use strict';


    /* ---------------------------------------------
	 Initializing All Functions
	 --------------------------------------------- */

    initAnimateScroll();


    /* ---------------------------------------------
	 Animate Scroll
	 --------------------------------------------- */
	function initAnimateScroll(){
		$('.animatescroll-link').on('click', function(e){
			e.preventDefault();
		});
	}

})(jQuery);
