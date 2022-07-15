import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "../../modules/CityComponent";
import WeatherComponent from "../../modules/WeatherInfoComponent";
import Header from "../Header/Header";
import "./homepage.css";

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

// fake api of weather
const Homepage = ({ setLoginUser }) => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
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
      <div
        style={{
          background: "red",
          border: "1px solid #000000",
          color: "#fff",
          fontSize: "1.25rem",
          padding: "0.5rem",
          margin: "0.5rem 0",
          borderRadius: "8px",
          outline: "none",
          cursor: "pointer",
          position: "absolute",
          top: "5%",
          left: "90%",
        }}
        onClick={() => setLoginUser({})}
      >
        Logout
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

export default Homepage;
