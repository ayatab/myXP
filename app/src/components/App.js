import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Header from './Header.js';
import ProfilePage from './ProfilePage.js';
import LandingPage from './LandingPage.js';


function App(props) {

    const [isExperience, setIsExperience] = useState(true);

    return (
        <div className='page-background'>
            <Header />
            <Routes>
                <Route path='profile' element={<ProfilePage currentView={isExperience} />} ></Route>
                <Route index element={<LandingPage />} ></Route>
                <Route path='/home' element={<Home />} ></Route>
            </Routes>
        </div>
    )

}

export default App;