$(function () {


    $('#serve_slide').slick({

        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    //detail_box click할때마다 scroll
    const detail = $(".detail_menu>.detail_box>li");
    const serve = $(".detail_scroll>section");

    detail.click(function (event) {
        event.preventDefault();

        const tg = $(this);
        const i = tg.index();

        const section = serve.eq(i);
        const tt = section.offset().top-130;
        //offset().top : 해당요소의 Y축 좌표

        $("html,body").stop().animate({
            scrollTop: tt
        }, 'slow');
        //tt만큼 scrollTop animation slow 하게 실행하라

        detail.removeClass('on');
        tg.addClass('on');

    });

    // 상단 디테일 메뉴바 고정

    $(".detail_menu").each(function () {
        const $window = $(window)
        detailbox= $(this),
            detailboxTop = detailbox.offset().top,

            $window.scroll(function () {
                if ($window.scrollTop() > detailboxTop) {
                    detailbox.addClass("on")
                } else {
                    detailbox.removeClass("on")
                }
            })

    });

    //detail_box 스크롤 할때마다
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        serve.each(function(){
            const tg1 = $(this);
            const i =tg1.index();
            if(tg1.position().top-130<=sct){
                detail.removeClass("on");
                detail.eq(i).addClass("on");
            };

        });
    });








    //detail_pcbox click할때마다 scroll
    const detailpc = $(".detail_pcmenu>.detail_box>li");
    const servepc = $(".detail_scroll>section");

    detailpc.click(function (event) {
        event.preventDefault();

        const tg = $(this);
        const i = tg.index();

        const section = servepc.eq(i);
        const tt = section.offset().top-130;
        //offset().top : 해당요소의 Y축 좌표

        $("html,body").stop().animate({
            scrollTop: tt
        }, 'slow');
        //tt만큼 scrollTop animation slow 하게 실행하라

        detailpc.removeClass('on');
        tg.addClass('on');

    });

    // 상단 디테일 메뉴바 고정

    $(".detail_pcmenu").each(function () {
        const $window = $(window)
        detailbox= $(this),
            detailboxTop = detailbox.offset().top,

            $window.scroll(function () {
                if ($window.scrollTop() > detailboxTop) {
                    detailbox.addClass("fix")
                } else {
                    detailbox.removeClass("fix")
                }
            })

    });

    //detail_box 스크롤 할때마다
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        servepc.each(function(){
            const tg1 = $(this);
            const i =tg1.index();
            if(tg1.position().top-100<=sct){
                detailpc.removeClass("on");
                detailpc.eq(i).addClass("on");
            };

        });
    });


    //review more 기능
    const win = $(window).width();
    size_ul = $('#box ul').size(); // 개수 구하는 함수 

    if (win <= 640) {
        x = 2,
            $('#box ul:lt(' + x + ')').show(); 

            $('.btn').click(function () {
            x = (x + 2 <= size_ul) ? x + 2 : size_ul;
            $('#box ul:lt(' + x + ')').show();
        });
    } else if (win> 640 && win<=820) {
        x = 3,
            $('#box ul:lt(' + x + ')').show(); 

            $('.btn').click(function () {
            x = (x + 3 <= size_ul) ? x + 3 : size_ul;
            $('#box ul:lt(' + x + ')').show();
        });
    } else{
        x = 4,
            $('#box ul:lt(' + x + ')').show(); 

            $('.btn').click(function () {
            x = (x + 4 <= size_ul) ? x + 4 : size_ul;
            $('#box ul:lt(' + x + ')').show();
        });
    };

    //top버튼 기능
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
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




    

    





})