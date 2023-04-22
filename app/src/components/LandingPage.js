import React from 'react';
import { Auth } from 'aws-amplify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFontAwesome, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faTwitter, faFontAwesome, faFacebookF, faInstagram, faLinkedin)

export default function LandingPage(props) {
    async function checkUser() {
        const user = await Auth.currentAuthenticatedUser()
        console.log('user: ', user)
    }

    return (
        <div className='landing-bg'>
            {/* <div>
                <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Sign in w google</button>
                <button onClick={checkUser}>Check user</button>
            </div> */}
            <div className='container'>
                <div className='position-relative'>
                    <img src='pics/boys.png' className='landing-boys-pic img-fluid'></img>
                    <p className='welcome-text'>Welcome <br></br> to MyXP</p>

                </div>
                <div className='text-end pe-5 pt-4 fs-4 text-light'>A centralized esports hub which allows gamers to showcase <br></br> their experience and make professional connections.</div>
                <div className='d-flex text-center row landing-padding'>
                    <div className='mt-4 col'>
                        <img src='pics/favicon.png' className='landing-logo'></img>
                        <p className='landing-text'>Who is MyXP for?</p>
                    </div>
                    <div className='col d-flex gamer-padding'>
                        <p className='landing-text fw-normal'>Gamers and Recruiters</p>
                    </div>
                    {/* <div className='col mt-auto'>
                        <p className='landing-text fw-normal'>Recruiters</p>
                    </div> */}
                </div>
                <div className='d-flex text-center row landing-padding'>
                    <div className='col mt-auto'>
                        <p className='landing-text'>Promote your <br></br> professional <br></br> gaming career.</p>
                    </div>
                    <div className='col mt-auto'>
                        <p className='landing-text fw-normal fs-6'>Through myXP, gamers are able to create their own customized profile which spotlights their gaming experience, allowing players from everywhere to share their talents and connect to a larger group of organizations, scouts, or teams. </p>
                    </div>
                </div>
                <div className='d-flex text-center row landing-padding'>
                    <div className='col mt-auto'>
                        <p className='landing-text fw-normal fs-6'>Easily locate job openings and apply directly to company postings with your myXP profile.</p>
                    </div>
                    <div className='col mt-auto'>
                        <p className='landing-text'>Find your next <br></br> esports job.</p>
                    </div>
                </div>

            </div>
            <div className='container-fluid'>
                <div className='row landing-yellow-bg'>
                    <p className='landing-yellow-text text-dark '>For Companies <br></br> and Recruiters</p>
                </div>
                <div className='d-flex text-center row landing-padding landing-bottom-background'>
                    <div className='col'>
                        <p className='landing-text'>Create the <br></br> optimal gaming <br></br> team.</p>
                    </div>
                    <div className='col'>
                        <p className='landing-text fw-normal fs-6'>Recruit talented, career-seeking individuals who will be a <br></br> valuable asset to your team. </p>
                    </div>
                </div>
                <div className='row footer d-flex justify-content-center'>
                    <div className='col text-center pt-5'>
                        <img src='pics/favicon.png' className='landing-logo ratio ratio-1x1'></img>
                        <div className='footer-logo-text'>MyXP</div>
                    </div>
                    <div className='col'>
                        <div className='row d-flex text-center px-5 pt-5'>
                            <div className='col fs-4'>
                                Sign Up
                            </div>
                            <div className='col fs-4'>
                                About
                            </div>
                        </div>
                        <div className='text-center p-3 mt-4'>Connect with us</div>
                        <div className='row'>
                            <div className='col d-flex justify-content-center'>
                                <FontAwesomeIcon icon="fa-brands fa-instagram" size="3x" className='mx-2' />
                                <FontAwesomeIcon icon="fa-brands fa-twitter" size="3x" className='mx-2' />
                                <FontAwesomeIcon icon="fa-brands fa-facebook-f" size="3x" className='mx-2' />
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="3x" className='mx-2' />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='fs-4 d-flex justify-content-center pt-5'>Contact Us</div>
                        {/* <a href="#" ><i id="social-links" className="fa fa-instagram" aria-label="instagram"></i></a> */}
                        <p className='text-center pt-3 mt-4'>joshtan1@uw.edu</p>

                    </div>

                </div>
            </div>
        </div>
    )
}
