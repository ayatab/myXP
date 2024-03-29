import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EditExpModal from './EditExpModal.js';
import EditInfoModal from './EditInfoModal.js';
import EditTournModal from './EditTournModal.js';
import EditInterestModal from './EditInterestModal.js';
import { Amplify, Auth } from 'aws-amplify';
import Card from 'react-bootstrap/Card';

const DEFAULT_USER = {
    info: {
        pronouns: 'he/him',
        location: 'Seattle, WA',
        email: 'AlexanderHeng@gmail.com',
        twitter: 'HorseEggs22'
    },
    experience: [{
        id: 1,
        role: 'Sentinels Valorant IGL',
        start_month: 'Dec.',
        start_year: '2021',
        end_month: 'Present',
        end_year: '',
        isCurrent: true,
        description: 'Lorem ipsum dolor sit amet. Ut facilis perferendis est omnis quae aut maiores nisi eum possimus omnis sed quia iste. Ut voluptatibus fuga id debitis ullam quo voluptatem rerum eos velit beatae.Lorem ipsum dolor sit amet. Ut facilis perferendis est omnis quae aut maiores nisi eum possimus omnis sed quia iste.'
    },
    {
        id: 2,
        role: 'XSET Valorant Player',
        start_month: 'Feb.',
        start_year: '2020',
        end_month: 'Nov.',
        end_year: '2021',
        isCurrent: false,
        description: 'Lorem ipsum dolor sit amet. Ut facilis perferendis est omnis quae aut maiores nisi eum possimus omnis sed quia iste. Ut voluptatibus fuga id debitis ullam quo voluptatem rerum eos velit beatae.Lorem ipsum dolor sit amet. Ut facilis perferendis est omnis quae aut maiores nisi eum possimus omnis sed quia iste.'
    }
    ],
    tournaments: [{
        id: 1,
        place: 1,
        name: 'Valorant Challengers 2023',
        month: '11',
        day: '03',
        year: '2022',
        tier: 'B',
        result: '0-3',
        team: 'Sentinels'
    },
    {
        id: 2,
        place: 2,
        name: 'Telepath Valorant Open',
        month: '12',
        day: '03',
        year: '2021',
        tier: 'B',
        result: '2-1',
        team: 'Sentinels'
    }],
    interests: ['Hiking', 'Animation', 'Sushi', 'Baking', '3D Modeling']
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
    const [showExp, setShowExp] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showTourn, setShowTourn] = useState(false);
    const [showInterest, setShowInterest] = useState(false);

    const handleShowExp = () => setShowExp(true);
    const handleCloseExp = (profileObj) => {
        // push data to aws 
        // profileData.
        setShowExp(false);
    };

    const handleShowInfo = () => setShowInfo(true);
    const handleCloseInfo = (profileObj) => {
        // push data to aws 
        // profileData.
        setShowInfo(false);
    };

    const handleShowTourn = () => setShowTourn(true);
    const handleCloseTourn = (profileObj) => {
        // push data to aws 
        // profileData.
        setShowTourn(false);
    };

    const handleShowInterest = () => setShowInterest(true);
    const handleCloseInterest = (profileObj) => {
        // push data to aws 
        // profileData.
        setShowInterest(false);
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
        <div className="container">
            {/* <Button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Sign in with Google</Button> */}
            {/* <button onClick={logout}>Sign out</button> */}
            {/* <div className='row'> */}
            <div className='row'>
                <HeaderCard />
            </div>
            {/* </div> */}
            <EditExpModal show={showExp} handleClose={handleCloseExp} profileData={profileData} changeProfile={changeProfile} />
            <EditInfoModal show={showInfo} handleClose={handleCloseInfo} profileData={profileData} changeProfile={changeProfile} />
            <EditTournModal show={showTourn} handleClose={handleCloseTourn} profileData={profileData} changeProfile={changeProfile} />
            <EditInterestModal show={showInterest} handleClose={handleCloseInterest} profileData={profileData} changeProfile={changeProfile} />
            <div className='row'>
                <div className='col-3 info-col'>
                </div>
                <div className='col d-flex justify-content-evenly'>
                    {/* <div className='d-flex my-3 justify-content-center'> */}
                    {isExperience &&
                        <div className='d-flex my-3 px-2'>
                            <Link className={active} onClick={changeExperience} to="#">Experience</Link>
                            <Link className={inactive} onClick={changeGames} to="#">Games</Link>
                        </div>}
                    {!isExperience &&
                        <div className='d-flex my-3 px-2'>
                            <Link className={inactive} onClick={changeExperience} to="#">Experience</Link>
                            <Link className={active} onClick={changeGames} to="#">Games</Link>
                        </div>}


                    {/* </div> */}
                </div>
            </div>

            <div className='row'>
                <div className='col-3 info-col'>
                    <InfoCard profile={profileData} show={showInfo} handleShow={handleShowInfo} />
                    <div className='p-4'></div>
                    <InterestCard profile={profileData} show={showInfo} handleShow={handleShowInterest} />
                </div>
                <div className='col main-col'>
                    {isExperience && <ExperienceCard profile={profileData} show={showExp} handleShowExp={handleShowExp} handleShowTourn={handleShowTourn} />}
                    {!isExperience && <GamesCard gameData={gameData} />}
                </div>
            </div>
        </div>
    )
}

