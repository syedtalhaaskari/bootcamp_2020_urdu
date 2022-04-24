import React from 'react'
import Navbar from "./Components/Navbar"
import "./App.css";
import { RadarChart } from './Components/Chart/RadarChart';
import BottomNavbar from './Components/BottomNavbar';

const App = props => {

    return (
        <div>
            <Navbar />
            <RadarChart />
            <BottomNavbar />
        </div>
    )
}

export default App