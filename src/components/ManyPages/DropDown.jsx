import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import React from 'react'

export default function List(){
  const [showDropdown, setShowDropdown] = useState(false);

  return (

    <>
    <Dropdown
          onMouseLeave={() => setShowDropdown(false)}
          onMouseOver={() => setShowDropdown(true)}>
    <Dropdown.Toggle style={{fontFamily:"Bebas Neue", backgroundColor:"#4CD3CA" , border:"none", fontSize: "large", alignItems: "center", cursor:"pointer"}} >
      Info
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/AboutUs">About Us</Dropdown.Item>
      <Dropdown.Item href="/ContactUs">Contact Us</Dropdown.Item>
      <Dropdown.Item href="/Classifications">Classifications</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
        <Dropdown>
        <Dropdown.Toggle style={{fontFamily:"Bebas Neue", backgroundColor:"#4CD3CA" , border:"none", fontSize: "large", alignItems: "center", cursor:"pointer"}}>
          Our Cinemas
        </Dropdown.Toggle>
    
        <Dropdown.Menu>
          <Dropdown.Item href="/Places to go">Places to go</Dropdown.Item>
          <Dropdown.Item href="/Getting there">Getting there</Dropdown.Item>
          <Dropdown.Item href="/Opening times">Opening Times</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


          <Dropdown>
          <Dropdown.Toggle style={{fontFamily:"Bebas Neue", backgroundColor:"#4CD3CA" , border:"none", fontSize: "large", alignItems: "center", cursor:"pointer"}}>
            What's On
          </Dropdown.Toggle>
      
          <Dropdown.Menu>
            <Dropdown.Item href="/Listings Gallery">Listings Gallery</Dropdown.Item>
            <Dropdown.Item href="/Book your ticket">Book your ticket</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
              <Dropdown>
              <Dropdown.Toggle style={{fontFamily:"Bebas Neue", backgroundColor:"#4CD3CA" , border:"none", fontSize: "large", alignItems: "center", cursor:"pointer"}}>
                Coming Soon
              </Dropdown.Toggle>
          
              <Dropdown.Menu>
                <Dropdown.Item href="/Upcomingreleases">Upcoming releases</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>



  

    

            </>
   
  )
};