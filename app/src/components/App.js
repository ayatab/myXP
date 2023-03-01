import React from 'react';
// import ProfilePage from './ProfilePage.js';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import ProfilePage from './ProfilePage.js';

function App(props) {

    return (
        <div>
            <Routes>
                <Route index element={<ProfilePage />}></Route>
            </Routes>

        </div>
    )

}

export default App;