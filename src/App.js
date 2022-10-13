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
import ContactUs from './components/ContactUs/ContactUsPage';
import ScreensPage from './components/Screens/ScreensPage'
import GettingThere from './components/Getting There/GettingThere'
import Footer from './components/ManyPages/Footer';
import Payment from './components/Payments/Payment';
import DWD from './components/WhatsOn/DWD';
import MrsHarris from './components/WhatsOn/MrsHarris';
import Smile from './components/WhatsOn/Smile';
import TicketToParadise from './components/WhatsOn/TicketToParadise';
import LondonCentral from './components/Getting There/LondonCentral';
import LondonNorth from './components/Getting There/LondonNorth';
import LondonSouth from './components/Getting There/LondonSouth';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/discussion" element={<Discussion/>}/>
        <Route path="/classifications" element={<ClassificationsPage/>}/>
        <Route path ="/openingtimes" element = {<OpeningTimesPage/>}/>
        <Route path="/about-us" element = {<AboutUsPage/>}/>
        <Route path="/openingtimes" element = {<OpeningTimesPage/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/places" element={<PlacesPage/>}/>
        <Route path="/listings" element={<WhatsOnPage/>}/>
        <Route path="/book-your-ticket" element={<BookingsPage/>}/>
        <Route path="/upcoming-releases" element={<ComingSoon/>}/>
        <Route path='/screen' element={<ScreensPage/>}/>
        <Route path='/getting-there' element={<GettingThere/>}/>
        <Route path='/payment' element = {<Payment/>}/>
        <Route path='/dworrydarling' element = {<DWD/>}/>
        <Route path='/smile' element = {<Smile/>}/>
        <Route path='/mrsharris' element = {<MrsHarris/>}/>
        <Route path='/tickettoparadise' element = {<TicketToParadise/>}/>
        <Route path='/londoncentral' element = {<LondonCentral/>}/>
        <Route path='/londonnorth' element = {<LondonNorth/>}/>
        <Route path='/londonsouth' element = {<LondonSouth/>}/>

        </Routes>

      <Footer/>

        

      </div>

      
    </div>
  );
}

export default App;
