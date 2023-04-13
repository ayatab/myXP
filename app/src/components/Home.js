import React from 'react';

export default function Home(props) {

    return (
        <div className='container'>
            <div className='ps-0'>
                <p>now streaming (12)</p>
            </div>
            <div className='row' >
                <div className='col align-self-center card p-3'>
                    <div className='d-flex card-body'>
                        <img src='pics/helen.png' className='feed-img'></img>
                        <p className='d-flex ps-3 align-items-center fw-bold fs-5 mb-0'>You</p>
                    </div>
                    <div class="py-3 d-flex">
                        <input type="email" className="form-control feed-text-box" id="exampleInputEmail1" aria-describedby="emailHelp" ></input>
                        <button type="button" className="ms-3 feed-submit-button mt-auto">Success</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
