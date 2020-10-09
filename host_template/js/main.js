$(document).ready(function () {

	$('#slider').slick(
		{
		   speed: 500, 
		   slidesToShow: 1,
		   autoplay: true,
		   arrows: true,
		   dots: false,
		   autoplaySpeed: 2000,
		   adaptiveHeight: true
		}
	);
	$('#mobile_menu_btn').click(function(){ 
		$('html').toggleClass("mobile-menu_open");
		$('#cat_menu').toggleClass("show");
		return false;
	});
	scrollTop();
	burgmenu();
})

function scrollTop() {
	$(window).scroll(function(){

		if($(this).scrollTop() > 140){
			$('.nav').addClass('navfixed');
		}else{
			$('.nav').removeClass('navfixed');
		}

		if($(this).scrollTop() > 150){
			$('.scrollToTop').addClass('scrollactive');
		}else{
			$('.scrollToTop').removeClass('scrollactive');
		}
	});

	$('a[href="#top"]').click(function(){
		$('body,html').animate({scrollTop:0},800);
		return false;
	});	
}
function burgmenu() {
	$(".burg_menu").click(function () {
		$('.burger_hidden_menu').toggleClass('show');
	})
}