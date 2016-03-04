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
			scrollTop: $($anchor.attr('href')).offset().top - 50
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
				$('.scrollspy').scrollSpy();
});

$(function(){

		cbpBGSlideshow.init();

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

  function stripTrailingSlash(str) {
    if(str.substr(-1) == '/') {
      return str.substr(0, str.length - 1);
    }
    return str;
  }

  var url = window.location.pathname;
  var activePage = stripTrailingSlash(url);

  $('.main-nav li a').each(function(){
    var currentPage = stripTrailingSlash($(this).attr('href'));

    if (activePage == currentPage) {
      $(this, 'a').addClass('active');
    }
  });



		var d = document, s = d.createElement('script');

		s.src = '//businesstpl.disqus.com/embed.js';

		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);


});



