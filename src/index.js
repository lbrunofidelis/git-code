import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import { RadarPage, PizzaPage, PontoPage, Inicio,ScatterPage } from './pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Inicio} />
            <Route path="/radar" component={RadarPage} />
            <Route path="/pizza" component={PizzaPage} />
            <Route path="/Inicio" component={Inicio} />
            <Route path="/scatter" component={ScatterPage} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
