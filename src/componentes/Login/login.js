import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import "./style-login.css";

export default function Login(){
    const navigate = useNavigate();

    const img_success = "/assets/sucesso.png";
    const img_error = "/assets/fechar.png";
    const ico_loading = "/assets/loading2.gif";

    const[isLoading, setIsLoading] = useState(false);
    const[isMessage, setIsMessage] = useState(false);
    const[message, setMessage] = useState("");
    const[styleMessage, setStyleMessage] = useState("");
    const[icoMessage, setIcoMessage] = useState();

    const login = async () => {
        setIsMessage(false);
        setIsLoading(true);

        try {
            const user = $("#inp-user").val();
            const password = $("#inp-password").val();

            const connection = await fetch("http://192.168.100.230:7000/login", {
                origin: "http://192.168.100.230:3000",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    user: user,
                    password: password
                })
            });

            const response = await connection.json();
            if(response.status === 200){               
                setIsLoading(false);
                setMessage("Logado com sucesso.");
                setStyleMessage("messages-success");
                setIcoMessage(img_success);
                setIsMessage(true);

            } else {
                setIsLoading(false);
                setMessage("Usuário ou Senha incorretos.");
                setStyleMessage("messages-error");
                setIcoMessage(img_error);
                setIsMessage(true);
            }

        } catch {
            console.log("Erro ao fazer login.");
        }
    }

    return (
        <div className='container-login'>
            <div className='container-message'>
                <p>Para acessar os registros de agendamentos é necessário o Login.</p>
            </div>
            <div className='container-form'>
                <form
                    id="form-login"
                    onSubmit={(e) => e.preventDefault()}>
                    <h1>Login</h1>
                    {(isLoading) ? 
                        <div className='container-loading'>
                            <img 
                                id="ico-loading" 
                                src={ico_loading} 
                                alt=''
                            />    
                        </div> : 
                        <></>
                    }
                    {(isMessage) ? 
                        <div className={styleMessage}>
                            <img 
                                id="img"
                                src={icoMessage} 
                                alt=""
                            />
                            <p>{message}</p>
                        </div> :
                        <></>
                    }
                    
                    <div className='container-user'>
                        <label>Usuário:</label>
                        <input id="inp-user" type="text"/>    
                    </div>    
                    <div className='container-password'>
                        <label>Senha:</label>
                        <input id="inp-password" type="password"/>
                    </div>  
                    <div className='line1'></div>  
                    <div className='line2'></div>
                    <button 
                        id="btn-voltar"
                        onClick={() => navigate("/")}>
                        Voltar
                    </button>
                    <button 
                        id="btn-enviar"
                        onClick={() => login()}>
                        Acessar
                    </button>
                </form>
            </div>
        </div>
    );
}