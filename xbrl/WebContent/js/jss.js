	var base_width = 16;
	// suddivisione larghezza (em) dei tipi di schermo
	var screens = {
		''  : { w :  0 }, // tutti gli schermi
		's' : { w :  0 }, // small: smartphone
		'm' : { w : 35 }, // medium: tablet
		'l' : { w : 60 }, // large: desktop
		'x' : { w : 100 } // extra large: big desktop screens
	};

	function pageAddClass(CSSclass){
		setTimeout(function() {$('body').addClass(CSSclass);}, 100);
	}

	function pageRemoveClass(CSSclass){
		setTimeout(function() {$('body').removeClass(CSSclass);}, 100);
	}

	/** gestione classi generali in base alla larghezza dello schermo */
	function onResizePage() {
		for (var s in screens) {
			var w = screens[s].w * base_width;

		    if($(window).width() > w) {
	    		for (var i in screens) {
	    			pageRemoveClass('screen-'+i);
	    		}
		        pageAddClass('screen-' + s);
		    }
		}
		pageRemoveClass('screen-wide');
		var ratio = $(window).width() / $(window).height();
		if (ratio > 1.7) {
			pageAddClass('screen-wide');
		}
	}

	function checkScrolledBottom() {
		if ( $(document).height() - $(window).height() - $(window).scrollTop() > 250)
			pageAddClass('scrolled-bottom');
	    else
	    	pageRemoveClass('scrolled-bottom');
	}

	function onScrollPage() {
		if ($(window).scrollTop() > 50) {
			pageAddClass('scrolled');
			setTimeout(function() { checkScrolledBottom() } , 200) ;
		}
		else {
			pageRemoveClass('scrolled');
		}
		return true;
	}

	$(document).ready( function() {
		// Azioni da compiere allo scroll della pagina
		$(window).bind('scroll', function() { onScrollPage(); } );
		// Azioni da compiere al resize della pagina
		$(window).bind('resize', function() { onResizePage(); } );

		onResizePage();
	});
