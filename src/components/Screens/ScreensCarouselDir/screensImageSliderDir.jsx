import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import "./carouselstyle.css"
import React from 'react'
  
const ImageSliderScreensDir = ({screensImagesDir}) => {
  
  const settings= {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
   
  };

  return (
    <>
    <div className="tag">
          <h2 id="header" classname="subtitle">Our Director Screens</h2>
          <p>Our director screens provide that little bit extra for an unbelievable night out</p>
    </div>
      <div className="imgslider">
        <Slider {...settings}>
          {screensImagesDir.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
          </>
  )
}
export default ImageSliderScreensDir;