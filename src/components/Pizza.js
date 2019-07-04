import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import '../styles/App.css';



class Pizza extends Component {
	constructor(){
		super()
		this.state = {estado:[]}
		
	}

    render() {
		{
			var x=[]
			var y=[]
			for (var key in this.props.dados["dados"]){
			x.push(this.props.dados["dados"][key]["Estado"])
			y.push(this.props.dados["dados"][key]["quantidade"])
			
			}
			var data =[]
			console.log(this.props.data)
			if (this.props.data.length > 0){
				y = this.props.data
			}

		}
		var data = {
			labels: x,
			datasets: [{
				data: y,
				backgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56',
				'#FF6560',
				'#36B2EB',
				'#CCCE56',
				'#FC6404',
				'#10B2EB',
				'#BFAE56'
				],
				hoverBackgroundColor: [
				'#FF6384',
				'#36A2EB',
				'#FFCE56',
				'#FF6560',
				'#36B2EB',
				'#CCCE56',
				'#FC6404',
				'#10B2EB',
				'#BFAE56'
				]
			}]
		};
			
        return ( 
            <Pie data={data} />
		)
	};
}
export default Pizza;