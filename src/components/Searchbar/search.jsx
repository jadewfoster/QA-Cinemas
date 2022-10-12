import React from "react";
import "./search.css";

const Search = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search for a Movie or Venue </span>
    </label>
    <input
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search"
      name="s"
    />
    <button type="submit" className="submit">
      Search
    </button>
  </form>
);
export default Search;
