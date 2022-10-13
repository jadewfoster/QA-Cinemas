import React from "react";
import pic from "./star1.png";

export default function BT() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1>Bullet Train</h1>
        <h3>
          Description: Five assassins aboard a swiftly-moving bullet train to
          find out that their missions have something in common.
        </h3>
        <h3>
          Notable Actors: Brad Pitt, Joey King, Aaron Taylor-Johnson, Brian
          Tyree Henry
        </h3>
        <h3>Director: David Leitch</h3>
        <h3>
          Rating: <img src={pic} />
          7.4/10
        </h3>
      </div>
    </>
  );
}
