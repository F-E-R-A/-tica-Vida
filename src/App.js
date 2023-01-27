import React from 'react';
import './App.css';
import Header from './componentes/Header/';
import Section_Capa from './componentes/Section_Capa/';
import Section_Produtos from './componentes/Section_produtos/';
import Section_Sobre from './componentes/Section_sobre/';
import Footer from './componentes/Footer/';

function App(){
    return(
        <div className="App">
            <header>
                <div className="header">
                    <Header/>
                </div>
            </header>
            <main>
                <section className="section_capa">
                    <Section_Capa/>
                </section>
                <section className="section_produtos">
                    <Section_Produtos/>
                </section>
                <section className="section_sobre">
                    <Section_Sobre/>
                </section>
            </main>
            <footer>
                <section className="footer">
                    <Footer/>
                </section>
            </footer>
        </div>
        
    );
}

export default App;