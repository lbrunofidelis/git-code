import React, { Component } from 'react';
import ScatterGraph from '../components/Scatter';
import Home from './Home';
import '../styles/App.css';
class ScatterPage extends Component {

    render() {
        return(
            <Home>
                <div className = "Grafico">
                <ScatterGraph />
                </div>
            </Home>
        )
    }

}

export default ScatterPage;
