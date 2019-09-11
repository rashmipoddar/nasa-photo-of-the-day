import React, { useState, useEffect } from "react";
import axios from 'axios';

import Title from './title';
import Image from './image';
import Description from './description';

const ApiData = () => {
  const [ data, setData ] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        // console.log('The api response is', response);
        const dataReceived = response.data;
        setData(dataReceived);
      })
      .catch(error => {
        console.log('Error in getting data ', error);
      })
  }, [])

  return (
    // <h1>Data received from API</h1>
    <>
      <Title title={data.title} />
      <Image 
        imgUrl={data.hdurl || data.url} 
        date={data.date}
        copyright={data.copyright}      
      />
      <Description explanation={data.explanation} />
    </>
  )
}

export default ApiData;