import React, { Component } from 'react';
import Radar from '../components/Radar';
import Home from './Home';

class RadarPage extends Component {

    render() {
        return(
            <Home>
                <Radar />
            </Home>
        )
    }

}

export default RadarPage;
