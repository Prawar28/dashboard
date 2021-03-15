import React, {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'
import * as s from './Chart.styles';

function Chart() {

    const [years, setYear] = useState(10);
    const [arr, setArr] = useState(Array.from({length: 10}, (_, index) => index + 1))

    useEffect(() => {
        
        let new_arr = Array.from({length: years}, (_, index) => index + 1);
        setArr(new_arr);
    }, [years]);

    return (
        <s.Chart>
                    
                    <s.Canvas>
                        <s.buttonPallete>
                            <s.cardButton end = {1} selected={true}>10y</s.cardButton>
                            <s.cardButton end = {0}>20y</s.cardButton>
                            <s.cardButton end = {2}>30y</s.cardButton>
                        </s.buttonPallete>
                        
                        <Bar
                            data = {
                                {   
                                    labels: arr,
                                    datasets: [
                                        {
                                            data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
                                            backgroundColor: 'rgb(0,0,255, 0.75)',
                                            barThickness: 'flex',
                                            
                                        }
                                    ]
                                }
                            }
                            options = {{
                                responsive: true,
                                title: {
                                    display: true,
                                    text: 'Annual Projection'
                                },

                                legend: {
                                    display: false
                                },

                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: 'true'
                                        }
                                    }]
                                }
                            }}
                        ></Bar>
                    </s.Canvas>
        </s.Chart>
    )
}

export default Chart
