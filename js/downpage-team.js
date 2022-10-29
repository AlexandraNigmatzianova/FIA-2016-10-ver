var main = function () {
    var maxXs = 767;
    console.log($(document).width(), $(document).width() > maxXs);
    $('.down').click(function () {
        $.fn.fullpage.moveSectionDown();
    });
    window.onscroll = function () {
        console.log('aksldjalksdjlasd');
    }
};
$(document).ready(main);
