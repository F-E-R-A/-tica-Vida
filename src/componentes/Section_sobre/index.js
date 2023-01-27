import React from 'react';
import './style.css';

export default function Sobre(){
    return(
        <div id="sobre_id" className="sobre">
            <div className="intro_section">
                <h2>Quem somo nós?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Ótica vida iniciou suas atividades focada 
                   no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente
                   bom atendimento, qualidade e preço baixo.</p>
            </div>
            <div className="exposicao">
                <div className="img_farmacia">
                    <img src="/assets/loja.png" alt="IMG-Prateleira"/>
                </div>
                <div className="filiais_atendimento">
                    <h3>Nossas Filiais</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className="filiais_atendimento">
                    <h3>Atendimento Flexível</h3>
                    <p>Nossa equipe é trienada para te atender</p>
                </div>
                <div className="img_farmacia">
                    <img src="/assets/atendimento.png" alt="IMG-Prateleira"/>
                </div>
            </div>
            <div className="exposicao_2">
                <div className="img_farmacia">
                    <img src="/assets/loja.png" alt="IMG-Prateleira"/>
                </div>
                <div className="filiais_atendimento">
                    <h3>Nossas Filiais</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className="img_farmacia">
                    <img src="/assets/atendimento.png" alt="IMG-Prateleira"/>
                </div>
                <div className="filiais_atendimento">
                    <h3>Atendimento Flexível</h3>
                    <p>Nossa equipe é trienada para te atender</p>
                </div>
            </div> 
        </div>
    );
} 