// Global variables for webriq tweaks

var logo = '/img/logo@xs.png';


// WARNING: Avoid using Document Ready
// because most of the items are fetch
// via AJAX so your injection won't
// Work properly. All your hacks put
// Them inside this container instead.

$('.cms.cms-inline-list').ready(function(e){

  e.preventDefault();
  $('<li class="cms cms-li cms-has-dropdown"><a class="cms cms-nav-link" href="/" target="_blank"><i class="cms-icon fa fa-link" aria-hidden="true"></i> VIEW</a></li>').insertBefore(".cms-right-menu .cms-inline-list li:first-child");

});


$( document ).ajaxComplete(function() {
$('<li class="cms cms-li cms-has-dropdown"><a class="cms cms-nav-link" href="/" target="_blank"><i class="cms-icon fa fa-link" aria-hidden="true"></i> VIEW</a></li>').insertBefore(".cms-right-menu .cms-inline-list li:first-child");
	setTimeout(function(){
		$('.cms-logo').find('a').html('<img src=' + logo + '>');



  }, 100);

});