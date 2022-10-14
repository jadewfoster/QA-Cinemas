import React from "react";
import ListingsDrop from "./ListingsDrop";
import pic from "./star1.png"
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DWD() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1 className="title">Don't Worry Darling</h1>
        <div className="centerbody">
          <br/>
        <h3>
          Description: A 1950s housewife living with her husband in a utopian
          experimental community begins to worry that his glamorous company
          could be hiding disturbing secrets.
        </h3>
        <br/>
        <h3>Notable Actors: Florence Pugh, Harry Styles, Chris Pine</h3>
        <br/>
        <h3>Director: Olivia Wilde</h3>
        <br/>
        <h3>Rating: <img src={pic} />6.10/10</h3>
        <br/> 
      </div>
      </div>
      <div className="dropdown" align="center">
        <ListingsDrop/>
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
              <td>Tuesday</td>
              <td>12pm, 4pm, 9pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>7pm, 9pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>3pm, 7pm, 9pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>5pm</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
