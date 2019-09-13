import React, { useState } from "react";
import DatePicker from "react-datepicker";

import ApiData from './ApiData';
import "react-datepicker/dist/react-datepicker.css";

const DateSetter = () => {
  const [ startDate, setStartDate ] = useState(new Date());

  const handleChange = date => {
    setStartDate(date);
  }

  return (
    <>
      <DatePicker className="text-right" 
      selected={startDate}
      onChange={handleChange}
      />
      <ApiData date={startDate}/>
    </>  
  )
}

export default DateSetter;
