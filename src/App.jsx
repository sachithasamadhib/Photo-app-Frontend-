import React, { useState } from 'react';
import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';
import ImageDetails from './ImageDetails';
import UserProfile from './UserProfile';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';


import { BrowserRouter as Router, Route, Routes , Navigate  } from 'react-router-dom'


function App() {

  
  return (
    <Router>
            <div className="App">
            <Routes>
            <Route path="/register" element={<Register />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                    
                    <Route path="/termsofservice" element={<TermsOfService />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                  
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/" element={<Navigate to="/Login" />} />  
                </Routes>
            </div>
        </Router>
  )

}

export default App;
