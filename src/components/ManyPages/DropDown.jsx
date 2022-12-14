import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function List() {
  return (
    <>
          <style type="text/css">
        {`
    .btn-flat {
      background-color: white;
      color: black;
    }

    .btn-xxl {
      font-size: 1.5rem;

    }
    `}
      </style>
      <DropdownButton size="xxl" variant="flat" title="info" className="dropbtn">
        <Dropdown.Item href="/about-us">About Us</Dropdown.Item>
        <Dropdown.Item href="/contact-us">Contact Us</Dropdown.Item>
        <Dropdown.Item href="/classifications">Classifications</Dropdown.Item>
      </DropdownButton>

      <DropdownButton size="xxl"  variant="flat" title="Our Cinemas"className="dropbtn">
        <Dropdown.Item href="/places">Places To Go</Dropdown.Item>
        <Dropdown.Item href="getting-there">Getting there</Dropdown.Item>
        <Dropdown.Item href="/openingtimes">Opening Times</Dropdown.Item>
        <Dropdown.Item href="/screen">Screen Info</Dropdown.Item>
      </DropdownButton>
      <DropdownButton size="xxl" variant="flat" title="What's On">
        <Dropdown.Item href="/listings">Listings Gallery</Dropdown.Item>
        <Dropdown.Item href="/book-your-ticket">Book Your Ticket</Dropdown.Item>
      </DropdownButton>
    </>
  );


}
