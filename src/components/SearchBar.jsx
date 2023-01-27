import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentCondition, updateTodayForecast } from '../store/forecast/forecastActions';
import { Container, SearchContainer, Search } from './styles/SearchBar';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setCity(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateCurrentCondition(city));
    dispatch(updateTodayForecast(city));
  };

  return (
    <Container>
      <SearchContainer onSubmit={handleSubmit}>
        <Search type='text' value={city} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </SearchContainer>
    </Container>
  );
};

export default SearchBar;
