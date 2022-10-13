import React from "react";
import pic from "./dontworry.jpeg";
import pic2 from "./bullettrain.jpeg";
import pic3 from "./avatar.jpeg";
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
          <a href="./DWD.jsx">
            <img src={pic} className="img" alt="dwd" />
          </a>
        </div>
        <div className="moviebox">
          <a href="./BT.jsx">
            <img src={pic2} className="img" alt="bt" />
          </a>
        </div>
        <div className="moviebox">
          <a href="./Avatar.jsx">
            <img src={pic3} className="img" alt="avatar" />
          </a>
        </div>
      </div>
    </>
  );
};
export default WhatsOnPage;
