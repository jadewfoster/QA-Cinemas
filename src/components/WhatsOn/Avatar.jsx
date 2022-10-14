import React from "react";
import pic from "./star1.png";
import ListingsDrop from "./ListingsDrop";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Avatar() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1 className="title">Avatar: the Way of Water</h1>
        <div className="centerbody">
        <br/>
        <h3>
          Description: Jake Sully lives with his newfound family formed on the
          planet of Pandora. Once a familiar threat returns to finish what was
          previously started, Jake must work with Neytiri and the army of the
          Na'vi race to protect their planet.
        </h3>
        <br/>
        <h3>
          Notable Actors: Kate Winslet, Zoe Saldana, Sigourney Weaver, Sam
          Worthington{" "}
        </h3>
        <br/>
        <h3>Director: James Cameron</h3>
        <br/>
        <h3>
          Rating: <img src={pic} />
          7.8/10
        </h3>
        <br/>
        </div>
      </div>
      <div className="dropdown" align="center">
        <ListingsDrop />
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
              <td>12pm, 4pm, 9pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>7pm, 9pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>3pm, 7pm, 9pm</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>5pm</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
