import React, { useContext, useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import CountryContext from '../../../context/CountryContext';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
);

const initData = {
    labels: ['Infected', 'Recovered', 'Deaths'],
    datasets: [
        {
            label: 'Stats',
            data: [0, 0, 0],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ],
};

export function RadarChart() {
    let [data, setData] = useState(() => initData)
    let { countryName, countryData } = useContext(CountryContext);

    useEffect(() => {
        let { confirmed, recovered, deaths } = countryData
        setData(() => ({
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
                {
                    label: `${countryName} Stats`,
                    data: [confirmed, recovered, deaths],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
            ],
        }))
    }, [countryData])

    return <div style={{ height: "600px", width: "600px", margin: "20px auto 0" }}>
        <Radar data={data} />
    </div>
}
