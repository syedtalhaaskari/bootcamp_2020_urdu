import React from 'react'
import Navbar from "./Components/Navbar"
import "./App.css";
import { RadarChart } from './Components/Chart/RadarChart';
import BottomNavbar from './Components/BottomNavbar';
import { CountryProvider } from './context/CountryContext';
import CardPanel from './Components/Card';

const App = props => {

  return (
    <CountryProvider>
      <div>
        <Navbar />
        <CardPanel />
        <RadarChart />
        <BottomNavbar />
      </div>
    </CountryProvider>
  )
}

export default App