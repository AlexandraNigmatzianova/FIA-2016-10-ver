var main = function() {
    /* Push the body and the nav over by 33vw over contact-menu-link */
    $('#contactsMain').click(function() {
        $('.contactMenu').animate({
            right: "0vw"
        }, 200);

        $('body').animate({
            right: "33vw"
        }, 200);
    });

    /* Then push them back */
    $('.icon-close').click(function() {
        $('.contactMenu').animate({
            right: "-33vw"
        }, 200);

        $('body').animate({
            right: "0px"
        }, 200);
    });
};


$(document).ready(main);/**
 * Created by Ara on 14-Jul-16.
 */
