$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');        
        $('body').toggleClass('lock');
    });
});



$(function abc(){
    $('.client__content__slider').slick({
        prevArrow: '.client__content__arrow__prev',
        nextArrow: '.client__content__arrow__next',
        slidesToShow: 1,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            }
        ],
        mobileFirst:true,
    });
});





