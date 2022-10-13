import React from "react";
import pic from "./star1.png"

export default function DWD() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1>Don't Worry Darling</h1>
        <h3>
          Description: A 1950s housewife living with her husband in a utopian
          experimental community begins to worry that his glamorous company
          could be hiding disturbing secrets.
        </h3>
        <h3>Notable Actors: Florence Pugh, Harry Styles, Chris Pine</h3>
        <h3>Director: Olivia Wilde</h3>
        <h3>Rating: <img src={pic} />6.10/10</h3>
      </div>
    </>
  );
}
