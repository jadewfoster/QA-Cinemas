import React from "react";
import pic from "./assets/star1.png"
import ListingsDrop from "./ListingsDrop";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TicketToParadise() {
    return (
      <>
        <div align="center" style={{ fontFamily: "bebas neue" }}>
          <h1 className="title">Ticket To Paradise</h1>
          <div className="centerbody">
          <br/>
          <h3>
            Description: A divorced couple teams up and travels to Bali to stop
            their daughter from making the same mistake they think they made 25
            years ago.
          </h3>
          <br/>
          <h3>Notable Actors: George Clooney, Sean Lynch,
            Julia Roberts, Arielle Carver-O'Neill</h3>
          <h3>Director: Ol Parker</h3>
          <br/>
          <h3>Rating: <img src={pic} />6.4/10</h3>
          <br/>
        </div>
        </div>

      <div id="dropped-box" className="container-fluid" align="center">
        <Table size="sm" borderless id="opening-times-table">
          <thead>
            <tr>
              <th id="head">DAY</th>
              <th id="head">TIME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>6pm, 9pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>1pm, 6pm, 8pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>5pm, 7pm, 9pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>5pm, 7pm, 9pm</td>
            </tr>
          </tbody>
        </Table>
      </div>
      </>
    );
  }