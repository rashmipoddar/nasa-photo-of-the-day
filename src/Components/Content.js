import React from 'react';

const Content = (props) => {
  return (
    <div>
      <h1>{`NASA Image of the day for ${props.date}`}</h1>
      <h2>{props.title}</h2>
      <img className="mainImg" src={props.imgUrl} alt="Image of the Day"></img>
      <p>{`Image Copyright: ${props.copyright}`}</p>
      <p>{props.explanation}</p>
    </div>
  )
}

export default Content;