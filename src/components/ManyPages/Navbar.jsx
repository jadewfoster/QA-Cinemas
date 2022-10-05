import React from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import Logo from "../ManyPages/assets/Logo.jpeg";
import List from "../../components/ManyPages/DropDown"
import { Dropdown } from 'react-bootstrap';


export default function Navbar() {

    return (
    <nav className="nav">
        <div className="flex items-center justify-around">
            <img src={Logo} alt="logo" display="in-line block" vertical-align="middle" height="50%" width="90%"/>
        </div>

        
    <ul>
        <li className="hover">
            <CustomLink to="/home">Home</CustomLink>  
        </li>
        
        <List title= "Info"/>
    
        <li>
        <CustomLink to="/bookings">My Bookings</CustomLink>
        </li>
        <li>
        <CustomLink to="/discussion">Discussion</CustomLink>
        </li>
    </ul>
    </nav>
 )
}

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
