import React from 'react';

export default function LandingPage(props) {

    return (
        <div className='landing-bg'>
            <div className='container'>
                <div className='d-flex'>
                    <img src='pics/boys.png' className='landing-boys-pic img-fluid'></img>
                    <div className='welcome-text justify-content-end'>Welcome <br></br> to MyXP</div>

                </div>
                <div className='text-end pe-5 pt-4 fs-4 text-light'>A centralized esports hub which allows gamers to showcase <br></br> their experience and make professional connections.</div>
                <div className='d-flex flex-column justify-content-center row'>
                    <div className='mt-4 col justify-content-center'>
                        <img src='pics/favicon.png' className='landing-logo'></img>
                        <p>Who is MyXP for?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
