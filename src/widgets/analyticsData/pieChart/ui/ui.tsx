'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
    const data = {
        labels: ['Туристы', 'Подростки', 'Родители'],
        datasets: [
            {
                label: 'Сегмент',
                data: [40, 40, 20],
                backgroundColor: ['#528D3D', '#8AB873', '#EBF5E9'],
                borderColor: ['transparent'],
            },
        ],
    };

    const options = {};
    //TODO: change style for charts
    //TODO: chsnge info for chart
    return (
        <div className="mb-14">
            <span className="text-xl text-black leading-5 font-extrabold mb-5">Сегменты</span>
            <div className="flex  gap-10">
                <div className="w-72 h-72">
                    <Doughnut data={data} options={options}></Doughnut>
                </div>
                <div className='flex items-center mt-10'>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex gap-2'>
                            <div className="w-4 h-4 bg-darkGreen rounded-full mt-2" />
                            <div className="flex flex-col">
                                <span className="text-xl text-black">Туристы - 40%</span>
                                <span className='text-lg text-lightGray'>400 из 1000 билетов</span>
                            </div>
                        </li>
                        <li className='flex gap-2'>
                            <div className="w-4 h-4 bg-lightGreen rounded-full mt-2" />
                            <div className="flex flex-col">
                                <span className="text-xl text-black">Подростки - 40%</span>
                                <span className='text-lg text-lightGray'>400 из 1000 билетов</span>
                            </div>
                        </li>
                        <li className='flex gap-2'>
                            <div className="w-4 h-4 bg-superLightGreen rounded-full mt-2" />
                            <div className="flex flex-col">
                                <span className="text-xl text-black">Родители - 20%</span>
                                <span className='text-lg text-lightGray'>200 из 1000 билетов</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
