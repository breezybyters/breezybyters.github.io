import $ from 'jquery';
import 'slick-carousel';

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
                slidesToShow: 1,
            },
        },
    ],
});
