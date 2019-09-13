import React from "react";
import styled from "styled-components";

// import "./App.css";

import backgroundImage from "./Images/sky1.jpg";
import Logo from "./Components/logo";
import DateSetter from "./Components/dateSetter";

const WrapperDiv = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
`;

function App() {
  return (
    <WrapperDiv>
      <Logo />
      <DateSetter />
      
    </WrapperDiv>
  );
}

export default App;
