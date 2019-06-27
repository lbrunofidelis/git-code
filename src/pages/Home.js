import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Pizza from '../components/Pizza'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Sidebar/>
                    
                    <Link to="/radar">Radar</Link>

                    <Link to="/pizza">Pizza</Link>

                    <div className = "Grafico">
                        {this.props.children}
                    </div>
                    
                </header>
    
            </div>
        );
    }
}

export default Home;
