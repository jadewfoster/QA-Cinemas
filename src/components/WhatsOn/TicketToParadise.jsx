import React from "react";
import pic from "./star1.png"

export default function TicketToParadise() {
    return (
      <>
        <div align="center" style={{ fontFamily: "bebas neue" }}>
          <h1 className="title">Ticket To Paradise</h1>
          <h3>
            Description: A divorced couple teams up and travels to Bali to stop
            their daughter from making the same mistake they think they made 25
            years ago.
          </h3>
          <h3>Notable Actors: George Clooney, Sean Lynch,
            Julia Roberts, Arielle Carver-O'Neill</h3>
          <h3>Director: Ol Parker</h3>
          <h3>Rating: <img src={pic} />6.4/10</h3>
        </div>
      </>
    );
  }