import React from 'react';
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

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const data = {
    labels: ['Recovered', 'Deaths', 'Infected'],
    datasets: [
        {
            label: 'Global Stats',
            data: [0, 9, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: 'Global 2 Stats',
            data: [3, 5, 6],
            backgroundColor: 'rgba(255, 199, 32, 0.2)',
            borderColor: 'rgba(250, 200, 40, 1)',
            borderWidth: 1,
        },
    ],
};

export function RadarChart() {
    return <div style={{height: "600px", width: "600px"}}>
        <Radar data={data} />;
    </div>
}
