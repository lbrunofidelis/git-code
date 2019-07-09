import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import Populacao from '../data/populacao_radar';

class RadarGraph extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
    }

    componentDidMount() {
        
    }

    render() {
        {
            var radarData = Populacao;
            console.log(radarData);
            var radar = {
                labels: ['Quantidade (em milhão)', 'Renda (em centenas de R$)', 'Escolaridade'],
                options: {
                    scale: {
                        pointLabels: {
                            fontSize: 20
                        }
                    }
                    },
            
                datasets: [
                    {
                        label: 'Mulheres Negras',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [52932128.0, 460.9398024579703, 6.031404575308214]
                    },
                    {
                        label: 'Mulheres Brancas',
                        
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [49273063.0, 826.2688492087451, 7.428491344246247]
                    },
                    {
                        label: 'Homens Negros',
                        
                        backgroundColor: 'rgba(160,220,181,0.2)',
                        borderColor: 'rgba(160,220,181,1)', 
                        pointBackgroundColor: 'rgba(160,220,181,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(160,220,181,1)',
                        data: [52706937.0, 751.3359246430882, 5.522829129683632]
                    },
                    {
                        label: 'Homes Brancos',
                        
                        backgroundColor: 'rgba(220,220,0,0.2)',
                        borderColor: 'rgba(220,220,0,1)',
                        pointBackgroundColor: 'rgba(220,220,0,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(220,220,0,1)',
                        data: [44173466.0, 1444.328244245086, 7.077574057693368]
                    },
                ]
            }

            for(var key in radar.datasets) {
                radar.datasets[key].data[0] = radar.datasets[key].data[0] / 1000000;
                radar.datasets[key].data[1] = radar.datasets[key].data[1] / 100;
            }

        }
        return (
            <Radar data={radar} pointLabelFontSize = {20} />
        )
    }
}

export default RadarGraph;
