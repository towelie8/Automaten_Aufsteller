var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWith = $('.carousel-item').width();

$('.carousel-control-next').on('click', function(){
    scrollPosition = scrollPosition + cardWidth;
})