import React from "react";
import pic from "./assets/star1.png";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Lyle() {
  return (
    <>
      <div align="center" style={{ fontFamily: "bebas neue" }}>
        <h1 className="title">LYLE, LYLE, CROCODILE</h1>
        <div className="centerbody">
        <br/>
        <h3>
          Description: Based on the best-selling book series by Bernard Waber,
          Lyle, Lyle, Crocodile is a live-action / CGI musical comedy that
          brings this beloved character to a new, global audience. When the
          Primm family moves to New York City, their young son Josh struggles to
          adapt to his new school and new friends. All of that changes when he
          discovers Lyle - a singing crocodile who loves baths, caviar, and
          great music-living in the attic of his new home. The two become fast
          friends, but when Lyle"s existence is threatened by evil neighbour Mr.
          Grumps, the Primm"s must band together to show the world that family
          can come from the most unexpected places and there"s nothing wrong
          with a big singing crocodile with an even bigger personality.
        </h3>
        <br/>
        <h3>
          Notable Actors: Javier Bardem, Scoot McNairy, Brett Gelman, Constance Wu, Winslow Fegley, Shawn Mendes, Lyric Hurd
        </h3>
        <br/>
        <h3>Director: Josh Gordon, Will Speck</h3>
        <br/>
        <h3>
          Rating: <img src={pic} alt="star"  />
          6.4/10
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
