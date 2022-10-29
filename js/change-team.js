var main = function () {
    $(document).ready(function ($) {

        $("#full-page").fullpage({
            anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
            navigation: true,
            loopTop: true,
            loopBottom: true,
            fitToSection: true
        });

    });

};
$(document).ready(main);