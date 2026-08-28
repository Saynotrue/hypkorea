$(document).ready(function(){
    
    $('.service01').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.service02'
    });
    $('.service02').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.service01',
        dots: false,
        arrows:true,
        centerMode: false,
        focusOnSelect: true,
        initialSlide: 1
    });
    
});