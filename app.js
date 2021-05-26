$(function() {
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollOffset = $(window).scrollTop();
	let blocks = $("[data-scroll]");

	
	// Fixed Header
	checkScroll(scrollOffset);
	

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});


	function checkScroll(scrollOffset) {
		if(scrollOffset > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	// Smooth scroll
	blocks.on("click", function(event) {
		event.preventDefault();

		let blockId = $(this).data('scroll');
		let blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$(this).addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset + 5

		}, 700);

		$("#nav").toggleClass("active");

	});

	
	// Menu nav toggle
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		// $(this).toggle("active");
		$("#nav").toggleClass("active");

	});

	// Accordion
	$(".accordion__item").on("click", function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
		}
		else {
			$(".accordion__item").removeClass("active");
			$(this).toggleClass("active");
		}

	});

});