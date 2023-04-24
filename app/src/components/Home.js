import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment, faHeart, faRetweet, faShare, fas, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form';
import messages from '../data/feed_log.json';

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
        <div className='container mt-5'>
            <div className='row streaming-card justify-content-between'>
                <div className='d-block col card text-center m-2 py-3 streaming-card h-50'>
                    <p className='pt-3 fw-bold fs-5 feed-font'>Now Streaming</p>
                    <div className='d-flex mt-3 justify-content-center'>
                        <img src='pics/esther.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2 feed-font'>@User#1</p>
                    </div>
                    <div className='d-flex h-auto mt-3 justify-content-center'>
                        <img src='pics/justin.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2 feed-font'>@User#2</p>
                    </div>
                    <div className='d-flex h-auto mt-3 justify-content-center'>
                        <img src='pics/ayata.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2 feed-font'>@User#3</p>
                    </div>
                </div>
                <div className='col-8 h-auto'>
                    <div className='card p-3 m-2 streaming-card'>
                        <div className='d-flex h-auto mt-3 ps-4'>
                            <img src='pics/helen.png' className='feed-img'></img>
                            <p className='align-self-center fw-bold mb-0 ps-3 feed-font'>You</p>
                        </div>
                        <div className="py-3 d-flex">
                            <Form className='d-flex w-100 justify-content-center px-4' onSubmit={handleSubmit}>
                                <Form.Control as='textarea' rows={3} value={message} className="form-control feed-text-box" onChange={handleMessageChange} />
                                <button type="submit" className="ms-3 feed-submit-button mt-auto feed-font" onClick={handleSubmit}>Submit</button>
                            </Form>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between mt-4 mx-2'>
                        <button type="button" className="btn btn-dark feed-btn feed-font">Discover</button>
                        <button type="button" className="btn btn-dark feed-btn feed-font">Following</button>
                        <button type="button" className="btn btn-dark feed-btn feed-font">Company</button>
                    </div>

                    <div className='mt-1 row d-flex justify-content-center mx-2'>
                    {messages.map(message => (
                        <div className='card my-3 chat-messages streaming-card'>
                            <div className='d-flex h-auto'>
                                <img src={message.userImg} className='feed-img'></img>
                                <p className='align-self-center fw-bold mb-0 ps-3 feed-font'>{message.userName}</p>
                            </div>
                            <p className='m-0 py-3'>{message.text}</p>
                            <div className='d-flex justify-content-between py-2'>
                                <FontAwesomeIcon icon="fa-solid fa-heart" className='pe-5 fs-4' />
                                <FontAwesomeIcon icon="fa-solid fa-comment" className='pe-5 fs-4' />
                                <FontAwesomeIcon icon="fa-solid fa-retweet" className='pe-5 fs-4' />
                                <FontAwesomeIcon icon="fa-solid fa-share" className='pe-5 fs-4' />
                            </div>
                        </div>

                    ))}
                    {chat.map(message => (
                        <div className='card my-3 chat-messages streaming-card'>
                            <div className='d-flex h-auto'>
                                <img src='pics/helen.png' className='feed-img'></img>
                                <p className='align-self-center fw-bold mb-0 ps-3 feed-font'>Me</p>
                            </div>
                            <p className='m-0 py-3'>{message}</p>
                            <div className='d-flex justify-content-between py-2'>
                                <FontAwesomeIcon icon="fa-solid fa-heart" className='pe-5 fs-4' />
                                <FontAwesomeIcon icon="fa-solid fa-comment" className='pe-5 fs-4' />
                                <FontAwesomeIcon icon="fa-solid fa-retweet" className='pe-5 fs-4' />
                                <FontAwesomeIcon icon="fa-solid fa-share" className='pe-5 fs-4' />
                            </div>
                        </div>

                    ))}

                </div>
                </div>

                <div className='d-block h-50 col streaming-card card m-2 text-center p-3'>
                    <a href='#' className='feed-link feed-font'>@HorseEggs wins Challengers League North America - New York Times</a>
                    <hr className='my-3'></hr>
                    <a href='#' className='feed-link feed-font'>Joshua Tan loses horribly to 12-year-old in embarassing recent match</a>
                    <hr className='my-3'></hr>
                    <a href='#' className='feed-link feed-font'>Esther Cui beats reigning champion in recent nationals</a>
                </div>

                
            </div>

        </div>
    )
}
