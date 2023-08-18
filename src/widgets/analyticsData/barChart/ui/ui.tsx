'use client';

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    plugins: {
        
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['Футбол', 'Баскетбол', 'Бокс', 'Хоккей', 'Шахматы'];

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: [60, 35, 80, 15, 65],
            backgroundColor: '#7AAC5C',
        },
    ],
};

export function BarChart() {
    //TODO: change style for charts
    return (
        <div className='mb-10'>
            <span className="text-xl text-black leading-5 font-extrabold mb-5">Предпочтения</span>
            <div className="w-150 h-64">
                <Bar data={data} options={options}></Bar>
            </div>
        </div>
    );
}
