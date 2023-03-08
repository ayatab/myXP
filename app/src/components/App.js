import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Header from './Header.js';
import ProfilePage from './ProfilePage.js';


function App(props) {

    return (
        <div className='page-background'>
            <Header />
            <Routes>
                <Route index element={<ProfilePage />}></Route>
            </Routes>

        </div>
    )

}

export default App;