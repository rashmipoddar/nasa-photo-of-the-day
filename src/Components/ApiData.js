import React, { useState, useEffect } from "react";
import axios from 'axios';

import Content from './Content';

const ApiData = (props) => {
  const [ data, setData ] = useState({});
  const year  = (props.date.getFullYear()).toString();
  const month = props.date.getMonth() + 1;
  const day   = props.date.getDate(); 
  
  const date = year.concat('-', month, '-', day);
  


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=x5FPpUb9Y1syghmfXdybQTUIikpLO1KSYf75gYYV&date=${date}`)
      .then(response => {
        // console.log('The api response is', response);
        const dataReceived = response.data;
        setData(dataReceived);
      })
      .catch(error => {
        console.log('Error in getting data ', error);
      })
  }, [date])

  return (
    <Content 
      title={data.title}
      imgUrl={data.hdurl || data.url} 
      date={data.date}
      copyright={data.copyright}   
      explanation={data.explanation}   
    />
  )
}

export default ApiData;