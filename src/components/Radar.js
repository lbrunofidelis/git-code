import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

const radar = {
    labels: ['Renda', 'Escolaridade', 'Idade média', 'Horas de trabalho'],
    options: {
        scale: {
          pointLabels: {
            fontSize: 20
          }
        }
      },

    datasets: [
        {
            label: 'Pessoa 1',
            
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81]
        },
        {
            label: 'Pessoa 2',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19]
        }
    ]
}

class RadarGraph extends Component {

    render() {
        return (
            <Radar data={radar} pointLabelFontSize = {20} />
        )
    }
}

export default RadarGraph;
