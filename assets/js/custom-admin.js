// Global variables for webriq tweaks

var logo = '/img/logo@xs.png';


// WARNING: Avoid using Document Ready
// because most of the items are fetch
// via AJAX so your injection won't
// Work properly. All your hacks put
// Them inside this container instead.



$(function() {

	setTimeout(function(){
		// $('.cms-logo').find('a').html('<img src=' + logo + '>');

    $('#menu_toggle').click(function () {
        if ($('body').hasClass('nav-md')) {
            $('body').removeClass('nav-md').addClass('nav-sm');
            $('.left_col').removeClass('scroll-view').removeAttr('style');
            $('.sidebar-footer').hide();

            if ($('#sidebar-menu li').hasClass('active')) {
                $('#sidebar-menu li.active').addClass('active-sm').removeClass('active');
            }
        } else {
            $('body').removeClass('nav-sm').addClass('nav-md');
            $('.sidebar-footer').show();

            if ($('#sidebar-menu li').hasClass('active-sm')) {
                $('#sidebar-menu li.active-sm').addClass('active').removeClass('active-sm');
            }
        }

    });



  }, 100);

});