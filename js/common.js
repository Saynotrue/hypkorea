$(document).ready(function(){
    
    // 모바일 메뉴 노출
    $('header .m-button').click(function(){
        if( $(this).hasClass('on') ){
            $(this).removeClass('on');
            $('header .mobile-nav').removeClass('on');
            $('body').removeClass('hidden');
        } else {
            $(this).addClass('on');
            $('header .mobile-nav').addClass('on');
            $('body').addClass('hidden');
        }
    });
    
    // 푸터 맨위로 버튼
    $('.footer-inner > button').click(function(){
        $('html,body').animate({scrollTop:0},600);
    });
    
    // header 배경색 변경
    var ww = $(window).outerWidth();
    if(ww >= 1024){
        $(window).scroll(function(){
            scr = $(window).scrollTop();
            if(scr >= 50){
                $('header').addClass('on');
            } else {
                $('header').removeClass('on');
            }
        });
    }
    
    // 클릭시 폼 위치로 이동
    $('.move').click(function(){
        $(this).on("click",function(event){
          event.preventDefault();
        });
        var mt = $('.move-inner').offset().top;
        var mt_h = $('.move-inner').height()/2;
        
        $('html,body').animate({scrollTop:mt-100},1200);
        
    });
    
    // parallax - 회사 소개
    $('body.company').each(function(){
        $('.main .text strong').addClass('animateX');
        $('.main .text p').addClass('animateX');
        $('.section01 .text-box').addClass('animateY');
        $('.section01 .circle-inner').addClass('animateX');
        $('.section01 h2').addClass('animateY');
        $(window).scroll(function(){
            var wst = $(this);

            parallax(wst,$('.section02 .img-inner .i-box'),'Y');
            parallax(wst,$('.section03 .contents'),'X');
        });
    });
    
    // parallax - 방역서비스
    $('body.disinfection').each(function(){
        $('main .text > p').addClass('animateY');
        $(window).scroll(function(){
            var wst = $(this);

            parallax(wst,$('.section01 .title, .section01 h2, .section01 .c-text'),'Y');
            parallax(wst,$('.section02 .title, .section02 h2'),'Y');
            parallax(wst,$('.section03 h2'),'Y');
            parallax(wst,$('.section03 .bg'),'X');
            parallax(wst,$('.section03 .text'),'X');
            parallax(wst,$('.section04 h2, .section04 > .title'),'Y');
            parallax(wst,$('.section04 .text01'),'X');
            parallax(wst,$('.section04 .text02'),'X');
            parallax(wst,$('.section04 .text03'),'X');
            parallax(wst,$('.section05 h2'),'Y');
            parallax(wst,$('.section05 .icon-inner .i-box'),'Y');
            parallax(wst,$('.section05 .text-box > p'),'X');
            parallax(wst,$('.section06 h2, .section06 > p'),'X');
            parallax(wst,$('.section07 h2'),'X');
        });
    });
    
    // parallax - 방역서비스
    $('body.manpower').each(function(){
        $('main .text > p').addClass('animateY');
        $(window).scroll(function(){
            var wst = $(this);

            parallax(wst,$('.section01 p, .section01 h2'),'Y');
            parallax(wst,$('.section02 h2'),'X');
            parallax(wst,$('.section03 h2, .section03 p'),'X');
            parallax(wst,$('.section04 h2'),'Y');
            parallax(wst,$('.section04 .text01'),'X');
            parallax(wst,$('.section04 .text02'),'X');
            parallax(wst,$('.section04 .text03'),'X');
            parallax(wst,$('.section04 .text04'),'X');
            parallax(wst,$('.section05 h2, .section05 > p'),'Y');
            parallax(wst,$('.section05 .circle-inner .circle'),'Y');
            parallax(wst,$('.section06 h2'),'Y');
            parallax(wst,$('.section07 h2'),'Y');
        });
    });
    
    function parallax(wd,wq,way){
        if( wd.scrollTop() > $(wq).offset().top - $(this).height() ){
            $(wq).addClass('animate'+way);
        } else {
            $(wq).removeClass('animate'+way);
        }
    }
});