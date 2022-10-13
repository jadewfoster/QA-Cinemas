import React from "react";
import { useNavigate } from 'react-router-dom'
import "./search.css";

const Search = ({ searchQuery, setSearchQuery }) => {
  
  const submitHandler = (evt) => {
    evt.preventDefault();
}

  return(
    <div>
  <form onSubmit={submitHandler} action="/" method="get" className="searchbar">
    <label htmlFor="header-search">
      <span className="visually-hidden"></span>
    </label>
    <input
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search our website"
      name="s"
    />
  </form>
  </div>
)
  }

export default Search;
