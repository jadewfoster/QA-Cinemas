import React from "react";

export default function LondonSouth() {

    return(
        <div>
            <h3>Directions to our London South cinema:</h3>

            <iframe width="600" height="500" id="gmap_canvas"
            src="https://maps.google.com/maps?q=20%20Peckham%20High%20St,%20London%20SE15%205DT&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

        <h4>Address:</h4>
        <p>20 Peckham High St, London SE15 5DT</p>
        <h4>Public transport:</h4>
        <h5>By Overground</h5>
        <p>Our London South cinema is located within just 5 minutes walk from 
            Queens Road Peckham and Peckham Rye overground stations, which are 
            located on the Highbury&Islington - Clapham Junction line.
        </p>
        <h5>By Train</h5>
        <p>Queens Road Peckham and Peckham Rye stations are both served by regular
            trains to Central London - London Bridge, Blackfriars and Victoria stations; as well as 
            Thameslink and Southeastern services across South London.
        </p>
        <h5>By Bus</h5>
        <p>There are many bus routes serving our London South location:
            12 Oxford St - Dulwich via Elephant & Castle, 37 Putney - Peckham via Clapham,
            36 Harrow - Peckham via Victoria/Camberwell/Oval,
            345 South Kensington - Peckham via Battersea/Brixton/Camberwell,
            63 Kings Cross - Honor Oak via Old Kent Road,
            78 Shorditch - Nunhead via Tower Bridge.</p>
        <h4>Parking information:</h4>
        <p>The car park at rear of the cinema is FREE after 6:30pm,
            ALL day Sat/Sun and Bank holidays.
            80p per hour at all other times.</p>
    </div>
    )
}