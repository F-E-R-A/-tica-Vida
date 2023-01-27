import React from 'react';
import './style.css';

export default function Header(){
    return(
        <header className="Header">
            <div className="black-line"><p>.</p></div>
            <div class="header">
                <div className="Logo">
                    <a href="#"><img src="/assets/logo.png" alt="Logo"/></a>
                </div>
                <div className="Navegation">
                    <a href="../Section_produtos/#produtos_id">PRODUTOS</a>
                    <a href="../Section_sobre/#sobre_id">SOBRE</a>
                    <a href="../Footer/#footer_id">CONTATO</a> 
                </div>
            </div>
        </header> 
    );
}     