import React, { Component } from 'react';
import Pizza from '../components/Pizza';
import Home from './Home';
import '../styles/App.css';
import Populacao from'../data/populacao'
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
        for (var key in Populacao["Populacao"]){
        x.push(Populacao["Populacao"][key]["qtd_pessoas"])
        }
        
        this.setState(state => ({
            data:x
          }));
      }
      handleClick2() {
        var y= []
        for (var key in Populacao["Populacao"]){
        y.push(Populacao["Populacao"][key]["escolaridade_media"])
        }
        
        this.setState(state => ({
            data:y
          }));
      }
      handleClick3() {
        var z= []
        for (var key in Populacao["Populacao"]){
        z.push(Populacao["Populacao"][key]["renda_medida"])
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
                <Pizza Populacao={Populacao} data={this.state.data}/>
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
