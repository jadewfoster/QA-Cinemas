import React from "react";

export default function LondonNorth() {

    return(
        <div>
        <h3 className="title">Directions to our London North cinema:</h3>
        <div align="center">
        <iframe width="600" height="500" id="gmap_canvas" title="londonnorth"
        src="https://maps.google.com/maps?q=1%20Wakley%20St,%20London%20EC1V%207LT&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        <h4 className="subtitle">Address:</h4>
        <p>1 Wakley St, London EC1V 7LT</p>
        <h4 className="subtitle">Public transport:</h4>
        <h5 className="smallsubtitle">By Tube</h5>
        <p>Our part of London is well-served by the London Underground.
            You can use the Northern Line (Bank branch), as well as the
            combination of the Circle/District/Metropolitan/Hammersmith 
            & City lines, and the Central Line.
            Our nearest tube stations are Angel, Farringdon and Moorgate.</p>
        <h5 className="smallsubtitle">By Train</h5>
        <p>Our nearest train stations are Farringdon, Moorgate and
            King's Cross St Pancras.</p>
        <h5 className="smallsubtitle">By Bus</h5>
        <p>There are numerous bus routes which stop in City Road,
            Islington High Street and Pentonville Road, all a few minutes walk from 
            London North Cinema.
            Some of the nearest bus routes include 4, 56, 153, 43, 205, 214,
            394, 19, 38, 341.</p>
        <h4 className="subtitle">Parking information:</h4>
        <p>The nearest National Car Parks are at Finsbury Square, Tabernacle Street, 
            Clere Street and Paul Street. you can also book a
            parking space <a href="https://www.yourparkingspace.co.uk/">here</a>.</p>
            <br/>
        </div>
    )
}