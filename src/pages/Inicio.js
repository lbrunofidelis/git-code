import React, { Component } from 'react';

import Home from './Home';
import '../styles/App.css';
class Inicio extends Component {


    render() {
        return(
            <Home>
                <div className="logo">
                    <img src="images/gitcode.png"></img>
                </div>
                
                <div className = "inicio">
                    <h1 className ="Titulo">
                        Desenvolvimento de software
                    </h1>
                    <div>
                        <h3 className ="Sub-titulo">
                            Introdução
                         </h3>
                            <p className = "Paragrafo">
                                Este site foi desenvolvido como trabalho final para a disciplina de desenvolvimento de software.
                            </p>
                    </div>
                    <div>
                    <h3 className ="Sub-titulo">
                        Metodologia
                    </h3>
                        <p className = "Paragrafo">
                            A base aplicação foi desenvolvida utilizando da linguagem JavaScript e pela biblioteca React JS.
                        </p>
                    </div>
                    <div>
                    <h3 className ="Sub-titulo">
                        Objetivos
                    </h3>
                        <p className = "Paragrafo">
                            Os objetivos almejados com o desenvolvido dessa aplicação são expor, em forma gráfica, os dados elaborados por outros integrantes da disciplina.
                        </p>
                    </div>  
                    <div>
                    <h3 className ="Sub-titulo">
                        Integrantes
                    </h3>
                        <p className = "Paragrafo">
                        Luis Bruno / 140169695 - <a target="_blank" href="https://www.github.com/lbrunofidelis">@lbrunofidelis</a><br/>
                        Hugo Aragão / 160124581 - <a target="_blank" href="https://www.github.com/codehg">@codehg</a><br/>
                        Andre Eduardo / 160111978 - <a target="_blank" href="https://www.github.com/Andre-Eduardo">@Andre-Eduardo</a>
                        </p>
                    </div>  
                </div>
                
            </Home>
        )
    }

}

export default Inicio;
