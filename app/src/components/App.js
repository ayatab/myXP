import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Header from './Header.js';
import ProfilePage from './ProfilePage.js';
import EditProfile from './EditProfile.js';
import LandingPage from './LandingPage.js';

const DEFAULT_USER = {
    info: {
        pronouns:'he/him',
        location:'Seattle, WA',
        email:'AlexanderJHeng@gmail.com',
        twitter:'HorseEggs22'
    },
    experience: {
        role:'Sentinels Valorant IGL',
        start_date:'Dec. 2019',
        end_date:'Present',
        description:'Lorem ipsum dolor sit amet. Ut facilis perferendis est omnis quae aut maiores nisi eum possimus omnis sed quia iste. Ut voluptatibus fuga id debitis ullam quo voluptatem rerum eos velit beatae.Lorem ipsum dolor sit amet. Ut facilis perferendis est omnis quae aut maiores nisi eum possimus omnis sed quia iste.'
    }
};

function App(props) {
    const [profileData, setProfileData] = useState(DEFAULT_USER);
    const [isExperience, setIsExperience] = useState(true);

    const changeProfileData = (profileObj) => {
        setProfileData(profileObj);
    }

    return (
        <div className='page-background'>
            <Header />
            <Routes>
                <Route path='profile' element={<ProfilePage currentView={isExperience} profile={profileData}/>} ></Route>
                <Route path='profile/edit' element={<EditProfile currentView={isExperience} profile={profileData} profileCallback={changeProfileData}/>} ></Route>
                <Route index element={<LandingPage />} ></Route>
                <Route path='home' element={<Home />} ></Route>
            </Routes>
        </div>
    )

}

export default App;