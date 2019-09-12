import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row } from "reactstrap";

import Content from './Content';

const ApiData = (props) => {
  const [ data, setData ] = useState({});
  const [modal, setModal] = useState(false);

  const modalClick = () => {
    console.log();
    console.log('The modal button is being clicked');
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
    console.log('The modal is ', modal);  
  }

  
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
    <Container>
      <Row>
        <Content 
          title={data.title}
          imgUrl={data.hdurl || data.url} 
          date={data.date}
          copyright={data.copyright}   
          explanation={data.explanation} 
          modal={modal}  
          modalClick={modalClick}
          longDate={props.date}
        />
      </Row>
    </Container>
  )
}

export default ApiData;