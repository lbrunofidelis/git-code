import React, { Component } from 'react';
import ScatterGraph from '../components/Scatter';
import Home from './Home';

class ScatterPage extends Component {

    render() {
        return(
            <Home>
                <ScatterGraph />
            </Home>
        )
    }

}

export default ScatterPage;
