import React from 'react';

const Image = (props) => {
  return (
    <div>
      <h1>{`NASA Image of the day for ${props.date}`}</h1>
      <img className="mainImg" src={props.imgUrl} alt="Image of the Day"></img>
      <p>{`Image Copyright: ${props.copyright}`}</p>
    </div>
  )
}

export default Image;