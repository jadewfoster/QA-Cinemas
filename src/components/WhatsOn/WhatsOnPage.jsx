import React from "react";
import pic from "./assets/dontworry.jpeg";
import pic2 from "./assets/bullettrain.jpeg";
import pic3 from "./assets/Avatar.jpg";
import pic4 from "./assets/Lyle.jpeg"
import pic5 from "./assets/Smile.jpg"
import pic6 from "./assets/TicketToParadise.jpg"
import pic7 from "./assets/MrsHarris.jpg"
import "./whatson.css";

const WhatsOnPage = () => {
  return (
    <>
      <div className="header" align="center">
        <h1 className="title">What's On</h1>
        <h3 className="body">Here is a selection of our current movies</h3>
        <h3 className="body">Click on the images to find out more</h3>
      </div>
      <div display="column" align="center" width="50px" height="50px">
        <div className="moviebox">
          <a href="/dworrydarling">
            <img src={pic} className="img" alt="dwd" />
          </a>
        </div>
        <div className="moviebox">
          <a href="./bullettrain">
            <img src={pic2} className="img" alt="bt" />
          </a>
        </div>
        <div className="moviebox">
          <a href="./avatar">
            <img src={pic3} className="img" alt="avatar" height="20%" width="20%"/>
          </a>
        </div>
        <div className="moviebox">
          <a href="./lyle">
            <img src={pic4} className="img" alt="lyle" />
          </a>
        </div>
        <div className="moviebox">
          <a href="./smile">
            <img src={pic5} className="img" alt="smile" />
          </a>
        </div>
        <div className="moviebox">
          <a href="./tickettoparadise">
            <img src={pic6} className="img" alt="tickettoparadise" />
          </a>
        </div>
        <div className="moviebox">
          <a href="./mrsharris">
            <img src={pic7} className="img" alt="mrsharris" />
          </a>
        </div>
      </div>
    </>
  );
};
export default WhatsOnPage;
