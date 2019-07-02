import React, { Component } from 'react';
import Pizza from '../components/Pizza';
import Home from './Home';

class PizzaPage extends Component {


    render() {
        return(
            <Home>
                <Pizza />
            </Home>
        )
    }

}

export default PizzaPage;
