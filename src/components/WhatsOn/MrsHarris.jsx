import React from "react";
import pic from "./star1.png";

export default function MrsHarris() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1>Mrs. Harris Goes to Paris</h1>
        <h3>
          Description: A widowed cleaning lady in 1950s London falls madly
          in love with a couture Dior dress, and decides that she must have
          one of her own.
        </h3>
        <h3>Notable Actors: Lesley Manville, Isabelle Huppert,
          Lambert Wilson, Alba Baptista </h3>
        <h3>Director: Anthony Fabian</h3>
        <h3>
          Rating: <img src={pic} />
          7.1/10
        </h3>
      </div>
    </>
  );
}
