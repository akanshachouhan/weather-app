import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "../../modules/CityComponent";
import WeatherComponent from "../../modules/WeatherInfoComponent";
import Header from "../Header/Header";
// import "./homepage.css"
import { useHistory } from "react-router-dom";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/react-weather-app/icons/night.svg",
  "02d": "/react-weather-app/icons/day.svg",
  "02n": "/react-weather-app/icons/cloudy-night.svg",
  "03d": "/react-weather-app/icons/cloudy.svg",
  "03n": "/react-weather-app/icons/cloudy.svg",
  "04d": "/react-weather-app/icons/perfect-day.svg",
  "04n": "/react-weather-app/icons/cloudy-night.svg",
  "09d": "/react-weather-app/icons/rain.svg",
  "09n": "/react-weather-app/icons/rain-night.svg",
  "10d": "/react-weather-app/icons/rain.svg",
  "10n": "/react-weather-app/icons/rain-night.svg",
  "11d": "/react-weather-app/icons/storm.svg",
  "11n": "/react-weather-app/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;



const Home = ({ setLoginUser }) => {
 
  //logout 
  let history = useHistory();
const logoutHandler =()=>{
  history.push("/login");
}

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  //caling api
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    updateWeather(response.data);
  };

  return (
    <>
      <div className="myData">
        <Header />
      </div>
      <div style={{ background: "red",
    border: "1px solid #000000",
    color: "#fff",
    fontSize: "1.25rem",
    padding: "0.5rem",
    margin: "0.5rem 0",
    borderRadius: "8px",
    outline: "none",
    cursor: "pointer",
     position: "absolute",
    top:"5%",
    left:"90%"}} onClick={logoutHandler} >Logout
    </div>

      <Container style={{ position: "absolute", top: "14%", left: "35%" }}>
        <AppLabel>React Weather App</AppLabel>
        {city && weather ? (
          <WeatherComponent weather={weather} city={city} />
        ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        )}
      </Container>
    </>
  );
};

export default Home;
