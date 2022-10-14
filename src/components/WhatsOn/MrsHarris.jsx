import React from "react";
import pic from "./assets/star1.png";
import ListingsDrop from "./ListingsDrop";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MrsHarris() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1 className="title">Mrs. Harris Goes to Paris</h1>
        <div className="centerbody">
        <br/>
        <h3>
          Description: A widowed cleaning lady in 1950s London falls madly
          in love with a couture Dior dress, and decides that she must have
          one of her own.
        </h3>
        <br/>
        <h3>Notable Actors: Lesley Manville, Isabelle Huppert,
          Lambert Wilson, Alba Baptista </h3>
          <br/>
        <h3>Director: Anthony Fabian</h3>
        <br/>
        <h3>
          Rating: <img src={pic} />
          7.1/10
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
              <td>12pm, 3pm, 6pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>2pm, 4pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>11am, 3pm</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
