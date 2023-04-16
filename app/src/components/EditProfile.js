import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function EditProfilePage(props) {
    const [profileData, setProfileData] = useState(props.profile);
    const [isExperience, setIsExperience] = useState(props.currentView);

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

    return (
        <div className="container-fluid">
            {/* <div className='row'> */}
            <HeaderCard />
            {/* </div> */}
            <div className='row'>
                <div className='col-5 info-col'>
                </div>
                <div className='col main-col'>
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
                    <InfoCard profile={profileData} profileCallback={props.profileCallback} />
                    <div className='p-4'></div>
                    <InterestCard />
                </div>
                <div className='col main-col'>
                    {isExperience && <ExperienceCard profile={profileData} profileCallback={props.profileCallback} />}
                    {!isExperience && <GamesCard />}
                </div>
            </div>
        </div>
    )
}

function HeaderCard(props) {
    return (
        // <div className='card info-cards '>
        <div className="d-flex flex-column justify-content-center bg-white card border-light profile-card">
            <img src='/pics/profilebackground.png' className='position-relative profile-background' />
            <div className='gamer-tag'>
                <p className='m-0'>Horse_egg</p>
            </div>
            {/* <div className='card-body card-body-height'> */}
            <img src='/pics/alexpic.png' className='card-img mx-auto profile-img'></img>
            {/* </div> */}
            <div className='status'>Gaming 😎</div>
        </div>
        // </div>
    )
}

function GamesCard(props) {
    return (
        <div className='bg-white card info-card border-light profile-card'>
            <div className='card-body'>
                {/* <a className="btn btn-dark my-5 mx-5" href="#" role="button">some placeholder cool button before i set up the actual button thing lol</a> */}


                <div className='d-flex justify-content-between'>
                    <h4 className='experience-header'>SOLO</h4>
                    <p>4,154 Matches</p>
                </div>
                <hr />
                {/* this is all solo stats */}
                <div className="d-flex row stat-cluster text-center mx-2">
                    <div className="col-3 card mx-2 border-light stat-card">
                        <div className="card-body">
                            <h5 className="card-title">WINS</h5>
                            <p className="card-text stat-number">3,700</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>

                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Win%</h5>
                            <p className="card-text stat-number">89.1%</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                </div>




                <div className='d-flex mt-5 mb-0 justify-content-between'>
                    <h4 className='experience-header'>DUO</h4>
                    <p>4,154 Matches</p>
                </div>
                <hr />
                {/* this is all solo stats */}
                <div className="d-flex row stat-cluster text-center mx-2">
                    <div className="col-3 card mx-2 border-light stat-card">
                        <div className="card-body">
                            <h5 className="card-title">WINS</h5>
                            <p className="card-text stat-number">3,700</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>

                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Win%</h5>
                            <p className="card-text stat-number">89.1%</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

                        <div className="card-body">
                            <h5 className="card-title">Kills</h5>
                            <p className="card-text stat-number">47,334</p>
                            <p className="card-text ">#11,626 - Top 0.1%</p>
                        </div>
                    </div>
                    <div className="col-3 card mx-2 border-light stat-card">

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
    const [profileData, setProfileData] = useState(props.profile);

    const handleProfileData = (event) => {
        setProfileData({ ...profileData, [event.target.name]: event.target.value });
    }

    const navigateTo = useNavigate();
    const handleClick = (event) => {
        props.profileCallback({ ...profileData, [event.target.name]: event.target.value });
        navigateTo('/profile');
    }

    return (
        <div className='bg-white card info-card border-light profile-card'>
            <div className='card-body'>
                <div>
                    <div className='d-flex justify-content-between'>
                        <h1 className='header-text'>Experience</h1>
                        <span><button className="btn" onClick={handleClick}><img src="/pics/edit.svg"></img></button></span>
                        {/* <p>EDIT</p> */}
                    </div>
                    <hr />
                    {/* Experience */}
                    <div className="d-flex row stat-cluster">
                        <div className="experience-box">
                            <div className="form-group mb-3">
                                <label htmlFor="roleInput" className="form-label">Name:</label>
                                <input name="role" className="form-control" id="roleInput" type="text" defaultValue={profileData.experience.role} onChange={handleProfileData} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="startInput" className="form-label">Start Date:</label>
                                <input name="start_date" className="form-control" id="startInput" type="text" defaultValue={profileData.experience.start_date} onChange={handleProfileData} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="endInput" className="form-label">End Date:</label>
                                <input name="end_date" className="form-control" id="endInput" type="text" defaultValue={profileData.experience.end_date} onChange={handleProfileData} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="endInput" className="form-label">Description:</label>
                                <input name="description" className="form-control" id="descriptionInput" type="text" defaultValue={profileData.experience.description} onChange={handleProfileData} />
                            </div>
                            {/* <h5 className="role">{profileData.experience.role}</h5> */}
                            {/* <h6 className="dates">{profileData.experience.start_date + " - " + profileData.experience.end_date}</h6> */}
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
                                        <div><img src='/pics/sentinels.png' /></div>
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
    const [profileData, setProfileData] = useState(props.profile);
    const handleProfileData = (event) => {
        setProfileData({ ...profileData, [event.target.name]: event.target.value });
    }
    return (
        <div className="card side-card border-0"   >
            <div className="card-body">
                <h1 className="card-title info-header">Personal Information</h1>
                <hr />
                <ul className="info-list">
                    {/* {headMap} */}
                    <li className="info-item">
                        <div className="align-self-center">
                            {/* <img className="info-icon" src="pics/profile/Pronouns.svg" /> */}
                            <div className="form-group mb-3">
                                <label htmlFor="pronouns" className="form-label"><h2 className="info-head">Pronouns:</h2></label>
                                <input name="pronouns" className="form-control" id="pronounInput" type="text" defaultValue={profileData.info.pronouns} onChange={handleProfileData} />
                            </div>
                        </div>
                    </li>
                    <li className="info-item">
                        <div className="align-self-center">
                            {/* <img className="info-icon" src="pics/profile/Based In.svg" /> */}
                            <div className="form-group mb-3">
                                <label htmlFor="location" className="form-label"><h2 className="info-head">Based In:</h2></label>
                                <input name="location" className="form-control" id="locationInput" type="text" defaultValue={profileData.info.location} onChange={handleProfileData} />
                            </div>
                        </div>
                    </li>
                    <li className="info-item">
                        <div className="align-self-center">
                            {/* <img className="info-icon" src="pics/profile/Email.svg" /> */}
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label"><h2 className="info-head">Email:</h2></label>
                                <input name="email" className="form-control" id="emailInput" type="text" defaultValue={profileData.info.email} onChange={handleProfileData} />
                            </div>
                        </div>
                    </li>
                    <li className="info-item">
                        <div className="align-self-center">
                            {/* <img className="info-icon" src="pics/profile/Twitter.svg" /> */}
                            <div className="form-group mb-3">
                                <label htmlFor="twitter" className="form-label"><h2 className="info-head">Twitter:</h2></label>
                                <input name="twitter" className="form-control" id="twitterInput" type="text" defaultValue={profileData.info.twitter} onChange={handleProfileData} />
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