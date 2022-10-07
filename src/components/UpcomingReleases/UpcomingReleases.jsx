import React from 'react';
import {Container, Table} from 'reactstrap';

const UpcomingReleases = () => {
    document.title = "New Releases"

    return (
        <div id="dropped-box" className="container-fluid" align="left">
        <h1>Upcoming Releases</h1>
        <h2>Coming To A Cinema Near You</h2>
        
        <p style="margin-bottom:3cm;">
        <h3 align="left">Black Panther: Wakanda Forever</h3>
        <br></br>
        <img src="https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg" height="400px" width = "300px" align = "left"></img>
        <br></br>
        Description:
        <br></br>
        Actors:
        <br></br>
        Director:
        <br></br>
        Rating:
        <br></br>
        </p>

        <h3 align="left"> Avatar 2: The Way of the Water</h3>
        <br></br>
        <img src="https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg" height="400px" width = "300px" align = "left"></img>
        <br></br>
        Description:
        <br></br>
        Actors:
        <br></br>
        Director:
        <br></br>
        Rating:
        <br></br>
        
        
        
        </div>
        );
    }
    
    export default UpcomingReleases;