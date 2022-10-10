import React from 'react';
import { useState } from 'react';

const BookingsPage = () => {

    const[ScreeningDateTimes, setScreeningDateTimes] = useState([]);

    const getScreeningDateTimes = () => {
        
        fetch("http://localhost:3001/cinema/screenings/getAll").then(res=>{
            res.json().then(data=>{
                    setScreeningDateTimes(data)
                    console.log(data);
            }).catch(err=>{
                console.log(err)
            })
        })
    } 

    return(
        <>
        <h1>Make a booking</h1>

        <button onClick={getScreeningDateTimes}> Get screenings </button>
        <ol>
            {ScreeningDateTimes.map( (screening, index) =>
        <li key={index}>{screening.CinemaName},{screening.ScreenNum},
        {screening.ScreenType},{screening.MovieName},
        {screening.Date},{screening.Time},{screening.SeatsLeft}
        </li>)}</ol>
        </>
        
    );    
}

export default BookingsPage;