import React from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import Logo from "../ManyPages/assets/Logo.jpeg";
export default function Navbar() {


    return (
    <nav className="nav">
        <div className="flex items-center font-medium justify-around">
            <img src={Logo} alt="logo" display="in-line block" vertical-align="middle" height="50%" width="90%"/>
        </div>

        
    <ul>
        <li className="hover">
            <CustomLink to="/home">Home</CustomLink>  
        </li>
        <li>
        <CustomLink to="/info">Info</CustomLink>
        </li>
        <li>
        <CustomLink to="/our-cinemas">Our Cinemas</CustomLink>
        </li>
        <li>
        <CustomLink to="/what's-on">What's On</CustomLink>
        </li>
        <li>
        <CustomLink to="/coming-soon">Coming Soon</CustomLink>
        </li>
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
