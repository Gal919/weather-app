import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar'; 
import CurrentForecast from './components/CurrentForecast';
import TodayForecast from './components/TodayForecast';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
// import { Container } from './components/styles/Global';

const App = () => {

  const currentForecast = useSelector(state => state.forecast.currentCondition);
  const todayForecast = useSelector(state => state.forecast.todayForecast);
  const theme = useSelector(state => state.theme);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <SearchBar />
        {currentForecast.name && <CurrentForecast />}
        {todayForecast.list && <TodayForecast />}
      </ThemeProvider>
    </div>
  );
}

export default App;
