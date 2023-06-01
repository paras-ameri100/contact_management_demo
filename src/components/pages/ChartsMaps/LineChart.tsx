import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
};

interface chartData {
  label: string,
  value: number | any
}

export default function LineChart() {

  const { data, isLoading } = useQuery(["cases"], () => {
    return Axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(res => res.data);
  });

  let finalCaseArr = [] as chartData[];
  let finalDeathArr = [] as chartData[];
  let finalRecoveredArr = [] as chartData[];

  if (!isLoading) {
    console.log(data);

    let tempArr1 = Object.entries(data.cases);
    let tempArr2 = Object.entries(data.deaths);
    let tempArr3 = Object.entries(data.recovered);

    finalCaseArr = tempArr1.map(item => {
      return {
        "label": item[0],
        "value": item[1]
      }
    })

    finalDeathArr = tempArr2.map(item => {
      return {
        "label": item[0],
        "value": item[1]
      }
    })

    finalRecoveredArr = tempArr3.map(item => {
      return {
        "label": item[0],
        "value": item[1]
      }
    })

  }

  const labels = finalCaseArr.map(item => item.label)
  const chartValues1 = finalCaseArr.map(item => item.value)
  const chartValues2 = finalDeathArr.map(item => item.value)
  const chartValues3 = finalRecoveredArr.map(item => item.value)

  const dataCases = {
    labels,
    datasets: [
      {
        label: 'Cases',
        data: chartValues1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Deaths',
        data: chartValues2,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Recovered',
        data: chartValues3,
        borderColor: 'rgb(0, 255, 127)',
        backgroundColor: 'rgba(0, 255, 127, 0.5)',
      }
    ]

  }

  return (
    <>
      <h3 className='mb-3 mt-5 text-xl font-semibold'>Date wise Covid data</h3>
      {!isLoading && <Line className='mb-5' options={options} data={dataCases} />}
    </>
  )
}

