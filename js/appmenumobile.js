/**
 * Created by Ara on 14-Jul-16.
 */
var main = function() {
    $('.button-mobile').click(function() {
        $('.Menu720').animate({
            right: "0px"
        }, 200);

        $('body').animate({
            right: "100vw"
        }, 200);

    });
    /* Then push them back */
    $('.icon-close-menu720').click(function() {
        $('.Menu720').animate({
            right: "-100vw"
        }, 200);

        $('body').animate({
            right: "0px"
        }, 200);
    });
};


$(document).ready(main);/**/