import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
function Home() {
    return (
        <div className="App">
            <Sidebar/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Home
                </p>
                <Link to="/graphs">
                    Gráficos
                </Link>
            </header>
        </div>
    );
}

export default Home;
