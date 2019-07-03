import React, { Component } from 'react';
import Pizza from '../components/Pizza';
import Home from './Home';
import '../styles/App.css';
class PizzaPage extends Component {


    render() {
        return(
            <Home>
                <div className = "Grafico">
                <Pizza  />
                </div>
                <div className ="btnBar">
                <button className="btn Pizza-btn">
                    Distribuição de população
                </button>
                <button className="btn Pizza-btn">
                    Acúmulo de renda
                </button>
                <button className="btn Pizza-btn">
                    Acúmulo de escolaridade
                </button>
                </div>
            </Home>
        )
    }

}

export default PizzaPage;
