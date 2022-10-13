import React from 'react'
import ImageSliderScreensStd from './ScreensCarouselStd/screensImageSlider.jsx'
import ImageSliderScreensDir from './ScreensCarouselDir/screensImageSliderDir.jsx'
import screensImagesDir from './ScreensCarouselDir/screensImagesDir.js'
import screensImagesStd from './ScreensCarouselStd/screensImagesStd.js'

const ScreensPage = () => {
    return (
    <div>
        <h1 className="title">Our Screens</h1>
        <p className="centerbody">Each of our cinemas has two standard screens and one director's screen for that more luxury experience.</p>
        <ImageSliderScreensStd screensImagesStd={screensImagesStd}/>
        <br/>
        <br/>
        <br/>
        <ImageSliderScreensDir screensImagesDir={screensImagesDir}/>
        <br />

    </div>
    )
}

export default ScreensPage