import React from "react";
import pic from "./star1.png";

export default function Smile() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1 className="title">Smile</h1>
        <h3>
          Description: After witnessing a bizarre, traumatic incident involving
          a patient, Dr. Rose Cotter starts experiencing frightening occurrences
          that she can't explain. Rose must confront her troubling past in order
          to survive and escape her horrifying new reality.
        </h3>
        <h3>
          Notable Actors: Sosie Bacon, Jessie T. Usher, 
          Kylie Gallner, Robin Weigert
        </h3>
        <h3>Director: Parker Finn</h3>
        <h3>
          Rating: <img src={pic} />
          6.9/10
        </h3>
      </div>
    </>
  );
}
