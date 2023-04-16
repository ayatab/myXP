import React from 'react';

export default function Home(props) {

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col streaming-card card m-2 text-center py-3'>
                    <p className=''>Now Streaming</p>
                    <div className='d-flex h-auto mt-3'>
                        <img src='pics/helen.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2'>@person1</p>
                    </div>
                    <div className='d-flex h-auto mt-3'>
                        <img src='pics/helen.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2'>@person1</p>
                    </div>
                    <div className='d-flex h-auto mt-3'>
                        <img src='pics/helen.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2'>@person1</p>
                    </div>
                </div>
                <div className='col-7 h-auto card p-3 m-2'>
                    {/* <div className='d-flex card-body'>
                        <img src='pics/helen.png' className='feed-img'></img>
                        <p className='d-flex ps-3 align-items-center fw-bold fs-5 mb-0'>You</p>
                    </div> */}
                    <div className='d-flex h-auto mt-3'>
                        <img src='pics/helen.png' className='feed-img'></img>
                        <p className='align-self-center fw-bold mb-0 ps-2'>You</p>
                    </div>
                    <div class="py-3 d-flex text-center">
                        <input type="email" className="form-control feed-text-box" id="exampleInputEmail1" aria-describedby="emailHelp" ></input>
                        <button type="button" className="ms-3 feed-submit-button mt-auto">Success</button>
                    </div>
                    
                </div>
                <div className='col streaming-card card m-2 text-center'>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
