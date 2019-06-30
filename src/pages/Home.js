import React, { Component } from 'react';

import '../styles/App.css';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Sidebar/>
                    <div className = "Grafico">
                        {this.props.children}
                    </div>
                    
                </header>
                <div className ="Footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;
