import React from 'react';

const Info = ({ date, temp, img }) => {
    const time = date.slice(10, 16);
 
    return (
    <>
      <p>{time}</p>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt='weather-icon'
      />
      <p>{Math.floor(temp)} &#8451;</p>
    </>
  );
};

export default Info;