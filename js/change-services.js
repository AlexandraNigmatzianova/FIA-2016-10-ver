var main = function() {
    $(document).ready(function ($) {
        var fullpageConfig = {
            "0": {
                logo: "/images/Logo/white2.svg"
            },
            "2": {
                logo: "/images/Logo/black1.svg",
                menu: "/images/buttonsSVG/menu-icon-black.svg",
                down: "/images/buttonsSVG/down.svg",
                script: "#1e1e1e"
            },
            "3": {
                logo: "/images/Logo/white2.svg",
                menu: "/images/buttonsSVG/menu-icon.svg",
                down: "/images/buttonsSVG/down-white.svg",
                script: "#eaeaea"
            },
            "4": {
                logo: "/images/Logo/white2.svg",
                menu: "/images/buttonsSVG/menu-icon.svg",
                down: "/images/buttonsSVG/down-white.svg"
            },
            "5": {
                logo: "/images/Logo/black1.svg",
                menu: "/images/buttonsSVG/menu-icon-black.svg",
                down: "/images/buttonsSVG/down.svg",
                script: "#1e1e1e"
            },
            "6": {
                logo: "/images/Logo/white2.svg",
                menu: "/images/buttonsSVG/menu-icon.svg",
                down: "/images/buttonsSVG/down-white.svg",
                script: "#eaeaea"
            },
            "7": {
                logo: "/images/Logo/black1.svg",
                menu: "/images/buttonsSVG/menu-icon-black.svg",
                down: "/images/buttonsSVG/down.svg",
                script: "#1e1e1e"
            },
            "8": {
                logo: "/images/Logo/white2.svg",
                menu: "/images/buttonsSVG/menu-icon.svg",
                down: "/images/buttonsSVG/down-white.svg",
                script: "#eaeaea"
            },
            "9": {
                logo: "/images/Logo/black1.svg",
                menu: "/images/buttonsSVG/menu-icon-black.svg",
                down: "/images/buttonsSVG/down.svg",
                script: "#1e1e1e"
            },
            "10": {
                logo: "/images/Logo/white2.svg",
                menu: "/images/buttonsSVG/menu-icon.svg",
                down: "/images/buttonsSVG/down.svg",
                script: "#1e1e1e"
            },
            "11": {
                logo: "/images/Logo/black1.svg",
                menu: "/images/buttonsSVG/menu-icon-black.svg",
                down: "/images/buttonsSVG/down.svg",
                script: "#1e1e1e"
            },
            "12": {
                logo: "/images/Logo/white2.svg",
                menu: "/images/buttonsSVG/menu-icon.svg",
                down: "/images/buttonsSVG/down-white.svg",
                script: "#eaeaea"
            },
            "default": {
                logo: "/images/Logo/white2.svg",
                menu: "/images/buttonsSVG/menu-icon.svg",
                down: "/images/buttonsSVG/down.svg",
                script: "#1e1e1e"
            }
        };
        $("#full-page").fullpage({
            anchors: ['page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11'],
            navigation: true,
            loopTop: true,
            loopBottom: true,
            fitToSection: true,

            onLeave: function (index, nextIndex, action) {
                var config = fullpageConfig[nextIndex] || fullpageConfig.default;
                $('#button-down').attr("src", config.down);

                var maxXs = 810;
                var script='#1e1e1e';
                script=config.script;
                if ($(document).width() <= maxXs) {
                    $("#img-navbar-brand1").attr("src", config.logo);
                    $("#img-navbar-brand2").attr("src", config.logo);
                    $(".menu-mobile").attr("src", config.menu);
                    $('.script-mobile').css("border-color",config.script);
                    $('.script-mobile').css("color",config.script);
                    console.log($('.script-mobile').css.borderColor)
                }
                var leavingSection = $(this);
                $('.order-mobile').fadeTo('fast', 0.01);
                $('.become-mobile').fadeTo('fast',0);
                $('.script-mobile').fadeTo('fast',0);
                $('.script-mobile').hide();
                $('.how-mobile').hide();
                $('.down').fadeTo('fast', 0.01);
                if (nextIndex !== 1 && nextIndex !== 4) {
                    console.log(nextIndex);
                    $('.how-mobile').hide();
                    $('.become-mobile').hide();
                    $('.order-mobile').fadeTo('slow', 1.00);
                    $('.script-mobile').fadeTo('slow',1.00);
                }else if(nextIndex == 4){
                    console.log("qwertyuiop 4");
                    $('.order-mobile').hide();
                    $('.become-mobile').fadeTo('slow',1.00);
                    $('.how-mobile').fadeTo('slow', 1.00);
                }else{
                    $('.how-mobile').fadeTo('fast',0);
                    $('.how-mobile').hide();
                    $('.become-mobile').hide();
                    $('.order-mobile').fadeTo('fast', 0.01);
                    $('.script-mobile').fadeTo('fast',0);
                    console.log("faded to 0")
                }
                $('.down').fadeTo('slow', 1.00);
                /*if (nextIndex !== 1 && nextIndex !== 4) {
                    $('.script-mobile').fadeTo('slow', 1.00);
                } else if (nextIndex !== 4) {
                    $('.how-mobile').fadeTo('slow',1.00)
                }*/
            }
        });
    });

};
$(document).ready(main);
/**
 * Created by Ara on 14-Jul-16.
 */