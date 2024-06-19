
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import img from '../image/i.jpg'; // Replace with your actual image path
import { lightTheme, darkTheme } from './themes';
import {
  Container,
  Overlay,
  WeatherCard,
  Header,
  MainInfo,
  Temp,
  DateAndTime,
  SearchForm,
  SearchInput,
  SearchButton,
  ToggleButton,
  WeatherDetails,
} from './styles'; // Import the styled components

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [theme, setTheme] = useState('light');
  const [error, setError] = useState(null);

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to retrieve your location. Please enter a city or zip code.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  // Fetch weather data based on user's current location
  useEffect(() => {
    if (location.lat && location.lon) {
      fetchWeatherDataByLocation(location.lat, location.lon);
    }
  }, [location]);

  // Fetch weather data by city name or zip code
  const fetchWeatherData = async (query) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Location not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null); // Reset the error message if data is found
    } catch (error) {
      setError('Please provide a correct city name or zip code.');
      console.error('Error fetching weather data:', error);
    }
  };

  // Fetch weather data by geographic coordinates
  const fetchWeatherDataByLocation = async (lat, lon) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Location not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null); // Reset the error message if data is found
    } catch (error) {
      setError('Unable to retrieve weather data for your location.');
      console.error('Error fetching weather data:', error);
    }
  };

  // Handle input change in the search bar
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle form submission for the search
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(inputValue);
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container img={img}>
        <Overlay theme={theme} />
        <ToggleButton onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </ToggleButton>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Enter city or zip code"
            value={inputValue}
            onChange={handleInputChange}
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
        {error && <p>{error}</p>}
        {weatherData && (
          <WeatherCard>
            <Header>{weatherData.name}</Header>
            <MainInfo>
              <Temp>{Math.round(weatherData.main.temp)}°C</Temp>
              <DateAndTime>Time: {currentTime.toLocaleTimeString()}</DateAndTime>
              <DateAndTime>Date: {currentTime.toLocaleDateString()}</DateAndTime>
            </MainInfo>
            <WeatherDetails>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
              <p>Description: {weatherData.weather[0].description}</p>
            </WeatherDetails>
          </WeatherCard>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
