import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import "./carouselstyle.css"
import React from 'react'
  
const ImageSliderScreensStd = ({screensImagesStd}) => {
  
  const settings = {
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
          <h2 id="header" className="screenname">Our Standard Screens</h2>
          <p className="body">For every movie lover</p>
    </div>
      <div className="imgslider">
        <Slider {...settings}>
          {screensImagesStd.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
          </>
  )
}
export default ImageSliderScreensStd;