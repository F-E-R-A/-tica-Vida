import React from 'react';
import './style.css';

export default function Section_Produtos(){
    return(
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
                    <div className="icon_preco">
                        <img src="/assets/etiqueta-de-preco.png" alt="icon_sale"/>
                        <p>R$ 599,00</p> 
                    </div>
                    <div className="link_comprar">
                        <a className="add_cart" href="#">Adicionar ao carrinho</a>
                        <a className="comprar" href="#">Comprar agora</a>
                    </div>  
                </div>
                <div className="apresentation_vitrine">
                    <h3>Óculos Transition</h3>
                    <img src="/assets/oculos02.png" alt="Óculos de Grau"/>
                    <div className="icon_preco">
                        <img src="/assets/etiqueta-de-preco.png" alt="icon_sale"/>
                        <p>R$ 789,00</p> 
                    </div>
                    <div className="link_comprar">
                        <a className="add_cart" href="#">Adicionar ao carrinho</a>
                        <a className="comprar" href="#">Comprar agora</a>
                    </div>  
                </div>
                <div className="apresentation_vitrine">
                    <h3>Óculos de Sol</h3>
                    <img src="/assets/oculos03.png" alt="Óculos de Grau"/>
                    <div className="icon_preco">
                        <img src="/assets/etiqueta-de-preco.png" alt="icon_sale"/>
                        <p>R$ 650,00</p> 
                    </div>
                    <div className="link_comprar">
                        <a className="add_cart" href="#">Adicionar ao carrinho</a>
                        <a className="comprar"href="#">Comprar agora</a>
                    </div>  
                </div>
                <div className="apresentation_vitrine">
                    <h3>Óculos Infantil</h3>
                    <img src="/assets/oculos04.png" alt="Óculos de Grau"/>
                    <div className="icon_preco">
                        <img src="/assets/etiqueta-de-preco.png" alt="icon_sale"/>
                        <p>R$ 839,90</p> 
                    </div>
                    <div className="link_comprar">
                        <a className="add_cart" href="#">Adicionar ao carrinho</a>
                        <a className="comprar" href="#">Comprar agora</a>
                    </div>    
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
    );
} 