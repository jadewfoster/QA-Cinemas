import React from "react";
import pic from "./dontworry.jpeg";
import pic2 from "./MrsHarris.jpg";
import pic3 from "./Smile.jpg";
import pic4 from "./TicketToParadise.jpg"
import "./whatson.css";

const WhatsOnPage = () => {
  return (
    <>
      <div className="header" align="center">
        <h1>What's On</h1>
        <h3>Here is a selection of our current movies</h3>
      </div>
      <div display="column" align="center" width="50px" height="50px">
        <div className="moviebox">
          <a href="/dworrydarling">
            <img src={pic} className="img" alt="dwd" />
          </a>
        </div>
        <div className="moviebox">
          <a href="/mrsharris">
            <img src={pic2} className="img" alt="mrsharris" width="500" height="600"/>
          </a>
        </div>
        <div className="moviebox">
          <a href="/smile">
            <img src={pic3} className="img" alt="smile" width="500" height="600"/>
          </a>
        </div>
        <div className="moviebox">
          <a href="/tickettoparadise">
            <img src={pic4} className="img" alt="tickettoparadise" width="500" height="600"/>
          </a>
        </div>
      </div>
    </>
  );
};
export default WhatsOnPage;
