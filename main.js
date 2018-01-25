$(document).ready(function(){
  $('.test-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    centerPadding: '20px',
    adaptiveHeight: true,
    adaptiveWidth: true
  });
});
