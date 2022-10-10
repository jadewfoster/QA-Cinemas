import React, { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const BookingsPage = () => {

    const[AllScreenings, setAllScreenings] = useState([]);
    const[movie, setMovie] = useState("");
    const[cinema, setCinema] = useState("");

    //get all screenings from the collection
    const getAllScreenings = () => {        
        fetch("http://localhost:3001/cinema/screenings/getAll").then(res=>{
            res.json().then(data=>{
                console.log(data);
                    setAllScreenings(data).then(AllScreenings => AllScreenings)
            }).catch(err=>{
                console.log(err)
            })
        })
    }

    useEffect(() => {
        getAllScreenings()
    },[])

    const submitHandler = (evt) => {
        evt.preventDefault();
    }

    const screeningsFilter = (e) =>{
        e.preventDefault();
        const filteredScreenings = AllScreenings.filter( ({CinemaName, MovieName}) =>
        CinemaName===cinema && MovieName===movie);
        setAllScreenings(filteredScreenings);
        console.log(movie);
        console.log(cinema);
        console.log(AllScreenings);
    }

    const pageManager = useNavigate();

    //redirecting to Payment page
    const redirect = (e) => {
        e.preventDefault();
        pageManager("/home");
    }

    return(
        <>
        <h1>Make a booking</h1>

        {/* <button onClick={getAllScreenings}> Get all screenings </button>
        <ol>
            {AllScreenings.map( (screening, index) =>
        <li key={index}>{screening.CinemaName},{screening.ScreenNum},
        {screening.ScreenType},{screening.MovieName},
        {screening.Date},{screening.Time},{screening.SeatsLeft}
        </li>)}</ol> */}

        <form onSubmit={submitHandler}>

        <label htmlFor="cinema">Choose a cinema:</label>
        <select name="cinema" value={cinema} id="cinema" 
        onChange={e => setCinema(e.target.value)}>
        <option value="default">Please choose a cinema:</option>
        <option value="LondonCentral">London Central</option>
        <option value="LondonSouth">London South</option>
        <option value="LondonNorth">London North</option>
        </select><br/>

        <label htmlFor="movie">Choose a movie:</label>
        <select name="movie" id="movie" value = {movie}
        onChange={e => setMovie(e.target.value)}>
        <option value="default">Please choose a movie:</option>
        <option value="Don't Worry Darling">Don't Worry Darling</option>
        <option value="Mrs. Harris Goes to Paris">Mrs. Harris Goes to Paris</option>
        <option value="Smile">Smile</option>
        <option value="Ticket to Paradise">Ticket to Paradise</option>
        </select><br/>

        <button onClick={screeningsFilter}>Get screenings by cinema and movie</button>

        </form>

        <ol>
            {AllScreenings.map( (screening, index) =>
        <li key={index}>{screening.CinemaName},{screening.ScreenNum},
        {screening.ScreenType},{screening.MovieName},
        {screening.Date},{screening.Time},{screening.SeatsLeft}
        <button onClick={redirect}>Select screening</button>
        </li>)}</ol>
        </>
        
    );    
}

export default BookingsPage;