import React from 'react';
import styled from 'styled-components';

import logo from '../Images/nasa.svg';

const LogoStyle = styled.img`
  width: 200px;
  object-fit: cover;
  background-blend-mode: darken;
`;

const Logo = () => {

  return (
    <LogoStyle src={logo} alt='nasa-logo'/>
  )
}

export default Logo;