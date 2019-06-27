import React, { Component } from 'react';
import Radar from '../components/Radar';
import Home from './Home';

class RadarPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Home>
                <Radar />
            </Home>
        )
    }

}

export default RadarPage;
