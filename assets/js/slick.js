import $ from 'jquery';
import 'slick-carousel';

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});