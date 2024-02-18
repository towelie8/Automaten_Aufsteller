var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWith = $('.carousel-item').width();

$('.carousel-control-next').on('click', function(){
    console.log('next');
    scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({scrollLeft: scrollPosition},
        600)
});