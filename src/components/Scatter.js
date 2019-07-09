import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';
import '../styles/App.css';
import UFs from '../data/regiao'
import gera_cor from '../funcoes/geraCor'
defaults.global.defaultFontStyle = 'bold';

defaults.global.defaultFontSize = 15;
var data = {


    datasets: [

    ]


};




class ScatterGraph extends Component {
    constructor() {
        super()
        this.state = {
            estados: []
        }

    }

    componentDidMount() {
        var uf = []
        var renda = []
        var escolar = []
        for (var key in UFs["UFs"]) {
    
            uf.push((UFs['UFs'][key]['label']))
            renda.push(UFs['UFs'][key]['renda_media'])
            escolar.push(UFs['UFs'][key]['escolaridade_media'])
    
        }
        var cor;
        var j = 0;
        for (var aux in uf) {
    
            cor = gera_cor();
            data.datasets.push(
    
                {
                    label: `${uf[aux]}`,
                    backgroundColor: `${cor}`,
                    pointBorderColor: `${cor}`,
                    pointBackgroundColor: `${cor}`,
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: `${cor}`,
                    pointHoverBorderColor: `${cor}`,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [
                        { x: Math.round(renda[j] * 100) / 100, y: Math.ceil(escolar[j] * 100) / 100 },
                    ]
                },
    
            )
            j++;
        }
        var options = {
    
            title: {
                display: true,
                text: "Renda x Escolaridade"
            },
    
            tooltips: {
                callbacks: {
    
                    label: function (tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';
                        label = label + " X: " + data.datasets[tooltipItem.datasetIndex].data[0].x + " Y:" + data.datasets[tooltipItem.datasetIndex].data[0].y
                        return label;
                    }
                }
            }
    
        };

        for (var code in data.datasets) {
            console.log(data.datasets[code].data[0])
        }

        this.setState({
            options
        })
    }

    render() {

        return (
            <Scatter data={data} options={this.state.options} />
        )
    };
}
export default ScatterGraph;