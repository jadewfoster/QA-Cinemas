import React from 'react'

export default function Navbar() {
    return (
    <nav className="nav">

        <a href="/" className="title">QA Cinemas</a>
    <ul>
        <li className="hover">
            <a href="/home">Home</a>
        </li>
        <li>
        <a href="/info">Info</a>
        </li>
        <li>
        <a href="/our-cinemas">Our Cinemas</a>
        </li>
        <li>
        <a href="/what's-on">What's On</a>
        </li>
        <li>
        <a href="/coming-soon">Coming Soon</a>
        </li>
        <li>
        <a href="/bookings">My Bookings</a>
        </li>
        <li>
        <a href="/discussion">Discussion</a>
        </li>
    </ul>
    </nav>
 )
}
