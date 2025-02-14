import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./style-profile.css";

export default function Profile(){
    const navigate = useNavigate();

    return (
        <div className='container-profile'>
            <form 
                id='form-profile'
                onSubmit={(e) => e.preventDefault()}> 
                <div className='container-img'>
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
                    <div className='container-nome'>
                        <label>Nome:</label>
                        <input type='text' name='nome'/>
                    </div>
                    <div className='container-nascimento-cidade'>
                        <div className='container-nascimento'>
                            <label>Nascimentos:</label>
                            <input type="date" name='dt-nascimento'/>
                        </div>
                        <div className='container-cidade'>
                            <label>Cidade:</label>
                            <input type='text' name='cidade'/>
                        </div>
                    </div>
                    <div className='container-email'>
                        <label>E-mail:</label>
                        <input type='email' name='email'/>
                    </div>
                    <div className='container-buttons'>
                        <button 
                            id="btn-submit">
                            Atualizar
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
                        </tbody>                                          
                    </table>
                </div>
            </form>
        </div>
    );
}