import React from "react";
import "./search.css";

const Search = ({ searchQuery, setSearchQuery }) => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden"></span>
    </label>
    <input
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="For a Film, Venue or Event"
      name="s"
    />
    <button type="submit" className="submit">
      Search
    </button>
  </form>
);
export default Search;
