import {React, useState} from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "../ManyPages/assets/Logo.jpeg";
import List from "../../components/ManyPages/DropDown";
import Search from "../Searchbar/search";



export default function Navbar() {

  
  return (
    <nav className="nav">
      <div className="logo">
        <Link to={"/home"}>
          {" "}
          <img className="logo"
            src={Logo}
            alt="logo"
          />
        </Link>
      </div>

      <ul>
        <li className="hover">
          <CustomLink to="/home">Home</CustomLink>
        </li>
        <List title="Dropdowns" />

        <li>
          <CustomLink to="/bookings">My Bookings</CustomLink>
        </li>
        <li>
          <CustomLink to="/discussion">Discussion</CustomLink>
        </li>
        
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


/*const posts = [
  { id: '1', name: 'Central London' },
  { id: '2', name: 'South London' },
  { id: '3', name: 'North London' },
];*/


/*const filteredPosts = filterPosts(posts, query);
  const query = new URLSearchParams(search).get('s');
  const { search } = window.location;
  const [searchQuery, setSearchQuery] = useState(query || '');
const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  };

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });**/

