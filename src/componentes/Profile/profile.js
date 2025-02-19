import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import "./style-profile.css";

export default function Profile(){
    const navigate = useNavigate();

    const[isUpdate, setIsUpdate] = useState(false);

    const[msgButtonEdit, setMsgButtonEdit] = useState("Editar");
    const[styleButtonEdit, setStyleButtonEdit] = useState("btn-edit");

    useEffect(() => {
        let fieldset_dados = document.getElementById("fieldset_dados");
        let fieldset_endereco = document.getElementById("fieldset_endereco");

        fieldset_dados.setAttribute("disabled", "disabled");
        fieldset_endereco.setAttribute("disabled", "disabled");
    }, []);

    function habitilarUpdate(){
        setMsgButtonEdit("Atualizar");
        setStyleButtonEdit("btn-update");

        let fieldset_dados = document.getElementById("fieldset_dados");
        let fieldset_endereco = document.getElementById("fieldset_endereco");

        fieldset_dados.removeAttribute("disabled");
        fieldset_endereco.removeAttribute("disabled");

        if(isUpdate === true){
            atualizarDados();
        }

        setIsUpdate(true);
    }

    async function atualizarDados(){
        try {
            const nome = $("#inp-nome").val();
            const email = $("#inp-email").val();
            const telefone = $("#inp-telefone").val();
            const dt_nascimento = $("#inp-dt-nascimento").val();
            const cpf = $("#inp-cpf").val();
            const tipo_logradouro = $("#opt-logradouro").val();
            const nome_logradouro = $("#nome-logradouro").val();
            const numero_logradouro = $("#numero-logradouro").val();

            const connection = await fetch("http://localhost:7000/atualizarDados", {
                origin: "http://localhost:3000",
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    dt_nascimento: dt_nascimento,
                    cpf: cpf,
                    tipo_logradouro: tipo_logradouro,
                    nome_logradouro: nome_logradouro,
                    numero_logradouro: numero_logradouro
                })
            });

            const response = await connection.json();
            console.log(response);

        } catch {
            console.log("Erro ao atualizar os dados.");
        }
    }

    return (
        <div className='container-profile'>
            <div className='line'></div>
            <form 
                id='form-profile'
                onSubmit={(e) => e.preventDefault()}> 
                <div className='container-img'>
                    <a 
                        id="link-home"
                        onClick={() => navigate("/")}>
                        <img src="/assets/logo.png" alt=""/>
                    </a>
                    <button
                        id="btn-user">
                        <img src="/assets/user.png" alt=""/>
                    </button>
                </div>
                <div className='container-logout'>
                    <button id='btn-logout'>
                        <img id='img-logout' src="/assets/logout.png" alt=""/>    
                    </button>
                </div>
                <div className='container-dados'>
                    <fieldset id="fieldset_dados">
                        <legend>Dados pessoais</legend>
                        <div className='container-nome'>
                            <label>Nome:</label>
                            <input 
                                id="inp-nome" 
                                type='text' 
                                name='nome'
                            />
                        </div>
                        <div className='container-email-telefone'>
                            <div className='container-email'>
                                <label>E-mail:</label>
                                <input 
                                    id="inp-email" 
                                    type='email' 
                                    name='email'
                                />
                            </div> 
                            <div className='container-telefone'>
                                <label>Telefone</label>
                                <input 
                                    id="inp-telefone" 
                                    type='text' 
                                    name='telefone'
                                />
                            </div>                       
                        </div>
                        <div className='container-nascimento-cidade'>
                            <div className='container-nascimento'>
                                <label>Nascimentos:</label>
                                <input 
                                    id="inp-dt-nascimento" 
                                    type="date" 
                                    name='dt-nascimento'
                                />
                            </div>
                            <div className='container-cidade'>
                                <label>CPF:</label>
                                <input 
                                    id="inp-cpf" 
                                    type='text' 
                                    name='cpf'
                                />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset id="fieldset_endereco">
                        <legend>Endereço</legend>
                        <div className='container-rua-numero'>
                            <div className='container-logradouro'>
                                <select 
                                    id="opt-logradouro"
                                    name="opt-logradouro">
                                    <option 
                                        value="rua"
                                        selected>
                                        Rua
                                    </option>  
                                    <option value="avenida">Avenida</option>
                                    <option value="estrada">Estrada</option>
                                    <option value="acampamento">Acampamento</option>
                                    <option value="fazenda">Fazenda</option>
                                    <option value="beco">Beco</option>      
                                    <option value="corrego">Córrego</option>
                                    <option value="vila">Vila</option>
                                </select>
                                <input 
                                    id="nome-logradouro" 
                                    type="text" 
                                    placeholder=''
                                />
                                <input 
                                    id="numero-logradouro" 
                                    type='number' 
                                    placeholder='Nº'
                                />
                            </div>
                        </div>
                    </fieldset>
                    <div className='container-buttons'>
                        <button 
                            id="btn-submit"
                            className={styleButtonEdit}
                            onClick={() => habitilarUpdate()}>
                            {msgButtonEdit}
                        </button>
                        <button 
                            id='btn-limpar'
                            type='reset'>
                            Limpar
                        </button>
                        <button 
                            id='btn-voltar'
                            onClick={() => navigate("/")}>
                            Voltar
                        </button>
                    </div>
                </div>
            </form>
            <form 
                id="form-agendamentos"
                onSubmit={(e) => e.preventDefault()}>
                <div className='container-agendamentos'>
                    <table id="tabela-agendamentos">
                        <caption><b>Meus agendamentos</b></caption>
                        <thead>
                            <tr>
                                <th>Registro</th>
                                <th>Data</th>
                                <th>Horário</th>
                                <th>Dia</th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr>
                                <td>02/06/2021 : 23:11</td>
                                <td>02/07/2021</td>
                                <td>10:00h</td>
                                <td>Terça-Feira</td>
                            </tr>
                            <tr>
                                <td>01/07/2023 : 02:11</td>
                                <td>03/07/2023</td>
                                <td>16:00h</td>
                                <td>Sexta-Feira</td>
                            </tr>
                            <tr>
                                <td>01/07/2023 : 02:11</td>
                                <td>03/07/2023</td>
                                <td>16:00h</td>
                                <td>Sexta-Feira</td>
                            </tr>
                            <tr>
                                <td>01/07/2023 : 02:11</td>
                                <td>03/07/2023</td>
                                <td>16:00h</td>
                                <td>Sexta-Feira</td>
                            </tr>
                            <tr>
                                <td>01/07/2023 : 02:11</td>
                                <td>03/07/2023</td>
                                <td>16:00h</td>
                                <td>Sexta-Feira</td>
                            </tr>
                            <tr>
                                <td>01/07/2023 : 02:11</td>
                                <td>03/07/2023</td>
                                <td>16:00h</td>
                                <td>Sexta-Feira</td>
                            </tr>
                            <tr>
                                <td>01/07/2023 : 02:11</td>
                                <td>03/07/2023</td>
                                <td>16:00h</td>
                                <td>Sexta-Feira</td>
                            </tr>
                            <tr>
                                <td>01/07/2023 : 02:11</td>
                                <td>03/07/2023</td>
                                <td>16:00h</td>
                                <td>Sexta-Feira</td>
                            </tr>
                            <tr>
                                <td>01/07/2023 : 02:11</td>
                                <td>03/07/2023</td>
                                <td>16:00h</td>
                                <td>Sexta-Feira</td>
                            </tr>
                            
                        </tbody>                                          
                    </table>
                </div>
            </form>
        </div>
    );
}