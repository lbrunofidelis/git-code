import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import '../styles/App.css';

const data = {
	labels: [
		'Alta',
		'Média',
		'Baixa'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class Pizza extends Component {
    
    render() {
        return ( 
            <Pie data={data} />
		)
	};
}
export default Pizza;