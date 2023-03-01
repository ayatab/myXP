import React from 'react';

export default function ProfilePage(props) {

    return (
        <div className="container">
            <HeaderCard></HeaderCard>
            <div className='d-flex m-4 justify-content-center'>
                <a className="btn" href="#" role="button">Games</a>
                <a className="btn" href="#" role="button">Experience</a>
            </div>
            <GamesCard></GamesCard>
            {/* <ExperienceCard></ExperienceCard> */}
        </div>
    )
}

function HeaderCard(props) {
    return (
        <div className='mt-5 mx-5'>
            <div className="d-flex flex-column justify-content-center bg-white card border-light profile-card">
                <img src='pics/profilebackground.png' className='position-relative profile-background' />
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

function GamesCard(props) {
    return (
        <div className='mx-5 px-0'>
            <div className='bg-white card border-light profile-card'>
                <a className="btn btn-dark my-5 mx-5" href="#" role="button">some placeholder cool button before i set up the actual button thing lol</a>


                <div className='d-flex mx-5 mt-2 mb-0 justify-content-between'>
                    <h4 className='experience-header'>SOLO</h4>
                    <p>4,154 Matches</p>
                </div>
                <div className='mt-0 p-0'>
                    <hr className='mt-0 mx-5' />
                </div>
                {/* this is all solo stats */}
                <div className="d-flex row stat-cluster text-center">
                    <div className="col-2 card m-3 border-light stat-card">
                        <div className="card-body">
                            <h5 className="card-title">WINS</h5>
                            <p className="card-text stat-number">3,700</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>

                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Win%</h5>
                            <p className="card-text stat-number">89.1%</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                </div>




                <div className='d-flex mx-5 mt-5 mb-0 justify-content-between'>
                    <h4 className='experience-header'>DUO</h4>
                    <p>4,154 Matches</p>
                </div>
                <div className='mt-0 p-0'>
                    <hr className='mt-0 mx-5' />
                </div>
                {/* this is all solo stats */}
                <div className="d-flex row stat-cluster text-center">
                    <div className="col-2 card m-3 border-light stat-card">
                        <div className="card-body">
                            <h5 className="card-title">WINS</h5>
                            <p className="card-text stat-number">3,700</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>

                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Win%</h5>
                            <p className="card-text stat-number">89.1%</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-2 card m-3 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                </div>

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
