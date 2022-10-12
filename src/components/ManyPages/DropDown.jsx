import React from 'react'
import { Dropdown } from "react-bootstrap";
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import './dropdown.css'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';


export default function List(){

  return (
     <>

    <Dropdown >

    <DropdownToggle  className='dropbtn'>
      Info
    </DropdownToggle>

    <DropdownMenu  className='menu'>
      <DropdownItem> 
       <CustomLink to ="/about-us">
      About Us
      </CustomLink>
        
        </DropdownItem>
      <DropdownItem>
      <CustomLink to ="/contact-us">
        Contact Us
      
      </CustomLink>
      </DropdownItem>
      
      <DropdownItem>
      <CustomLink to ="/classifications">
         Classifications
      </CustomLink></DropdownItem>
    </DropdownMenu >
  </Dropdown>
        <Dropdown>
        <DropdownToggle className='dropbtn' >
          Our Cinemas
        </DropdownToggle>
    
        <DropdownMenu className='menu'>
          <DropdownItem>
          <CustomLink to ="/places">
        Places to go
      
      </CustomLink></DropdownItem>
          <DropdownItem>
          <CustomLink to ="/getting-there">
        Getting there
      
      </CustomLink>
            
            </DropdownItem>
          <DropdownItem>  
          <CustomLink to ="/opening-times">
        Opening Times
      
      </CustomLink></DropdownItem>
          <DropdownItem>
          <CustomLink to ="/screen">
        Screen Information
      
      </CustomLink></DropdownItem>
        </DropdownMenu>
      </Dropdown>


          <Dropdown>
          <DropdownToggle  className='dropbtn' >
            What's On
          </DropdownToggle>
      
          <DropdownMenu className='menu'>
            <DropdownItem href="/listings">
            <CustomLink to ="/listings">
        Listings Gallery
      
      </CustomLink>
      </DropdownItem>
            <DropdownItem>
            <CustomLink to ="/book-your-ticket">
          Book your ticket
      </CustomLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
              <Dropdown>
              <DropdownToggle className='dropbtn' id="dropdown-autoclose-true">
                Coming Soon
              </DropdownToggle>
          
              <DropdownMenu className='menu'>
                <DropdownItem >
                <CustomLink to ="/upcoming-releases">
          Upcoming releases
      </CustomLink></DropdownItem>
              </DropdownMenu>
            </Dropdown>



  

    

            </>


   
  );
  
  function CustomLink({ to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end:true})

  return(
      <li className={isActive ? "active": ""}>
          <Link to={to}{...props}>
              {children}
          </Link>
          </li>
  )
}

};