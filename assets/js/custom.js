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
//     $.getJSON('/data/news.json', function(obj){
//         console.log(obj);

//         $.each(obj.items, function(k, val){

//           console.log(val.image)

//           var items = [];

//           items.push("<div class='col-sm-4 lazyItem'>\
//             <div class='card'><div class='card-image waves-effect waves-block waves-light'>\
//             <img class='activator' src=' "+ val.image +"'></div><div class='card-content'>\
//             <span class='card-title activator grey-text text-darken-4'>"+ val.title +"<i class='material-icons right'>more_vert</i></span>\
//             <time datetime='"+ val.date +"'>"+ val.date +"</time></div>\
//             <div class='card-reveal'>\
//             <span class='card-title grey-text text-darken-4'>"+ val.title +"<i class='material-icons right'>close</i></span>\
//             <time datetime='"+ val.date +"'>"+ val.date +"</time>\
//             <p>"+ val.comment +"</p>\
//             <p class='read-more'><a class='btn waves-effect waves-light' href='/get-your-rating-widget-now'>READ MORE</a></p></div></div></div>")




//         });

//     });
$('.lazy-wrapper').lazyLoader({

                  mode: 'click',
                  limit: 4,
                  records: 10,
                  offset: 1,
                  isIsotope: true,
                  isotopeResize: 4,

  });


    var $container = $('.lazy-wrapper');

    $container.imagesLoaded( function(){
      $container.isotope({
           animationOptions: {
           duration: 750,
           easing: 'linear',
           queue: true
         }
      });
       $('.lazyItem.loaded').find('.card .card-content, .card .card-reveal').each(function(){

   var created = $(this).find('time').attr('date');
   date = created.split(' ', 4).join(' ');

   var datetobe = moment(date, 'llll');
   var datemust = datetobe.format('LL');

   $(this).find('time').attr('date', datemust).text(datemust);

})

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



