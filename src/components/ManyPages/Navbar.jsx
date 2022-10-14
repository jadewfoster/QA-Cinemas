import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "../ManyPages/assets/Logo.jpeg";
import List from "../../components/ManyPages/DropDown";
import Search from "./Searchbar/search";

export default function Navbar() {

  const[visible, setVisible] = useState(false);

  const[posts, setPosts] = useState([
    { id: "1", name: "About us", link: "http://localhost:3000/about-us"},
    { id: "2", name: "Contact", link: "http://localhost:3000/contact-us" },
    { id: "3", name: "Movie ratings", link: "http://localhost:3000/classifications"},
    {id: "4", name: "Places to go - restaurants", link: "http://localhost:3000/places"},
    {id: "5", name: "Directions - getting there", link: "http://localhost:3000/getting-there"},
    {id: "6", name: "Opening times", link: "http://localhost:3000/openingtimes"},
    {id: "7", name: "Screens", link: "http://localhost:3000/screen"},
    {id: "8", name: "Movie listings", link: "http://localhost:3000/listings"},
    {id: "9", name: "Make a booking", link: "http://localhost:3000/book-your-ticket"},
    {id: "10", name: "Upcoming - future movie listings", link: "http://localhost:3000/upcoming-releases"},
    {id: "11", name: "Discussions", link: "http://localhost:3000/discussion"},
    {id: "12", name: "Dont worry darling", link: "http://localhost:3000/dworrydarling"},
    {id: "13", name: "Don't worry darling", link: "http://localhost:3000/dworrydarling"},
    {id: "14", name: "Smile", link: "http://localhost:3000/smile"},
    {id: "15", name: "Mrs Harris Goes To Paris", link: "http://localhost:3000/mrsharris"},
    {id: "16", name: "Ticket To Paradise", link: "http://localhost:3000/tickettoparadise"},
    {id: "17", name: "London Central", link: "http://localhost:3000/londoncentral"},
    {id: "18", name: "London North", link: "http://localhost:3000/londonnorth"},
    {id: "19", name: "London South", link: "http://localhost:3000/londonsouth"},
  ]);

  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }  
    return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  }; 

  const showResults = (e) => {
    e.preventDefault();
    setVisible(true);
  }
  
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");

  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <nav className="nav">
      <div className="logo">
        <Link to={"/"}>
          {" "}
          <img className="logo" src={Logo} alt="logo" />
        </Link>
      </div>

      <ul>
        <li className="hover">
          <CustomLink to="/">Home</CustomLink>
        </li>
        <List title="Dropdowns" />

        <li>
          <CustomLink to="/upcoming-releases">Upcoming Releases</CustomLink>
        </li>

        <li>
          <CustomLink to="/discussion">Discussion</CustomLink>
        </li>

    <ul className="nav">
        <li>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          {visible &&
          <ul>
            {filteredPosts.map((post) => (
              <a href={post.link}><li key={post.key}>{post.name}</li></a>
            ))}
          </ul>
                }
                <button onClick = {showResults} type="submit" className="submit">
      Search
    </button>
        </li>
        </ul>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}


