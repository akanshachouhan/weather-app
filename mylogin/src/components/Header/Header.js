import React from 'react'
import ReactNavbar from 'overlay-navbar/dist/lib/ReactNavbar';
import logo from "../../images/ac.png";
import { FaUserAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div>
        <ReactNavbar
      navColor1="white"
      navColor2="hsl(219, 48%, 8%)"
      burgerColor="hsl(250, 100%, 75%)"
      burgerColorHover="hsl(250, 100%, 75%)"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Cards"
      link4Text="Todos"
      link1Url="/home"
      link2Url="/about"
      link3Url="/cards"
      link4Url="/todos"
      link1ColorHover="white"
      link1Color="HSL(250, 100%, 75%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="HSL(250, 100%, 75%)"
      profileIconColorHover="white"
    />
    </div>
  )
}
