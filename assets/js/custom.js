wow = new WOW(
	{
		animateClass: 'animated',
		offset: 100
	});
wow.init();

$(window).load(function(){

	$('.main-nav li a, #header a').bind('click',function(event){
		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 102
		}, 1500,'easeInOutExpo');
		/*
		if you don't want to use the easing effects:
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		*/
		event.preventDefault();
	});
})

$(document).ready(function(e) {
				$('#test').scrollToFixed();
				$('.res-nav_click').click(function(){
						$('.main-nav').slideToggle();
						return false
				});
});

$(function(){

		$('.lazy-wrapper').lazyLoader({
				jsonFile: '../js/data.json',
				mode: 'click',
				limit: 4,
				records: 10,
				offset: 1,
				isIsotope: true,
				isotopeResize: 4



		});


		var $container = $('.lazy-wrapper');

		$container.imagesLoaded( function(){
			$container.isotope({
				   animationOptions: {
			     duration: 750,
			     easing: 'linear',
			     queue: false
			   }
			});
		});
});



