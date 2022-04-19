import React from 'react'
import Navbar from "./Components/Navbar"
import "./App.css";
import { RadarChart } from './Components/Chart/RadarChart';

const App = props => {

    return (
        <div>
            <Navbar />
            <RadarChart />
        </div>
    )
}

export default App