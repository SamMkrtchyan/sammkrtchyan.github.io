$(document).ready(function () {
	init();
	getCategory();
	getSponser();


	document.title = 'Կայք';
	// Slider
	$(".slick-prev").css('display', 'none');
	$(".slick-next").css('display', 'none');

	$('.slider').slick({
	  speed: 500, slidesToShow: 1, autoplay: true,
	  autoplaySpeed: 2000, adaptiveHeight: true
	});
	$('.sponser-slide').slick({
	  speed: 500, slidesToShow: 1, autoplay: true,
	  autoplaySpeed: 2000, adaptiveHeight: true
	});
})