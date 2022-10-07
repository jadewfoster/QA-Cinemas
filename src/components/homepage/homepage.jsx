import images from "./CarouselElements/images";
import ImageSlider from "./CarouselElements/imageslider";

const Homepage = () => {
    document.title = "QA Cinemas"
    return (
        <div id="homepage-div" align="center">
            <ImageSlider images={images}/>
            <br></br>
            <div id="homepage-info">
                    <p>
                        To browse our newest movies, check out the "What's On" page to view our showtimes and make a booking.
                    </p>
            </div>
        </div>
    );
}

export default Homepage;