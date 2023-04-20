import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faHeart, faRetweet, faShare, fas, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faHeart, faComment, faShare, faRetweet)

export default function Home(props) {

    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setChat([...chat, message]);
        setMessage('');
    };

    return (
        <div className='container mt-5 clear-continer'>
            <div className='row streaming-card'>
                <div className='col card text-center m-2 py-3 streaming-card'>
                    <p className='pt-3 fw-bold fs-5 feed-font'>Now Streaming</p>
                    <div className='d-flex mt-3 justify-content-center'>
                        <img src='pics/esther.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2 feed-font'>@person1</p>
                    </div>
                    <div className='d-flex h-auto mt-3 justify-content-center'>
                        <img src='pics/justin.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2 feed-font'>@person1</p>
                    </div>
                    <div className='d-flex h-auto mt-3 justify-content-center'>
                        <img src='pics/ayata.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2 feed-font'>@person1</p>
                    </div>
                </div>
                <div className='col-8'>
                    <div className='card p-3 m-2 streaming-card'>
                        <div className='d-flex h-auto mt-3 ps-4'>
                            <img src='pics/helen.png' className='feed-img'></img>
                            <p className='align-self-center fw-bold mb-0 ps-2 feedfont'>You</p>
                        </div>
                        <div className="py-3 d-flex">
                            <form className='d-flex w-100 justify-content-center px-4' onSubmit={handleSubmit}>
                                <input type='text' value={message} className="form-control feed-text-box" onChange={handleMessageChange} ></input>
                                <button type="submit" className="ms-3 feed-submit-button mt-auto" onClick={handleSubmit}>submit</button>
                            </form>
                        </div>
                    </div>

                    
                </div>
                <div className='col streaming-card card m-2 text-center p-3'>
                    <a href='#' className='feed-link'>@HorseEggs wins Challengers League North America - New York Times</a>
                    <hr className='my-3'></hr>
                    <a href='#' className='feed-link'>Joshua Tan loses horribly to 12-year-old in embarassing recent match</a>
                    <hr className='my-3'></hr>
                    <a href='#' className='feed-link'>Esther Cui beats reigning champion in recent nationals</a>
                </div>
            </div>
            <div className='my-3 row d-flex justify-content-center'>
                        {chat.map(message => (
                            <div className='card my-3 chat-messages streaming-card col-8'>
                                <div className='d-flex h-auto'>
                                    <img src='pics/helen.png' className='feed-img'></img>
                                    <p className='align-self-center fw-bold mb-0 ps-2'>@person1</p>
                                </div>
                                <p className='m-0 py-3'>{message}</p>
                                <div className='d-flex justify-content-left'>
                                    <FontAwesomeIcon icon="fa-solid fa-heart" className='pe-5'/>
                                    <FontAwesomeIcon icon="fa-solid fa-comment" className='pe-5'/>
                                    <FontAwesomeIcon icon="fa-solid fa-retweet" className='pe-5'/>
                                    <FontAwesomeIcon icon="fa-solid fa-share" className='pe-5' />
                                </div>
                            </div>

                        ))}
                    
            </div>
        </div>
    )
}
