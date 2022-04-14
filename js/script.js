$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');        
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.work__list ul li:nth-child(n)').click(function(event) {
        $('.work__list ul li,.work__list__item p').toggleClass('active');        
    });
});

const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
  
}