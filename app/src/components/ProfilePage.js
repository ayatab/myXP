import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditProfileModal from './EditProfileModal.js';
import EditInfoModal from './EditInfoModal.js';
import Button from 'react-bootstrap/Button';
import { Amplify, Auth } from 'aws-amplify';

const DEFAULT_USER = {
    info: {
        pronouns: 'he/him',
        location: 'Seattle, WA',
        email: 'AlexanderJHeng@gmail.com',
        twitter: 'HorseEggs22'
    },
    experience: {
        role: 'Sentinels Valorant IGL',
        start_month: 'Dec. 2019',
        start_year: '',
        end_month: 'Present',
        end_year: '',
        description: 'Lorem ipsum dolor sit amet. Ut facilis perferendis est omnis quae aut maiores nisi eum possimus omnis sed quia iste. Ut voluptatibus fuga id debitis ullam quo voluptatem rerum eos velit beatae.Lorem ipsum dolor sit amet. Ut facilis perferendis est omnis quae aut maiores nisi eum possimus omnis sed quia iste.'
    }
};

const default_data = {
    "solo": {
        "wins": 0,
        "matches": 0,
        "kills": 0,
        "win_rate": 0,
        "kd": 0,
        "top_10": 0,
        "top_25": 0
    },
    "duo": {
        "wins": 0,
        "matches": 0,
        "kills": 0,
        "win_rate": 0,
        "kd": 0,
        "top_5": 0,
        "top_12": 0
    }
}

