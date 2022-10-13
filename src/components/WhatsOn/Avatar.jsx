import React from "react";
import pic from "./star1.png";

export default function Avatar() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1>Avatar: the way of water</h1>
        <h3>
          Description: Jake Sully lives with his newfound family formed on the
          planet of Pandora. Once a familiar threat returns to finish what was
          previously started, Jake must work with Neytiri and the army of the
          Na'vi race to protect their planet.
        </h3>
        <h3>Notable Actors: Kate Winslet, Zoe Saldana, Sigourney Weaver, Sam Worthington </h3>
        <h3>Director: James Cameron</h3>
        <h3>
          Rating: <img src={pic} />
          7.8/10
        </h3>
      </div>
    </>
  );
}
