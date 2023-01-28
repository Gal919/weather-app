import React from 'react';
import { Container } from './styles/Info';

const Info = ({ date, temp, img }) => {
    const time = date.slice(10, 16);
 
    return (
    <Container>
      <p>{time}</p>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt='weather-icon'
      />
      <p>{Math.floor(temp)} {'\u00b0'}</p>
    </Container>
  );
};

export default Info;