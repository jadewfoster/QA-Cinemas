import React from 'react'
import './App.css';
import Navbar from './components/ManyPages/Navbar';
import { Route, Routes} from 'react-router-dom'
import HomePage from './components/Home/HomePage';
import BookingsPage from './components/Bookings/BookingsPage';
import Discussion from './components/Discussion/Discussion';
import PlacesPage from './components/Places/PlacesPage';
import WhatsOnPage from './components/WhatsOn/WhatsOnPage';
import ComingSoon from './components/ComingSoon/ComingSoon';
import ContactUs from './components/ContactUs/ContactUsPage';
import AboutUsPage from './components/AboutUs/AboutUsPage'
import ClassificationsPage from './components/Classifications/ClassificationsPage'
import OpeningTimesPage from './components/OpeningTimes/OpeningTimesPage'
import ScreensPage from './components/Screens/ScreensPage'
import GettingThere from './components/Getting There/GettingThere'






function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/bookings" element={<BookingsPage/>}/>
        <Route path="/discussion" element={<Discussion/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/about-us" element={<AboutUsPage/>}/>
        <Route path="/classifications" element={<ClassificationsPage/>}/>
        <Route path="/places" element={<PlacesPage/>}/>
        <Route path="/opening-times" element={<OpeningTimesPage/>}/>
        <Route path="/listings" element={<WhatsOnPage/>}/>
        <Route path="/book-your-ticket" element={<BookingsPage/>}/>
        <Route path="/upcoming-releases" element={<ComingSoon/>}/>
        <Route path='/screen' element={<ScreensPage/>}/>
        <Route path='/getting-there' element={<GettingThere/>}/>

        </Routes>

        

      </div>

      
    </div>
  );
}

export default App;
