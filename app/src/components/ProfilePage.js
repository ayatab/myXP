import React from 'react';

export default function ProfilePage(props) {

    return (
        <div>
            <HeaderCard></HeaderCard>
        </div>
    )
}

function HeaderCard(props) {
    return (
        <div className='container mt-5 p-5'>
            <div className="col-lg-10 flex-column bg-white card border-light profile-card">
                <img src='pics/profilebackground.png' className='position-relative profile-background'/>
                <div className='gamer-tag'>
                    <p>Horse_egg</p>
                </div>
                <div className='card-body card-body-height'>
                    <img src='pics/alexpic.png' className='card-img mx-auto profile-img'></img>
                </div>
                <div className='status'>I like dumb stuff lol</div>
            </div>
        </div>
    )
}

function ExperienceCard(props) {
    return (
        <div>

        </div>
    )
}
