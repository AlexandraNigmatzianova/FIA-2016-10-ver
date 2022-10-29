var main = function () {
    $(document).ready(function ($) {

        $("#full-page").fullpage({
            anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
            navigation: true,
            loopTop: true,
            loopBottom: true,
            fitToSection: true,

            onLeave: function (index, nextIndex, direction) {
                var leavingSection = $(this);
                $('.order-mobile').fadeTo('fast', 0.01);
                $('.down').fadeTo('fast', 0.01);
                if (nextIndex !== 1) {
                    $('.order-mobile').fadeTo('slow', 1.00);
                }
                $('.down').fadeTo('slow', 1.00);
                //after leaving section 2
            }
        });
    });

};
$(document).ready(main);
/**
 * Created by Ara on 14-Jul-16.
 */
