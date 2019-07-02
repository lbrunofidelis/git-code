import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
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

function Graphs() {

    return (
        <div>
            <h2>Tela com os gráficos</h2>
            <h4>Exemplo Gráfico Pizza:</h4>
            <Pie data={data} />
        </div>
    );
}

export default Graphs;
