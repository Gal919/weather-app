import React from 'react';
import Toogle from './Toogle';
import { Container, ToggleContiner, Title } from './styles/Header';

const Header = () => {
  return (
    <Container>
      <Title>
        <h1>Weather App</h1>
        <i class="fa-solid fa-rainbow"></i>
      </Title>
      <ToggleContiner>
        <i className="fa-solid fa-sun"></i>
        <Toogle />
        <i className="fa-solid fa-moon"></i>
      </ToggleContiner>
    </Container>
  );
}

export default Header;