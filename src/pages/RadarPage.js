import React, { Component } from 'react';
import Radar from '../components/Radar';
import Home from './Home';
import '../styles/App.css';
class RadarPage extends Component {

    render() {
        return(
            <Home>
                <div className = "Grafico">
                <Radar />
                </div>
            </Home>
        )
    }

}

export default RadarPage;
