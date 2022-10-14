import React from 'react'
import ImageSliderScreensStd from './ScreensCarouselStd/screensImageSlider.jsx'
import ImageSliderScreensDir from './ScreensCarouselDir/screensImageSliderDir.jsx'
import screensImagesDir from './ScreensCarouselDir/screensImagesDir.js'
import screensImagesStd from './ScreensCarouselStd/screensImagesStd.js'

const ScreensPage = () => {
    return (
    <div>
        <h1 className="title" align="center">Our Screens</h1>
        <h3 className="body" align="center">Each of our cinemas has two standard screens and one director's screen for that luxury experience.</h3>
        <br/>
        <br/>
        <ImageSliderScreensStd screensImagesStd={screensImagesStd}/>
        <br/>
        <br/>
        <br/>
        <ImageSliderScreensDir screensImagesDir={screensImagesDir}/>
        <br />
        <br/>

    </div>
    )
}

export default ScreensPage