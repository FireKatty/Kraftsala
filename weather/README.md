Weather App

Description

The Weather App is a simple web application that allows users to check the weather information for different locations. Users can enter a city name or zip code to fetch the current weather data, including temperature, humidity, wind speed, and weather description.

Features

Display weather information for a single location entered by the user.
Automatically fetch weather data based on the user's current location (if permission is granted).
Toggle between light and dark themes for better readability.

Technologies Used

React.js: Frontend library for building user interfaces.
Styled Components: For styling the UI components using CSS-in-JS.
OpenWeatherMap API: To fetch real-time weather data based on user queries.
Geolocation API: For fetching the user's current location (latitude and longitude).

Installation

1.Clone the repository:
git clone https://github.com/username/weather-app.git

2.Navigate to the project directory:
cd weather

3.Install dependencies:
npm install

4.Create a .env file in the root directory and add your OpenWeatherMap API key: 
REACT_APP_API_KEY=your_api_key_here

5.Start the development server:
npm start

6.Open your browser and navigate to http://localhost:3000 to view the Weather App.

Usage

Enter a city name or zip code in the search bar and press the "Search" button to fetch weather data for that location.
Toggle between light and dark themes using the "Dark Mode" / "Light Mode" button.
