const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = '787ef6979c61d6b7319baed8a67fff72';

export const fetchApi = async (url) => {
  const response = await fetch(baseUrl + url + `&appid=${apiKey}`);

  if (!response.ok) {
    if (response.statusText === 'Not Found') {
      throw new Error('City Name Not Found');
    } else {
      throw new Error('Somthing Went Wrong');
    }
  }

  const data = await response.json();

  return data;
};