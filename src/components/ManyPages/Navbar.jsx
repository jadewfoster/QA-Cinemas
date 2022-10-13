import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "../ManyPages/assets/Logo.jpeg";
import List from "../../components/ManyPages/DropDown";
import Search from "../Searchbar/search";

export default function Navbar() {
  const filteredPosts = filterPosts(posts, query);
  const [searchQuery, setSearchQuery] = useState(query || "");
  return (
    <nav className="nav">
      <div className="logo">
        <Link to={"/home"}>
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

        <li>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ul style={{ fontSize: "small" }}>
            {filteredPosts.map((post) => (
              <li key={post.key}>{post.name}</li>
            ))}
          </ul>
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

const posts = [
  { id: "1", name: "Central London" },
  { id: "2", name: "South London" },
  { id: "3", name: "North London" },
];

const { search } = window.location;
const query = new URLSearchParams(search).get("s");
const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};
