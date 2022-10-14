import React from "react";
import pic from "./assets/star1.png";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Smile() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1 className="title">Smile</h1>
        <div className="centerbody">
        
        <br/>
        <h3>
          Description: After witnessing a bizarre, traumatic incident involving
          a patient, Dr. Rose Cotter starts experiencing frightening occurrences
          that she can't explain. Rose must confront her troubling past in order
          to survive and escape her horrifying new reality.
        </h3>
        <br/>
        <h3>
          Notable Actors: Sosie Bacon, Jessie T. Usher, 
          Kylie Gallner, Robin Weigert
        </h3>
        <br/>
        <h3>Director: Parker Finn</h3>
        <br/>
        <h3>
          Rating: <img src={pic} alt="star"  />
          6.9/10
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
              <td>9pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>6pm, 8pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>7pm, 9pm</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
