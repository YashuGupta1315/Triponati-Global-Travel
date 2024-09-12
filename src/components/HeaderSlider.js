import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HeaderSlider.css';
const HeaderSlider = ({ slides, settings }) => {
 
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,  
            slidesToScroll: 1,
            dots: true,
            autoplaySpeed: 2500, 
          }
        }
      ]
  };

  return (
    <div className="header-slider">
      <Slider {...(settings || defaultSettings)}>
        {slides.map(slide => (
          <div key={slide.id}>
            <img src={slide.image} alt={slide.title} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderSlider;
