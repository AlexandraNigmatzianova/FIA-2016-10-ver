var main = function() {
    /* Push the body and the nav over by 33vw over contact-menu-link */

    $('#contactsMain720').click(function() {
        $('.contactMenu720').animate({
            right: "0vw"
        }, 200);

        $('body').animate({
            right: "100vw"
        }, 200);
    });

    /* Then push them back */
    $('.icon-close-menu720').click(function() {
        $('.contactMenu720').animate({
            right: "-100vw"
        }, 200);

        $('body').animate({
            right: "0px"
        }, 200);
    });
};


$(document).ready(main);/**
 * Created by Ara on 15-Jul-16.
 */