function HeaderCard(props) {
    return (
        <div className="bg-white card border-light profile-card">
            <div className="d-flex flex-column justify-content-center">
                <img src='pics/profilebg.jpg' className='position-relative profile-background' />
                <div className='name-block d-flex align-items-end'>
                    <p className='m-0 gamer-tag'>Horse_egg</p>
                    <p className='m-0 real-name'>Alex H.</p>
                    {/* <p>test</p> */}
                </div>
                <img src='pics/alexpic.png' className='card-img mx-auto profile-img'></img>
                <div className='status'>Top 0.1% VALORANT NA</div>
                <div className='tags'>
                    <img src='pics/gamer.png' className='tag'></img>
                    <img src='pics/streamer.png' className='tag'></img>
                </div>
            </div>
            <div className='d-flex justify-content-end edit-button'>
                <span><button className="btn" onClick={null}><img src="pics/edit.svg"></img></button></span>
            </div>
        </div>

        // <>
        //     <Card className='profile-card'>
        //         <Card.Img className='profile-background' variant="top" src="pics/profilebg.jpg" />
        //         <img src='pics/alexpic.png' className='profile-img'></img>
        //         <Card.Body>
        //             <Card.Text>
        //                 Some quick example text to build on the card title and make up the
        //                 bulk of the card's content.
        //             </Card.Text>
        //         </Card.Body>
        //     </Card>
        // </>

    )
}

