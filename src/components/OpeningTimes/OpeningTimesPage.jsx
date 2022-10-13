import React from 'react';
import {Container, Table} from 'reactstrap';

const OpeningTimes = () => {
  document.title = "Opening Times"
  
  return (
    <div id="dropped-box" >
      <Container id="open">
        <h1 className="title">OPENING TIMES</h1>
        <br />

        
        <div className="centerbody">
  <h3>Here are the opening times for our cinemas:</h3>
</div>

      </Container>

      
      <div id="dropped-box" className="centerbody">
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
                    <td>11:00 AM - 11:00 PM</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>11:00 AM - 11:00 PM</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>11:00 AM - 11:00 PM</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>11:00 AM - 11:00 PM</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>11:00 AM - 02:00 AM</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>09:00 AM - 02:00 AM</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>12:00 PM - 08:00 PM</td>
                </tr>
                </tbody>
            </Table>
            </div>
</div>

  );
}
export default OpeningTimes;

