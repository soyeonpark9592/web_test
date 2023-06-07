$(function () {
    var slider = $('.slick');
    var sliderOptions = {
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }



    $('#slide-banner').slick({

        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    // menu
    //menu-search
    $("#trigger").on("click", function () {
        $("#input").toggleClass("open");
        $(".input").focus();

    });


    //menu-hamburger
    $(".hamburger").on('click', function () {
        $(".menu").toggleClass("open");
        $("header").toggleClass("on");
        $(".hamburger").toggleClass("open");
        $(".form").toggleClass("on");
    });

    $(".menu>ul>li>a").on('click', function () {
        if ($(this).parent().find(".sub").is(":visible")) {
            $(this).parent().find(".sub").stop().slideUp(500);
            $(this).children().css({
                'transform': 'rotate(90deg)'
            });
        } else {
            $(".sub").stop().slideUp(500);
            $(".menu>ul>li>a").children().css({
                'transform': 'rotate(90deg)'
            });
            $(this).parent().find(".sub").stop().slideDown(500);
            $(this).children().css({
                'transform': 'rotate(270deg)'
            });
        };
    });

    //pcmenu
    $(".pcmenu>ul>li>a").on('mouseover', function () {
        $(".pcsub").stop().slideUp(500);
        $(this).parent().find(".pcsub").stop().slideDown(500);
    });

    $(".pcmenu").on('mouseleave', function () {
        $(this).parent().find(".pcsub").stop().slideUp(500);
    });




    // animation

    $(".a1").waypoint(function () {
        $(".a1").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });

    $(".a2").waypoint(function () {
        $(".a2").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });
    $(".a3").waypoint(function () {
        $(".a3").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });
    $(".a4").waypoint(function () {
        $(".a4").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });

    $(".a5").waypoint(function () {
        $(".a5").addClass("animated fadeInUp");
    }, {
        offset: '75%'
    });




    $('.slick2').slick({
        draggable:false,
        dots: false,
        autoplay: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [{
                breakpoint: 1290, //1290미만
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    vertical: false
                }

            },
            {
                breakpoint: 800, //1290미만
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    vertical: false
                }

            }
        ]

    });

    // $(".filter>button").on("click", function () {
    //     $(".filter>button").removeClass("on");
    //     $(this).addClass("on");


    //     const btnName = $(this).text();

    //     $("#filterimg li").each(function () {
    //         const imgAlt = $(this).find("img").attr("data-list");

    //         if(imgAlt==btnName){
    //             $(this).fadeIn();
    //         }else{
    //             $(this).fadeOut();
    //         };
    //     });


    // });

    $(".g_slider").slick({
        slide: 'li',
        autoplay: true,
        infinity: false,
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:false,
        arrows: false,
        pauseOnHover: true,


        responsive: [{
                breakpoint: 1290, //1290미만
                settings: {
                    slidesToShow: 2,
                    dots: false,
                    autoplay: true,
                    infinity: false
                }

            },
            {
                breakpoint: 800, //800미만
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    autoplay: true,
                    infinity: false
                }

            }
        ]
    });


    $(".slick-buttons>button").on("click", function (e) {
        const n = $(this).index();
        $(".slick-buttons>button").removeClass("on");
        $(this).addClass("on");

        if (n == 0) {
            $(".g_slider").slick("slickUnfilter");
            $(".g_slider").slick("slickFilter", $(".g_slider li").filter(".Decon"));
        } else if (n == 1) {
            $(".g_slider").slick("slickUnfilter");
            $(".g_slider").slick("slickFilter", $(".g_slider li").filter(".Classic"));
        } else {
            $(".g_slider").slick("slickUnfilter");
            $(".g_slider").slick("slickFilter", $(".g_slider li").filter(".Touring"));
        }
        e.preventDefault();

    });




    //pc banner
    $("#banner>ul>li").on("click", function () {
        $("#banner>ul>li").removeClass("on");
        $(this).addClass("on");

    });

    $("#banner>ul>li").on("mouseleave", function () {
        $(this).removeClass("on");
    });


    $(window).on('load resize', function () {
        if ($(window).width() > 1024) {
            $('#slide-banner').slick('unslick');
            $('#slide-banner').css("display", "none");
            $('#banner').css("display", "block");


        } else {
            slider.not('slick-initialized').slick(sliderOptions);
        };

    });

    //a1지나면  header 사라짐
    
        $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var collection = $(".a1").offset().top;

        if(scroll >collection){
            $("header").addClass("up");
            $(".pcsub").stop().slideUp(200);
        }else{
            $("header").removeClass("up");
        }
    })

    //collection scroll 

    const menu = $(".collection>.tab>li>p");
    const contents = $(".collection>.scroll")

    menu.click(function (event) {
        event.preventDefault();

        const tg = $(this);
        const i = tg.index();

        const section = contents.eq(i);
        const tt = section.offset().top+1;
        //offset().top : 해당요소의 Y축 좌표

        $("html,body").stop().animate({
            scrollTop: tt
        }, 'slow');
        //tt만큼 scrollTop animation slow 하게 실행하라


        menu.removeClass('on');
        tg.addClass('on');


    });

    $(window).scroll(function () {
        const sct = $(window).scrollTop();
        contents.each(function () {
            const tg1 = $(this);
            const i = tg1.index() -1;
            if (tg1.offset().top < sct) {
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            };
        });

    });


        //top버튼 기능
        $(window).scroll(function () {
            if ($(this).scrollTop() > 600) {
                $('.top').fadeIn();
            } else {
                $('.top').fadeOut();
            }
        });
    
        //top아이콘 클릭시 부드럽게 이동
        $(".top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow")
            return false
        });
    




});