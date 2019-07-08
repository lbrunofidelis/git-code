import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import '../styles/App.css';
defaults.global.defaultFontStyle = 'bold';

defaults.global.defaultFontSize = 15;
const data = {


    datasets: [
        {
            label: ["DF"],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'rgba(75,132,197,0.85)',
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
                { x: 20, y: 20 },
                { x: 59, y: 49 },
                { x: 80, y: 90 },

            ],

        },

        {
            label: ["GO"],
            fill: false,
            backgroundColor: 'rgb(255, 0, 160)',
            pointBorderColor: 'rgb(255, 0, 160)',
            pointBackgroundColor: 'rgba(75,132,197,0.85)',
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
                { x: 20, y: 10 },
            ]

        },


    ]


};

const options = {

    title: {
        display: true,
        text: "renda x escolar"
    },
    tooltips: {
        callbacks: {
            label: function (tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].label || '';
                return label;
            }
        }
    }

};


class ScatterGraph extends Component {
    render() {
        return (
            <Scatter data={data} options={options} />
        )
    };
}
export default ScatterGraph;