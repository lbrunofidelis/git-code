import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import { RadarPage, PizzaPage, PontoPage } from './pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inicio from './pages/Inicio';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={RadarPage} />
            <Route path="/radar" component={RadarPage} />
            <Route path="/pizza" component={PizzaPage} />
            <Route path="/Inicio" component={Inicio} />
            <Route path="/ponto" component={PontoPage} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
