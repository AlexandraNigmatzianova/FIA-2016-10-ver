var main = function() {

    $('.down').click(function() {
        $.fn.fullpage.moveSectionDown();
    });
};

$(document).ready(main);