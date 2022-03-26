import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className='grid'>
            <div className='slider'>
                <Slider {...settings}>
                    <div className='slider_one'>
                        <img src="https://mrsimple.vn/images/slider/desktop1628852808.jpg" alt="IMGERR"></img>
                    </div>
                    <div className='slider_two'>
                        <img src="https://mrsimple.vn/images/slider/desktop1628225735.jpg" alt="IMGERR"></img>
                    </div>
                </Slider>
            </div>

        </div>
    );
};

export default ImageSlider;