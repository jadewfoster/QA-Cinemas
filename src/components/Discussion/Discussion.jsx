import React, { useState, useEffect } from 'react'
const Filter = require('bad-words'),
    filter = new Filter();

const Discussion = () => {
    document.title = "Discussion"
    
    const[AllDiscussions, SetAllDiscussions] = useState([]);
    const[movie, setMovie] = useState("");
    const[comment, setComment] = useState("");
    const[rating, setRating] = useState(0);
    const[name, setName] = useState("");
    const[visible, setVisible] = useState(false);

    const getAllDiscussions = () => {        
        fetch("http://localhost:3001/cinema/discussions/getAll").then(res=>{
            res.json().then(data=>{
                console.log(data);
                SetAllDiscussions(data).then(AllDiscussions => AllDiscussions)
            }).catch(err=>{
                console.log(err)
            })
        })
    }
    
    const postDiscussion = () =>{
        const newDiscussion = {"MovieName":movie, "Name":name, "Comment":comment, "Rating":rating}
        
        //checking for profanity before posting n
        if (filter.isProfane(comment) || filter.isProfane(name)) {
            return alert("Profanity is not allowed!");
       } else{
        fetch("http://localhost:3001/cinema/discussions/create", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newDiscussion)
        }).then(console.log(newDiscussion)).then(res=>{
            res.json().then(newDiscussion).then(alert("Comment added successfully!")).catch(err=>{
            console.log(err)
        })
    }
    )}
}

    useEffect(() => {
        getAllDiscussions();
    },[])

    const submitHandler = (evt) => {
        evt.preventDefault();
    }

    const discussionsFilter = (e) =>{
        e.preventDefault();
        const filteredDiscussions = AllDiscussions.filter( ({MovieName}) =>
        MovieName===movie);
        SetAllDiscussions(filteredDiscussions);
        //show the table of screenings on executing this function
        setVisible(true);
    }

    return(
        <>
        <h1 id="header" className="title">Discussion</h1>

        <form onSubmit={submitHandler}> 
        <label htmlFor="movie" className="bodybold">Choose a movie:</label>
        <select name="movie" id="movie" value = {movie}
        onChange={e => setMovie(e.target.value)}>
        <option value="default" >Please choose a movie:</option>
        <option value="Don't Worry Darling">Don't Worry Darling</option>
        <option value="Mrs. Harris Goes to Paris">Mrs. Harris Goes to Paris</option>
        <option value="Smile">Smile</option>
        <option value="Ticket to Paradise">Ticket to Paradise</option>
        </select><br/>

        <button id="getDiscussionsButton" onClick={discussionsFilter} className="dscnBtn">Get latest discussions</button>
        </form>
        <br/>
        <br/>
        <br/>
        <form>
        <label className="bodybold"> Name:</label>
                <input id="name" name="name" 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)}/>
                        <br/>
        <label className="bodybold">Comment:</label>
                <textarea id="comment" name="comment" 
                type="text" 
                value={comment} 
                onChange={e => setComment(e.target.value)}/>
                        <br/>
        <label htmlFor="rating" className="bodybold">Choose a rating:</label>
        <select name="rating" id="rating" value = {rating}
        onChange={e => setRating(e.target.value)}>
        <option value="default">Please choose a rating:</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
        <button id="postDiscussionButton" onClick={postDiscussion} className="dscnSubmitBtn">Post your comment</button>
        </form>
        <br/>
        <br/>
        {visible && 
        <table id = "discussionsTable">
            <tr>
                <th>Name</th>
                <th>Comment</th>
                <th>Rating</th>                  
            </tr>
            <br/>
        <br/>
            {AllDiscussions.map( (discussion, index) =>
            <tr key={index}><td>{discussion.Name}</td>
                 <td>{discussion.Comment}</td>
                 <td>{discussion.Rating}</td>
                 </tr>)}           
            </table>
            }
            <br/>
            <br/>

            </>
    );
}

export default Discussion