import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dropdown.css";

export default function List() {
  return (
    <>
      <DropdownButton title="info" autoClose="outside">
        <Dropdown.Item>About Us</Dropdown.Item>
        <Dropdown.Item>Contact Us</Dropdown.Item>
        <Dropdown.Item>Classifications</Dropdown.Item>
      </DropdownButton>

      <DropdownButton title="Our Cinemas"className="dropbtn">
        <Dropdown.Item>Places to go</Dropdown.Item>
        <Dropdown.Item>Getting there</Dropdown.Item>
        <Dropdown.Item>Opening Times</Dropdown.Item>
        <Dropdown.Item>Screen info</Dropdown.Item>
      </DropdownButton>
      <DropdownButton title="What's On">
        <Dropdown.Item>Listings Gallery</Dropdown.Item>
        <Dropdown.Item>To Book</Dropdown.Item>
      </DropdownButton>
    </>
  );

  //   function CustomLink({ to, children, ...props}){
  //   const resolvedPath = useResolvedPath(to)
  //   const isActive = useMatch({ path: resolvedPath.pathname, end:true})

  //   return(
  //       <li className={isActive ? "active": ""}>
  //           <Link to={to}{...props}>
  //               {children}
  //           </Link>
  //           </li>
  //   )
  // }
}
