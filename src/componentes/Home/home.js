import React from 'react';
import "./style-capa.css";
import "./style-section-produtos.css";
import "./style-sobre.css";

import Header from '../Header/header';
import Footer from '../Footer/footer';

export default function Home(){
    return(
        <>
            <Header/>
            <div id="capa_id" className="section_capa">
                <h1>Preços baixos em
                <br/><br/>
                <span>óculos de 
                <br/>    
                grau e de sol</span> 
                <br/><br/>
                    Você só encontra aqui</h1>
            </div>         
            <div className="section_produtos">
                <div id="produtos_id" className="topo_section">
                    <h2>Nossos Produtos</h2>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
                    Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                </div>
                <div className="vitrine_oculos">
                    <div className="apresentation_vitrine">
                        <h3>Óculos de Grau</h3>
                        <img src="/assets/oculos01.png" alt="Óculos de Grau"/>
                        <p>A partir de R$ 500,00</p> 
                    </div>
                    <div className="apresentation_vitrine">
                        <h3>Óculos Transition</h3>
                        <img src="/assets/oculos02.png" alt="Óculos de Grau"/>
                        <p>A partir de R$ 750,00</p>
                    </div>
                    <div className="apresentation_vitrine">
                        <h3>Óculos de Sol</h3>
                        <img src="/assets/oculos03.png" alt="Óculos de Grau"/>
                        <p>A partir de R$ 700,00</p>
                    </div>
                    <div className="apresentation_vitrine">
                        <h3>Óculos Infantil</h3>
                        <img src="/assets/oculos04.png" alt="Óculos de Grau"/>
                        <p>A partir de R$ 350,00</p>
                    </div>
                </div>
                <div className="bottom-section">
                    <p>Todos os nossos produtos incluem:</p>
                    <ul>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>  
            </div>
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
            <Footer/>
        </>      
    );
}      