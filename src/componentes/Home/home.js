import React, { useContext, useState } from 'react';
import "./style-capa.css";
import "./style-section-produtos.css";
import "./style-sobre.css";
import "./style-section-agendamento.css";
import $ from 'jquery';

import Header from '../Header/header';
import Footer from '../Footer/footer';

import { AuthContext } from '../Context/auth';

export default function Home(){
    const { valor } = useContext(AuthContext);
    
    const img_success = "/assets/sucesso.png";
    const img_error = "/assets/fechar.png";
    const ico_loading = "/assets/loading2.gif";

    const[isLoading, setIsLoading] = useState(false);
    const[isMessage, setIsMessage] = useState(false);
    const[message, setMessage] = useState("");
    const[styleMessage, setStyleMessage] = useState("");
    const[icoMessage, setIcoMessage] = useState();

    
    const validarFormulario = () => {
        let dt_agendamento = $("#inp-data").val();
        let horario = $("#select-time").val();
        let comentario = $("#comentario").val();

        //console.log(dt_agendamento);
        //console.log(horario);
        //console.log(comentario);

        if(dt_agendamento == "" || horario == ""){
            console.log("Preeencha todos os campos.");

        } else{
            verificarDisponibilidade(dt_agendamento, horario, comentario);
        }
    }

    const verificarDisponibilidade = async (dt_agendamento, horario, comentario) => {
        try {
            const connection = await fetch("http://192.168.100.230:7000/verificarDisponibilidade", {
                origin: "http://192.168.100.230:3000",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    dt_agendamento: dt_agendamento,
                    horario: horario,
                    comentario: comentario
                })
            });

            const response = await connection.json();

            console.log(response.available);
            

        } catch {
            console.log("Erro ao verificar a disponibilidade.");
        }
    }

    const agendar = async (dt_agendamento, horario, comentario) => {
        try {
            const connection = await fetch("http://192.168.100.230:7000/agendamento", {
                origin: "http://192.168.100.230:3000",
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    dt_agendamento: dt_agendamento,
                    horario: horario,
                    comentario: comentario
                })
            });
            
            const data = await connection.json();
            console.log("Resposta do servidor:", data);

        } catch {
            console.log("Erro na requisição do Agendamento.");
        }
    }

    return (
        <> 
            <Header/>
            <div id="capa_id" className="section_capa">
                <h1>Preços baixos</h1>
            </div>         
            <section className="section_produtos">
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
                        <div className='container-more'>
                            <img src="/assets/whatsapp.png"/>
                            <a href="https://web.whatsapp.com/" target="_blanck">Saiba mais...</a> 
                        </div>                      
                    </div>
                    <div className="apresentation_vitrine">
                        <h3>Óculos Transition</h3>
                        <img src="/assets/oculos02.png" alt="Óculos de Grau"/>
                        <p>A partir de R$ 750,00</p>
                        <div className='container-more'>
                            <img src="/assets/whatsapp.png"/>
                            <a href="https://web.whatsapp.com/" target="_blanck">Saiba mais...</a> 
                        </div> 
                    </div>
                    <div className="apresentation_vitrine">
                        <h3>Óculos de Sol</h3>
                        <img src="/assets/oculos03.png" alt="Óculos de Grau"/>
                        <p>A partir de R$ 700,00</p>
                        <div className='container-more'>
                            <img src="/assets/whatsapp.png"/>
                            <a href="https://web.whatsapp.com/" target="_blanck">Saiba mais...</a> 
                        </div> 
                    </div>
                    <div className="apresentation_vitrine">
                        <h3>Óculos Infantil</h3>
                        <img src="/assets/oculos04.png" alt="Óculos de Grau"/>
                        <p>A partir de R$ 350,00</p>
                        <div className='container-more'>
                            <img src="/assets/whatsapp.png"/>
                            <a href="https://web.whatsapp.com/" target="_blanck">Saiba mais...</a> 
                        </div> 
                    </div>
                    <div className="apresentation_vitrine">
                        <h3>Óculos de Luxo</h3>
                        <img src="/assets/oculos8.png" alt="Óculos de Luxo"/>
                        <p>A partir de R$ 1550,00</p>
                        <div className='container-more'>
                            <img src="/assets/whatsapp.png"/>
                            <a href="https://web.whatsapp.com/" target="_blanck">Saiba mais...</a> 
                        </div> 
                    </div>
                    <div className="apresentation_vitrine">
                        <h3>Óculos de Luxo</h3>
                        <img src="/assets/oculos9.png" alt="Óculos de Luxo"/>
                        <p>A partir de R$ 1100,00</p>
                        <div className='container-more'>
                            <img src="/assets/whatsapp.png"/>
                            <a href="https://web.whatsapp.com/" target="_blanck">Saiba mais...</a> 
                        </div> 
                    </div>
                    <div className="apresentation_vitrine">
                        <h3>Óculos de Luxo</h3>
                        <img src="/assets/oculos10.png" alt="Óculos de Luxo"/>
                        <p>A partir de R$ 1980,00</p>
                        <div className='container-more'>
                            <img src="/assets/whatsapp.png"/>
                            <a href="https://web.whatsapp.com/" target="_blanck">Saiba mais...</a> 
                        </div> 
                    </div>
                    <div className="apresentation_vitrine">
                        <h3>Óculos de Luxo</h3>
                        <img src="/assets/oculos11.png" alt="Óculos de Luxo"/>
                        <p>A partir de R$ 2250,00</p>
                        <div className='container-more'>
                            <img src="/assets/whatsapp.png"/>
                            <a href="https://web.whatsapp.com/" target="_blanck">Saiba mais...</a> 
                        </div> 
                    </div>
                </div>
                <div className="bottom-section">
                    <b>Todos os nossos produtos incluem:</b>
                    <ul type="none">
                        <li>Garantia de 1 ano;</li>
                        <li>Manutenção preventiva;</li>
                        <li>Descontos especiais na compra da segunda unidade;</li>
                        <li>Flexibilidade de pagamento;</li>
                    </ul>
                </div>  
            </section>
            <section id="sobre_id" className="sobre">
                <div className="intro_section">
                    <h2>Quem somo nós?</h2>
                    <p>Fundada em 2001, em Governador Valadares - MG, a Ótica Original iniciou suas atividades focada 
                    no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente
                    bom atendimento, qualidade e preço.</p>
                </div>
                <div className="exposicao">
                    <div id="img_farmacia1" className="img_farmacia"></div>
                    <div className="filiais_atendimento">
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 8 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="filiais_atendimento">
                        <h3>Atendimento Flexível</h3>
                        <p>Nossa equipe é trienada para te atender</p>
                    </div>
                    <div id="img_farmacia2" className="img_farmacia"></div>
                </div>
                <div className="exposicao_2">
                    <div className="img_farmacia">
                        <img src="/assets/Banner1.png" alt="IMG-Prateleira"/>
                    </div>
                    <div className="filiais_atendimento">
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="img_farmacia">
                        <img src="/assets/Banner2.png.png" alt="IMG-Prateleira"/>
                    </div>
                    <div className="filiais_atendimento">
                        <h3>Atendimento Flexível</h3>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                </div> 
            </section>
            <section id="section-agendamento" className='container-agendamento'>
                <form 
                    id="form-agendamento"
                    onSubmit={(e) => e.preventDefault()}>
                    <div className='container-subtitle-agendamento'>
                        <h3>Venha conversar com um especialista presencialmente.</h3>
                        <p>Agende sua visita abaixo:</p>
                    </div>     
                    <div className='container-message'>
                        Teste
                    </div>       
                    <div className='container-form-agendamento'>
                        <div className='container-dia-horario'>
                            <div className='container-data'>
                                <label>Data:</label>
                                <input id="inp-data" type='date'/>
                            </div>
                            <div className='container-horario'>
                                <label>Horário:</label>
                                <select id="select-time">
                                    <option 
                                        value="08:00"
                                        selected>
                                        08:00h
                                    </option>
                                    <option value="09:00">09:00h</option>
                                    <option value="10:00">10:00h</option>
                                    <option value="11:00">11:00h</option>
                                    <option value="13:00">13:00h</option>
                                    <option value="14:00">14:00h</option>
                                    <option value="15:00">15:00h</option>
                                    <option value="16:00">16:00h</option>
                                    <option value="17:00">17:00h</option>
                                    <option value="18:00">18:00h</option>
                                </select>
                            </div>
                            <div className='container-dia'>
                                <label>Dia:</label>
                                <select 
                                    id="select-dia"
                                    disabled>
                                    <option value="">Segunda-Feira</option>
                                    <option value="">Terça-Feira</option>
                                    <option value="">Quarta-Feira</option>
                                    <option value="">Quinta-Feira</option>
                                    <option value="">Sexta-Feira</option>
                                    <option value="">Sábado</option>
                                </select>
                            </div>
                        </div>
                        <div className='container-comentario-and-buttons'>
                            <textarea id="comentario" placeholder='Deixe uma observação aqui...'></textarea>
                            <div className='container-buttons'>
                                <button 
                                    id="btn-verificar"
                                    onClick={() => validarFormulario()}>
                                    Verificar disponibilidade
                                </button>
                                <button 
                                    id="btn-agendar">
                                    Agendar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <a href="https://web.whatsapp.com/" target="_blank">
                <div className='popup-atendimento'>
                    <img src="/assets/whatsapp.png" alt=""/>
                    <p>Fale conosco</p>
                </div>
            </a>        
            <Footer/>
        </>      
    );
}      