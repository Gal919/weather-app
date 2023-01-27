import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import CurrentForecast from './components/CurrentForecast';
import { GlobalStyles } from './components/styles/Global';
import Header from './components/Header';
import SearchBar from './components/SearchBar'; 
import TodayForecast from './components/TodayForecast';

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
