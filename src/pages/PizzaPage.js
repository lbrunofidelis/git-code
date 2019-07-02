import React, { Component } from 'react';
import Pizza from '../components/Pizza';
import Home from './Home';

class PizzaPage extends Component {


    render() {
        return(
            <Home>
                <Pizza />
                <button className="btn Pizza-btn">
                    Distribuição de população
                </button>
                <button className="btn Pizza-btn">
                    Acúmulo de renda
                </button>
                <button className="btn Pizza-btn">
                    Acúmulo de escolaridade
                </button>
            </Home>
        )
    }

}

export default PizzaPage;
