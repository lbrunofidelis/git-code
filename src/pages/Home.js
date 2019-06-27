import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Pizza from '../components/Pizza'

function Home() {
    return (
        <div className="App">
            
            <header className="App-header">
            <Sidebar/>
                
                <p>
                    Home
                </p>
                <div className = "Grafico">
                <Pizza/>
            </div>
            </header>

        </div>
    );
}

export default Home;
