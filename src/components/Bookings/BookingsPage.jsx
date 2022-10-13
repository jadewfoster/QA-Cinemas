import React, { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

const BookingsPage = () => {

    const[AllScreenings, setAllScreenings] = useState([]);
    const[movie, setMovie] = useState("");
    const[cinema, setCinema] = useState("");
    const[visible, setVisible] = useState(false);

    //get all screenings from the collection
    const getAllScreenings = () => {        
        fetch("http://localhost:3001/cinema/screenings/getAll").then(res=>{
            res.json().then(data=>{
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
        //show the table of screenings on executing this function
        setVisible(true);
    }

    const pageManager = useNavigate();

    //redirecting to Payment page
    const redirect = (e) => {
        e.preventDefault();
        pageManager("/payment");
    }

    return(
        <>
        <h1 id = "header">Make a booking</h1>

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

        <button id="filterButton" onClick={screeningsFilter}>Get screenings by cinema and movie</button>

        </form>

        {visible && 
        <table id="screeningsTable">
            <tr>
                <th>Screen type</th>
                <th>Date</th>
                <th>Time</th>                  
            </tr>
            
            {AllScreenings.map( (screening, index) =>
            <tr key={index}><td>{screening.ScreenType}</td>
                 <td>{screening.Date}</td>
                 <td>{screening.Time}</td>
                 <td><button id="chooseScreening" onClick={redirect}>Select screening</button></td>
                 </tr>)}                 
            
        </table>
            }
        </>
        
    );    
}

export default BookingsPage;