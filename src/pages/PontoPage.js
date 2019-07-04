import React, { Component } from 'react';
import Ponto from '../components/Ponto';
import Home from './Home';
import '../styles/App.css';
class RadarPage extends Component {

    render() {
        return(
            <Home>
                <div className = "Grafico">
                    <Ponto  />
                </div>
                
            </Home>
        )
    }

}

export default RadarPage;
