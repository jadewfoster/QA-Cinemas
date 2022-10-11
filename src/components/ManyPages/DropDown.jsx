import React from 'react'
import { Dropdown } from "react-bootstrap";
import './dropdown.css'


export default function List(){

  return (

    <>
    <Dropdown classNme>

    <Dropdown.Toggle className='dropbtn'>
      Info
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/AboutUs">About Us</Dropdown.Item>
      <Dropdown.Item href="/ContactUs">Contact Us</Dropdown.Item>
      <Dropdown.Item href="/Classifications">Classifications</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
        <Dropdown>
        <Dropdown.Toggle className='dropbtn'>
          Our Cinemas
        </Dropdown.Toggle>
    
        <Dropdown.Menu>
          <Dropdown.Item href="/Places to go">Places to go</Dropdown.Item>
          <Dropdown.Item href="/Getting there">Getting there</Dropdown.Item>
          <Dropdown.Item href="/Opening times">Opening Times</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


          <Dropdown>
          <Dropdown.Toggle className='dropbtn'>
            What's On
          </Dropdown.Toggle>
      
          <Dropdown.Menu>
            <Dropdown.Item href="/Listings Gallery">Listings Gallery</Dropdown.Item>
            <Dropdown.Item href="/Book your ticket">Book your ticket</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
              <Dropdown>
              <Dropdown.Toggle className='dropbtn'>
                Coming Soon
              </Dropdown.Toggle>
          
              <Dropdown.Menu>
                <Dropdown.Item href="/Upcomingreleases">Upcoming releases</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>



  

    

            </>
   
  )
};