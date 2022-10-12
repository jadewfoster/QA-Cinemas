import React from 'react'
import './App.css';
import Navbar from './components/ManyPages/Navbar';
import { Route, Routes} from 'react-router-dom'
import HomePage from './components/Home/HomePage';
import BookingsPage from './components/Bookings/BookingsPage';
import Discussion from './components/Discussion/Discussion';
import PlacesPage from './components/Places/PlacesPage';
import WhatsOnPage from './components/WhatsOn/WhatsOnPage';
import ComingSoon from './components/UpcomingReleases/UpcomingReleasesPage';
import AboutUsPage from './components/AboutUs/AboutUsPage'
import OpeningTimesPage from './components/OpeningTimes/OpeningTimesPage'
import ClassificationsPage from './components/Classifications/ClassificationsPage'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/our-cinemas" element={<PlacesPage/>}/>
        <Route path="/what's-on" element={<WhatsOnPage/>}/>
        <Route path="/coming-soon" element={<ComingSoon/>}/>
        <Route path="/bookings" element={<BookingsPage/>}/>
        <Route path="/discussion" element={<Discussion/>}/>
        <Route path="/classifications" element={<ClassificationsPage/>}/>
        <Route path = "/aboutus" element = {<AboutUsPage/>}/>
        <Route path = "/openingtimes" element = {<OpeningTimesPage/>}/>

        </Routes>

        

      </div>

      
    </div>
  );
}

export default App;
