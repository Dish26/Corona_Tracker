/*
import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed , recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
    const fetchAPI= async() => {
        setDailyData( await fetchDailyData());
      }
      //calling the fetcAPI fntn below
      fetchAPI();
    }, []);

 // responsible for the global showing of the data
    const lineChart = (
        dailyData.length  ? 
     ( <Line  data={{
         //labels and dataSets need to be an array 
         //this is a map n returns an array of all the dates
       labels: dailyData.map(({date}) => date),
       dataSets: [{
           data: dailyData.map(({confirmed }) => confirmed ),
           label: 'Infected',
           borderColor: 'grey',
           //fill the space below the chart
           fill: true,
        
       }, {
        data: dailyData.map(({deaths}) => deaths),
        label: 'Deaths',
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        //fill the space below the chart
        fill: true,
       }],

      }}
      />) : null
    )

    const barChart =(
        confirmed 
        ? (
            //2 braces in data, 1 for making the code dynamic, 2 to open an object
            <Bar
            data={{
             labels: ['Infected', 'Recovered', 'Deaths'],
             dataSets: [{
                label: 'People',
                backgroundColor: ['rgba(0, 0, 0, 255, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(255, 0, 0, 0.7)' ],
                data: [confirmed .value, recovered.value, deaths.value]
            }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current state in ${country}`}
            }}
            />
        ) : null
    )

    return(
      <div className={styles.container}>
      {country ? barChart : lineChart}
      </div>   
    )
}

export default Chart; */


  
import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed , recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed  ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed ),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;