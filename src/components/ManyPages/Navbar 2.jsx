import React from "react";
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

        <Search />
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
