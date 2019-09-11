import React from 'react';

const Image = (props) => {
  return (
    <div>
      <h2>{`NASA Image of the day for ${props.date}`}</h2>
      <img className="mainImg" src={props.imgUrl} alt="Image of the Day"></img>
      <p>{`Image Copyright: ${props.copyright}`}</p>
    </div>
  )
}

export default Image;