export default function ProfilePage(props) {
    const [profileData, setProfileData] = useState(DEFAULT_USER);
    const [isExperience, setIsExperience] = useState(true);
    const [gameData, setGameData] = useState(default_data);
    const [show, setShow] = useState(false);
    // const [showEditExp, setShowEditExp] = useState(false);
    // const [showInfoExp, setShowInfoExp] = useState(false);
    
    // const handleExpShow = () => setShowEditExperience(true);
    // const handleExpClose = (profileObj) => {
    //     setShowEditExperience(false);
    // };
    // const handleShow = () => setShowEditInfo(true);
    // const handleClose = (profileObj) => {
    //     setShowEditInfo(false);
    // };

    // const changeProfile = (profileObj) => {
    //     setProfileData(profileObj);
    // };

    const handleShow = () => setShow(true);
    const handleClose = (profileObj) => {
        //ppush data to aws 
        // profileData.
        setShow(false);
    };

    const changeProfile = (profileObj) => {
        setProfileData(profileObj);
    };

    const active = "btn profile-btn btn-dark"
    const inactive = "btn profile-btn"

    let expStyle = active;
    let gameStyle = inactive;

    const changeExperience = (event) => {
        console.log("exp");
        expStyle = active;
        gameStyle = inactive;
        console.log("exp: " + expStyle);
        console.log("game: " + gameStyle);
        setIsExperience(true);
    }

    const changeGames = (event) => {
        console.log("games");
        expStyle = inactive;
        gameStyle = active;
        console.log("exp: " + expStyle);
        console.log("game: " + gameStyle);
        setIsExperience(false);
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "2c338f0a-4054-44d1-a241-a1f82f6f5376");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    async function logout() {
        const user = await Auth.signOut()
        console.log(user)
    }


    useEffect(() => {
        fetch("https://fortnite-api.com/v2/stats/br/v2?name=Prospеring", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.data.stats.all)
                const data = result.data.stats.all;
                const datajson = {
                    "solo": {
                        "wins": data.solo.wins,
                        "matches": data.solo.matches,
                        "kills": data.solo.kills,
                        "win_rate": data.solo.winRate,
                        "kd": data.solo.kd,
                        "top_10": data.solo.top10,
                        "top_25": data.solo.top25
                    },
                    "duo": {
                        "wins": data.duo.wins,
                        "matches": data.duo.matches,
                        "kills": data.duo.kills,
                        "win_rate": data.duo.winRate,
                        "kd": data.duo.kd,
                        "top_5": data.duo.top5,
                        "top_12": data.duo.top12
                    }
                }
                setGameData(datajson);
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className="container-fluid">
            <Button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Sign in with Google</Button>
            <button onClick={logout}>Sign out</button>
            {/* <div className='row'> */}
            <HeaderCard />
            {/* </div> */}
            <EditProfileModal show={show} handleClose={handleClose} profileData={profileData} changeProfile={changeProfile} />
            {/* <EditInfoModal show={show} handleClose={handleClose} profileData={profileData} changeProfile={changeProfile} /> */}
            <div className='row'>
                <div className='col-5 info-col'>
                </div>
                <div className='col main-col d-flex justify-content-center'>
                    {/* <div className='d-flex my-3 justify-content-center'> */}
                    {isExperience &&
                        <div className='d-flex my-3 justify-content-center'>
                            <Link className={active} onClick={changeExperience} to="#">Experience</Link>
                            <Link className={inactive} onClick={changeGames} to="#">Games</Link>
                        </div>}
                    {!isExperience &&
                        <div className='d-flex my-3 justify-content-center'>
                            <Link className={inactive} onClick={changeExperience} to="#">Experience</Link>
                            <Link className={active} onClick={changeGames} to="#">Games</Link>
                        </div>}


                    {/* </div> */}
                </div>
            </div>

            <div className='row'>
                <div className='col-3 info-col'>
                    <InfoCard profile={profileData} show={show} handleShow={handleShow} />
                    <div className='p-4'></div>
                    <InterestCard />
                </div>
                <div className='col main-col'>
                    {isExperience && <ExperienceCard profile={profileData} show={show} handleShow={handleShow} />}
                    {!isExperience && <GamesCard gameData={gameData} />}
                </div>
            </div>
        </div>
    )
}

function HeaderCard(props) {
    return (
        // <div className='card info-cards '>
        <div className="d-flex flex-column justify-content-center bg-white card border-light profile-card">
            <img src='pics/profilebackground.png' className='position-relative profile-background' />
            <div className='gamer-tag'>
                <p className='m-0'>Horse_egg</p>
            </div>
            {/* <div className='card-body card-body-height'> */}
            <img src='pics/alexpic.png' className='card-img mx-auto profile-img'></img>
            {/* </div> */}
            <div className='status'>Gaming 😎</div>
        </div>
        // </div>
    )
}

function GamesCard(props) {
    const gameData = props.gameData;
    return (
        <div className='bg-white card info-card border-light profile-card'>
            <div className='card-body'>
                {/* <a className="btn btn-dark my-5 mx-5" href="#" role="button">some placeholder cool button before i set up the actual button thing lol</a> */}
                <div className='d-flex justify-content-between'>
                    <h4 className='experience-header'>SOLO</h4>
                    <p>{gameData.solo.matches} Matches</p>
                </div>
                <hr />
                {/* this is all solo stats */}
                <div className="d-flex row stat-cluster text-center mx-2">
                    <div className="col-3 card mx-2 border-light stat-card">
                        <div className="card-body">
                            <h5 className="card-title">WINS</h5>
                            <p className="card-text stat-number">{gameData.solo.wins} </p>

                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Win%</h5>
                            <p className="card-text stat-number">{gameData.solo.win_rate}%</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">{gameData.solo.kills}</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">KD</h5>
                            <p className="card-text stat-number">{gameData.solo.kd}</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Top 10</h5>
                            <p className="card-text stat-number">{gameData.solo.top_10}</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Top 25</h5>
                            <p className="card-text stat-number">{gameData.solo.top_25}</p>
                        </div>
                    </div>
                </div>




                <div className='d-flex mt-5 mb-0 justify-content-between'>
                    <h4 className='experience-header'>DUO</h4>
                    <p>{gameData.duo.matches} Matches</p>
                </div>
                <hr />
                {/* this is all duo stats */}
                <div className="d-flex row stat-cluster text-center mx-2">
                    <div className="col-3 card mx-2 border-light stat-card">
                        <div className="card-body">
                            <h5 className="card-title">WINS</h5>
                            <p className="card-text stat-number">{gameData.duo.wins}</p>

                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Win%</h5>
                            <p className="card-text stat-number">{gameData.duo.win_rate}%</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">{gameData.duo.kills}</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">KD</h5>
                            <p className="card-text stat-number">{gameData.duo.kd}</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Top 5</h5>
                            <p className="card-text stat-number">{gameData.duo.top_5}</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Top 12</h5>
                            <p className="card-text stat-number">{gameData.duo.top_12}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ExperienceCard(props) {
    const profileData = props.profile;
    const handleShow = props.handleShow;

    return (
        <div className='bg-white card info-card border-light profile-card'>
            <div className='card-body'>
                <div>
                    <div className='d-flex justify-content-between'>
                        <h1 className='header-text'>Experience</h1>
                        <span><button className="btn" onClick={handleShow}><img src="pics/edit.svg"></img></button></span>
                        {/* <p>EDIT</p> */}
                    </div>
                    <hr />
                    {/* Experience */}
                    <div className="d-flex row stat-cluster">
                        <div className="experience-box">
                            <h5 className="role">{profileData.experience.role}</h5>
                            <h6 className="dates">{profileData.experience.start_month + " " + profileData.experience.start_year + " - " + profileData.experience.end_month + " " + profileData.experience.end_year}</h6>
                            <p className="description">{profileData.experience.description}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='d-flex'>
                        <h1 className='header-text'>Tournament History</h1>
                        {/* <p>EDIT</p> */}
                    </div>
                    <hr />
                    {/* Experience */}
                    <div className="card mb-3 tourn-card">
                        <div className="row g-0">
                            <div className="col-md-2 text-center tourn-place d-flex justify-content-center">
                                <h1>1</h1>
                                <h2>st</h2>
                            </div>
                            <div className="col-md-10 tourn-bg">
                                <div className="card-body tourn-info d-flex justify-content-evenly">
                                    <div className="text-center">
                                        <div><h3>Tournament</h3></div>
                                        <div><p>Valorant Challengers 2023</p></div>
                                    </div>
                                    <div className="text-center">
                                        <div><h3>Date</h3></div>
                                        <div><p>11-03-2022</p></div>
                                    </div>
                                    <div className="text-center">
                                        <div><h3>Tier</h3></div>
                                        <div><p>Tier-B</p></div>
                                    </div>
                                    <div className="text-center">
                                        <div><h3>Result</h3></div>
                                        <div><p>0-3</p></div>
                                    </div>
                                    <div className="text-center d-flex flex-column">
                                        <div><h3>Team</h3></div>
                                        <div><img src='pics/sentinels.png' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-between'>
                        <h1 className='header-text'>Education</h1>
                        {/* <p>EDIT</p> */}
                    </div>
                    <hr />
                    {/* Experience */}
                    <div className="d-flex row stat-cluster">
                        <div className="experience-box">
                            <h5>University of Washington</h5>
                            <h6>Dec 2019 - Present</h6>
                            <p></p>
                        </div>
                    </div>
                </div>
                {/* Education */}
                <div className="d-flex row stat-cluster text-center">

                </div>
            </div>
        </div >
    )
}

function InfoCard(props) {
    // const headList = ["Pronouns", "Based In", "Email", "Twitter"];

    // const headMap = headList.map((headName) => {
    //     const component = (
    //         <li>
    //             <div className="d-flex flex-grow-1 align-self-center">
    //                 <img className="info-icon" src={"pics/profile/" + headName +".svg"} />
    //                 <div className="d-flex flex-column">
    //                     <h2 className="info-head">{headName}</h2>
    //                     <p className="info-text">he/him</p>
    //                 </div>
    //             </div>
    //         </li>
    //     );
    //     return component;
    // })
    const profileData = props.profile;
    const handleShow = props.handleShow;

    return (
        <div className="card side-card border-0"   >
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h1 className="card-title info-header">Personal Information</h1>
                    <span><button className="btn" onClick={handleShow}><img src="pics/edit.svg"></img></button></span>
                </div>
                <hr />
                <ul className="info-list">
                    {/* {headMap} */}
                    <li className="info-item">
                        <div className="align-self-center">
                            {/* <img className="info-icon" src="pics/profile/Pronouns.svg" /> */}
                            <div className="d-flex flex-column">
                                <h2 className="info-head">Pronouns:</h2>
                                <p className="info-text">{profileData.info.pronouns}</p>
                            </div>
                        </div>
                    </li>
                    <li className="info-item">
                        <div className="align-self-center">
                            {/* <img className="info-icon" src="pics/profile/Based In.svg" /> */}
                            <div className="d-flex flex-column">
                                <h2 className="info-head">Based In:</h2>
                                <p className="info-text">{profileData.info.location}</p>
                            </div>
                        </div>
                    </li>
                    <li className="info-item">
                        <div className="align-self-center">
                            {/* <img className="info-icon" src="pics/profile/Email.svg" /> */}
                            <div className="d-flex flex-column">
                                <h2 className="info-head">Email:</h2>
                                <p className="info-text">{profileData.info.email}</p>
                            </div>
                        </div>
                    </li>
                    <li className="info-item">
                        <div className="align-self-center">
                            {/* <img className="info-icon" src="pics/profile/Twitter.svg" /> */}
                            <div className="d-flex flex-column">
                                <h2 className="info-head">Twitter:</h2>
                                <a className="twitter-link" href={"https://twitter.com/" + profileData.info.twitter}><p className="info-text">{"@" + profileData.info.twitter}</p></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function InterestCard(props) {
    return (
        <div className="card side-card border-0"   >
            <div className="card-body">
                <h1 className="card-title info-header">Interests</h1>
                <hr />
            </div>
            <div className="d-flex">
                <div className='interest-block'>
                    <p className='m-1'>Hiking</p>
                </div>
                <div className='interest-block'>
                    <p className='m-1'>Animation</p>
                </div>
            </div>
        </div>
    )
}