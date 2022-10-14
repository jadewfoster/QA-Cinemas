import React from "react";


export default function LondonCentral() {
    
    return(
        <div>
            <h3 className="title">Directions to our London Central Cinema:</h3>
            <div align="center">
            <iframe width="600" height="500" id="gmap_canvas" 
            src="https://maps.google.com/maps?q=35%20Dean%20St,%20London%20W1D%204PY&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
        <h4 className="subtitle">Address:</h4>
        <p>35 Dean St, London W1D 4PY</p>
        <h4 className="subtitle">Public transport:</h4>
        <h5 className="smallsubtitle">By Tube</h5>
        <p>If you are travelling by tube, the closest London Underground stations are
            Oxford Circus, Tottenham Court Road and Piccadilly Circus, all of which are
            just a few minutes walk from London Central cinema and have excellent transport
            links throughout London.</p>
        <h5 className="smallsubtitle">By Train</h5>
        <p>The nearest mainline station is Charing Cross. If you are using Elizabeth Line,
            the closest station is Tottenham Court Road. </p>
        <h5 className="smallsubtitle">By Bus</h5>
        <p>There are numerous bus routes which stop in Oxford Street and Regent Street, 
            Shaftesbury Avenue and Charing Cross Road, all a few minutes walk from 
            London Central Cinema.
            The bus routes in Regent Street are 3, 6, 12, 13, 15, 23, 88, 94, 139, 159 and 453.
            Bus routes for Oxford Street are 7, 8, 10, 25, 55, 73, 98, 176 and 390.</p>
        <h4 className="subtitle">Parking information:</h4>
        <p>The nearest car parks are on Brewer Street and Poland Street, you can also book a
            parking space <a href="https://www.yourparkingspace.co.uk/">here</a>.</p>
            <br/>
        </div>
    )
}