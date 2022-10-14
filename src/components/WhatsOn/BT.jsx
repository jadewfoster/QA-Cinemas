import React from "react";
import pic from "./assets/star1.png";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BT() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1 className="title">Bullet Train</h1>
        <br/>
        <div className="centerbody">
        <h3>
          Description: Five assassins aboard a swiftly-moving bullet train to
          find out that their missions have something in common.
        </h3>
        <br/>
        <h3>
          Notable Actors: Brad Pitt, Joey King, Aaron Taylor-Johnson, Brian
          Tyree Henry
        </h3>
        <br/>
        <h3>Director: David Leitch</h3>
        <br/>
        <h3>
          Rating: <img src={pic} alt="star"  />
          7.4/10
        </h3>
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
              <td>5pm, 9pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>6pm, 8pm</td>
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
