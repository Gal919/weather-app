import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentCondition, updateTodayForecast, updateIsLoading, setError } from '../store/forecast/forecastActions';
import { Container, SearchContainer, Search, Button } from './styles/SearchBar';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setCity(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
  
    if(city.trim() === "") {
      dispatch(setError('Please Enter a Value'));
    }

    else {
      dispatch(updateIsLoading(true));
      dispatch(updateCurrentCondition(city.trim()));
      dispatch(updateTodayForecast(city.trim()));
    }
  };

  return (
    <Container>
      <SearchContainer onSubmit={handleSubmit}>
        <Search
          type='text'
          value={city}
          placeholder='Search for cities..'
          onChange={handleChange}
        />
        <Button >
          <i type='submit' className='fa-solid fa-magnifying-glass'></i>
        </Button>
      </SearchContainer>
    </Container>
  );
};

export default SearchBar;
