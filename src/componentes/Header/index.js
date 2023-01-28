import React from 'react';
import './style.css';

export default function Header(){
    return(
        <header className="Header">
            <div className="black-line"><p>.</p></div>
            <div class="header">
                <div className="Logo">
                    <a href="../../#header_id"><img id="logo_id" src="/assets/logo.png" alt="Logo" title="Loja Ótica-Vida"/></a>
                    <div className="input">
                        <img id="lupa_id" for="input_search" src="/assets/lupa.png" alt="Pesquisar" title="Pesquisar"/>
                        <input type="search" id="input_search" placeholder="Procurar..."/>
                        <a id="carrinho_id" for="input_search" href="#"><img src="assets/carrinho-carrinho.png" alt="Carrinho_compras" title="Carrinho de Compras"/></a>
                        <a id="perfil_id" for="input_search" href="#"><img src="assets/perfil.png" alt="Perfil_usuário" title="Perfil do Usuário"/></a>
                    </div>
                    
                </div>
                <div className="Navegation_user_cart">
                    <div className="Navegation">
                        <a href="../../#produtos_id">PRODUTOS</a>
                        <a href="../../#sobre_id">SOBRE</a>
                        <a href="../../#footer_id">CONTATO</a> 
                    </div>
                    <div className="user_cart">
                        <a id="carrinho2_id" href="#"><img src="/assets/carrinho-carrinho.png" alt="cart_icon" title="Carrinho de Compras"/></a>
                        <a id="perfil2_id" href="#"><img src="/assets/perfil.png" alt="user_icon" title="Seu Perfil"/></a>
                        <img id="Navegation_list" src="/assets/Lista_icon.png" alt="Navegation_list" title="Navegação"/>
                    </div>   
                </div> 
            </div> 
        </header> 
    );
}      