function GamesCard(props) {
    const gameData = props.gameData;
    return (
        <div className='bg-white card info-card border-light profile-card'>
            <div className='card-body'>
                {/* <a className="btn btn-dark my-5 mx-5" href="#" role="button">some placeholder cool button before i set up the actual button thing lol</a> */}
                <div className='d-flex justify-content-between'>
                    <h4 className='header-text'>SOLO</h4>
                    <p>{gameData.solo.matches} Matches</p>
                </div>
                <hr />
                {/* this is all solo stats */}
                <div className="d-flex row stat-cluster text-center mx-2 justify-content-center">
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
                    <h4 className='header-text'>DUO</h4>
                    <p>{gameData.duo.matches} Matches</p>
                </div>
                <hr />
                {/* this is all duo stats */}
                <div className="d-flex row stat-cluster text-center mx-2 justify-content-center">
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
    const experiences = props.profile.experience;
    const tournaments = props.profile.tournaments;
    const handleShowExp = props.handleShowExp;
    const handleShowTourn = props.handleShowTourn;


    const experienceBlock = experiences.map((experience) => {
        const component = (
            <div className="experience-box" key={experience.role}>
                <h5 className="role">{experience.role}</h5>
                <h6 className="dates">{experience.isCurrent ? experience.start_month + " " + experience.start_year + " - Present" : experience.start_month + " " + experience.start_year + " - " + experience.end_month + " " + experience.end_year}</h6>
                <p className="description">{experience.description}</p>
            </div>
        );
        return component;
    });

    const tournamentBlock = tournaments.map((tournament) => {
        let place_text = 'th';
        let place_class = ' tourn-first-place';
        let bg_class = ' tourn-first-bg';
        if (tournament.place === 1) {
            place_text = 'st';
        } else if (tournament.place === 2) {
            place_text = 'nd';
            place_class = ' tourn-second-place';
            bg_class = ' tourn-second-bg';
        } else if (tournament.place === 3) {
            place_text = 'rd';
            place_class = ' tourn-third-place';
            bg_class = ' tourn-third-bg';
        }
        const component = (
            <div className="card mb-3 tourn-card" key={tournament.id}>
                <div className="row g-0">
                    <div className={"col-md-2 text-center tourn-place d-flex justify-content-center" + place_class}>
                        <h1>{tournament.place}</h1>
                        <h2>{place_text}</h2>
                    </div>
                    <div className={"col-md-10 tourn-bg" + bg_class}>
                        <div className="card-body tourn-info d-flex justify-content-evenly">
                            <div className="text-center">
                                <div><h3>Tournament</h3></div>
                                <div><p>{tournament.name}</p></div>
                            </div>
                            <div className="text-center d-flex flex-column justify-content-center">
                                <div><h3>Date</h3></div>
                                <div><p>{tournament.month + '-' + tournament.day + '-' + tournament.year}</p></div>
                            </div>
                            <div className="text-center d-flex flex-column justify-content-center">
                                <div><h3>Tier</h3></div>
                                <div><p>{"Tier-" + tournament.tier}</p></div>
                            </div>
                            <div className="text-center d-flex flex-column justify-content-center">
                                <div><h3>Result</h3></div>
                                <div><p>{tournament.result}</p></div>
                            </div>
                            <div className="text-center d-flex flex-column justify-content-center">
                                <div><h3>Team</h3></div>
                                <div><img className="mb-3" width="125" height="27" src={'pics/' + tournament.team + '.png'} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return component;
    });

    return (
        <div className='bg-white card info-card border-light profile-card'>
            <div className='card-body'>
                <div>
                    <div className='d-flex justify-content-between'>
                        <h1 className='header-text'>Experience</h1>
                        <span><button className="btn" onClick={handleShowExp}><img src="pics/edit.svg"></img></button></span>
                    </div>
                    <hr className='exp-divider' />
                    {/* Experience */}
                    <div className="d-flex row stat-cluster">
                        {experienceBlock}
                    </div>
                </div>
                <div>
                    <div className='d-flex justify-content-between'>
                        <h1 className='header-text'>Tournament History</h1>
                        <span><button className="btn" onClick={handleShowTourn}><img src="pics/edit.svg"></img></button></span>

                        {/* <p>EDIT</p> */}
                    </div>
                    <hr className='exp-divider' />
                    {/* Tourn Info */}
                    {tournamentBlock}
                </div>
                <div>
                    <div className='d-flex justify-content-between'>
                        <h1 className='header-text'>Education</h1>
                        <span><button className="btn" onClick={handleShowTourn}><img src="pics/edit.svg"></img></button></span>
                        {/* <p>EDIT</p> */}
                    </div>
                    <hr className='exp-divider' />
                    {/* Education */}
                    <div className="d-flex row stat-cluster">
                        {/* <div className="experience-box">
                            <h5>University of Washington</h5>
                            <h6>Dec 2019 - Present</h6>
                            <p></p>
                        </div> */}
                        <ul className="ed-list">
                            <li>
                                <div className="d-flex flex-grow-1 align-self-center">
                                    <img className="ed-logo" src="pics/uw.png" />
                                    <div className="d-flex flex-column justify-content-evenly">
                                        <h5 className="school-name">University of Washington</h5>
                                        <h6 className="school-date">Dec 2019 - Present</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

function InfoCard(props) {
    // const headList = ["Pronouns", "Based In", "Email", "Twitter"];
    // const headMap = headList.map((headName) => {
    //     const component = (
    // <li>
    //     <div className="d-flex flex-grow-1 align-self-center">
    //         <img className="info-icon" src={"pics/profile/" + headName +".svg"} />
    //         <div className="d-flex flex-column">
    //             <h2 className="info-head">{headName}</h2>
    //             <p className="info-text">he/him</p>
    //         </div>
    //     </div>
    // </li>
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
                    {/* <span><button className="btn" onClick={handleShow}><img src="pics/edit.svg"></img></button></span> */}
                </div>
                <hr />
                <ul className="info-list mb-0">
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
                <div className='d-flex justify-content-end'>
                    <span><button className="btn" onClick={handleShow}><img src="pics/edit.svg"></img></button></span>
                </div>

            </div>
        </div>
    )
}

function InterestCard(props) {
    const handleShow = props.handleShow;
    const profileData = props.profile;

    const interestsBlock = profileData.interests.map((interest) => {
        const component = (
            <div className='interest-block'>
                <p className='m-1'>{interest}</p>
            </div>
        );
        return component;
    })

    return (
        <div className="card side-card border-0"   >
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h1 className="card-title info-header">Interests</h1>
                </div>
                <hr />
            </div>
            <div className="d-flex flex-wrap">
                {interestsBlock}
            </div>
            <div className='d-flex justify-content-end mt-3'>
                <span><button className="btn" onClick={handleShow}><img src="pics/edit.svg"></img></button></span>
            </div>
        </div>
    )
}