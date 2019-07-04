import React, { Component } from 'react';
import Pizza from '../components/Pizza';
import Home from './Home';
import '../styles/App.css';
import dados from'../data/dados'
class PizzaPage extends Component {
	constructor(){
		super()
		this.state = {estado:[],data:[]}
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
	}
    handleClick() {
        var x= []
        for (var key in dados["dados"]){
        x.push(dados["dados"][key]["quantidade"])
        }
        console.log("ola")
        this.setState(state => ({
            data:x
          }));
      }
      handleClick2() {
        var y= []
        for (var key in dados["dados"]){
        y.push(dados["dados"][key]["escolaridade"])
        }
        console.log("ola2")
        this.setState(state => ({
            data:y
          }));
      }
      handleClick3() {
        var z= []
        for (var key in dados["dados"]){
        z.push(dados["dados"][key]["renda"])
        }

        this.setState(state => ({
            data:z
          }));
      }
    render() {
        {

		}
        return(
            <Home>
                <div className = "Grafico">
                <Pizza dados={dados} data={this.state.data}/>
                </div>
                <div className ="btnBar">
                <button className="btn Pizza-btn" onClick={this.handleClick}>
                    Distribuição de população
                </button>
                <button className="btn Pizza-btn" onClick={this.handleClick2}>
                    Acúmulo de escolaridade
                </button>
                <button className="btn Pizza-btn" onClick={this.handleClick3}>
                Acúmulo de renda
                </button>
                </div>
            </Home>
        )
    }

}

export default PizzaPage;
