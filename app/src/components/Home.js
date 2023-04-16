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
        <div className='container mt-5 streaming-card'>
            <div className='row streaming-card'>
                <div className='col card text-center m-2 py-3 h-auto streaming-card'>
                    <p className=''>Now Streaming</p>
                    <div className='d-flex h-auto mt-3 justify-content-center'>
                        <img src='pics/helen.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2'>@person1</p>
                    </div>
                    <div className='d-flex h-auto mt-3 justify-content-center'>
                        <img src='pics/helen.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2'>@person1</p>
                    </div>
                    <div className='d-flex h-auto mt-3 justify-content-center'>
                        <img src='pics/helen.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2'>@person1</p>
                    </div>
                </div>
                <div className='col-8'>
                    <div className='card h-auto p-3 m-2 streaming-card'>
                        <div className='d-flex h-auto mt-3 ps-4'>
                            <img src='pics/helen.png' className='feed-img'></img>
                            <p className='align-self-center fw-bold mb-0 ps-2'>You</p>
                        </div>
                        <div class="py-3 d-flex">
                            <form className='d-flex w-100 justify-content-center' onSubmit={handleSubmit}>
                                <input type='text' value={message} className="form-control feed-text-box" onChange={handleMessageChange} ></input>
                                <button type="submit" className="ms-3 feed-submit-button mt-auto" onClick={handleSubmit}>submit</button>
                            </form>
                        </div>
                    </div>


                    <div className='my-3'>
                        {chat.map(message => (

                            <div className='card my-3 chat-messages streaming-card'>
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
                <div className='col streaming-card card m-2 text-center h-auto p-3'>

                </div>
            </div>

        </div>
    )
}
