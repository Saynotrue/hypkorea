$(document).ready(function(){
    
    $('.section02 .left-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.section02 .right-inner'
    });
    $('.section02 .right-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.section02 .left-inner',
        dots: false,
        arrows:true,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        pauseOnFocus:false
    });
    
    $('.section03 .contents').slick({
        arrows:true,
        dots:true,
        customPaging: function(slider, i) { 
            console.log($(slider.$slides[i]).html());
            return '<button class="tab">' + $(slider.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
        },
        autoplay: true,
        autoplaySpeed:5000,
        speed:1000,
        pauseOnHover:false,
        pauseOnFocus:false
    });
    
    $('.section04 .t-button button').click(function(){
        var idx = $(this).index();
        $('.section04 .t-button button').removeClass('on');
        $(this).addClass('on');
        $('.section04 .t-map .m-box').hide();
        $('.section04 .t-map .m-box').eq(idx).fadeIn();
    });
    
    $('.section05 .tab-menu .title').click(function(){
        var idx = $(this).index();
        $('.section05 .tab-menu .title').removeClass('on');
        $(this).addClass('on');
        $('.section05 .form-inner .f-box').hide();
        $('.section05 .form-inner .f-box').eq(idx).fadeIn();
    });
    
    $('main .main-text > p').addClass('animateY');
    $(window).scroll(function(){
        var scr = $(window).scrollTop();
        var fh = $('#fixedLeft').offset().top;
        var rfh = $('.business-inner .right .end').offset().top;
        var wst = $(this);
        
        if(scr > fh-100 ){
            $('.business-inner .left').addClass('fixed').removeClass('bottom');
        } else {
            $('.business-inner .left').removeClass('fixed').removeClass('bottom');
        }
        if (scr > rfh-400){
            $('.business-inner .left').removeClass('fixed').addClass('bottom');
        }
        
        parallax(wst,$('.business-inner .l-box'),'Y');
        parallax(wst,$('.business-inner .r-box'),'Y');
        parallax(wst,$('.section01 h2'),'Y');
        parallax(wst,$('.section02 h2'),'Y');
        parallax(wst,$('.section03 h2'),'Y');
        parallax(wst,$('.section04 h2'),'Y');
        parallax(wst,$('.section05 h2'),'Y');
        parallax(wst,$('.section02 > p'),'Y');
        parallax(wst,$('.section03 > p'),'Y');
    });
    function parallax(wd,wq,way){
        if( wd.scrollTop() > $(wq).offset().top - $(this).height() ){
            $(wq).addClass('animate'+way);
        } else {
            $(wq).removeClass('animate'+way);
        }
    }
    
});




