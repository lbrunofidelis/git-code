import React, { Component } from 'react';

import Home from './Home';
import '../styles/App.css';
class Inicio extends Component {


    render() {
        return(
            <Home>
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
                            A  base aplicação foi desenvolvida utilizando da linguagem JavaScript e axiliada pelo framework React JS.
                        </p>
                    </div>
                    <div>
                    <h3 className ="Sub-titulo">
                        Objetivos
                    </h3>
                        <p className = "Paragrafo">
                            Os Objetivos almejados com  o desenvolvido dessa aplicação são de expor em forma grafica, dados elaborados por outros integrantes da disciplina.
                        </p>
                    </div>  
                    <div>
                    <h3 className ="Sub-titulo">
                        integrantes
                    </h3>
                        <p className = "Paragrafo">
                        Luis Bruno / 140169695<br/>
                        Hugo Aragão / 160124581<br/>
                        Andre Eduardo / 160111978
                        </p>
                    </div>  
                </div>
                
            </Home>
        )
    }

}

export default Inicio;
