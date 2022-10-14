import React from "react";
import pic from "./dontworry.jpeg";
import pic2 from "./bullettrain.jpeg";
import pic3 from "./Avatar.jpg";
import pic4 from "./Lyle.jpeg"
import "./whatson.css";

const WhatsOnPage = () => {
  return (
    <>
      <div className="header" align="center">
        <h1 className="title">What's On</h1>
        <h3 className="body">Here is a selection of our current movies</h3>
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
      </div>
    </>
  );
};
export default WhatsOnPage;
