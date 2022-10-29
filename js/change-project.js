var main = function () {

        var fullpageConfig = {
            "0": {
                down: "/images/buttonsSVG/down.svg"
            },
            "2": {
                down: "/images/buttonsSVG/down.svg"
            },
            "3": {
                down: "/images/buttonsSVG/down.svg"
            },
            "4": {
                down: "/images/buttonsSVG/down-white.svg"
            },
            "5": {
                down: "/images/buttonsSVG/down.svg"
            },
            "6": {
                down: "/images/buttonsSVG/down.svg"
            },
            "default": {
                down: "/images/buttonsSVG/down.svg"
            }
        };

        $("#full-page").fullpage({
            anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
            navigation: true,
            loopTop: true,
            loopBottom: true,
            fitToSection: true,

            onLeave: function (index, nextIndex, action) {
                var config = fullpageConfig[nextIndex] || fullpageConfig.default;
                $('#button-down img').attr('src',config.down);
                var leavingSection = $(this);
                $('#empty').fadeTo('fast', 0.01);
                $('.down').fadeTo('fast', 0.01);
                console.log(nextIndex,($('.down').attr('src')));
                if (nextIndex == 4){
                    $('#empty').hide();
                    $('#partners').hide();
                    $('#consapp').fadeTo('slow', 1.00)
                } else if(nextIndex == 3){
                    $('#empty').hide();
                    $('#consapp').hide();
                    $('#partners').fadeTo('slow', 1.00);
                } else {
                    $('#consapp').hide();
                    $('#partners').hide();
                    $('#empty').fadeTo('fast', 0.01)
                }
                $('.down').fadeTo('slow', 1.00);
            }
        });


};
$(document).ready(main);
/**
 * Created by Ara on 14-Jul-16.
 */
/**
 * Created by Ara on 19-Aug-16.
 */
