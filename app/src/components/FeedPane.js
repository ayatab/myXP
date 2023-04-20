import React from 'react';

export function FeedPane(props) {
    const messages = props.messages;

    const messageItemArray = messages.map((msgObj) => {
        const element = (
            <FeedItem data={messages} />
        )

        return element;
    })

    return (
        <div className="scrollable-pane">
          <div className="pt-2 my-2">
            {messageItemArray}
          </div>
        </div>
      )
}

function FeedItem(props) {
    const {userName, userImg, text} = props.data;

    return (
        <div className="message d-flex mb-3">
          <div className="me-2">
            <img src={userImg} alt={userName+"'s avatar"} />
          </div>
          <div className="flex-grow-1">
            <p className="user-name">{userName}</p>
            <p>{text}</p>
            <button className="btn like-button" onClick={handleClick}>
              <span className="material-icons" style={{ color: heartColor }}>favorite_border</span>
            </button>
          </div>
        </div>
      )
}