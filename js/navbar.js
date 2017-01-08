jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
            navbar = $('.navbar');

        if (scrollPos > 20) {
            navbar.addClass('.navbar-scrolled');
        } else {
            navbar.removeClass('.navbar-scrolled');
        }
    });
});
