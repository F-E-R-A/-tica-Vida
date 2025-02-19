import React from 'react';
import './App.css';
import Routes from './componentes/Routes/Routes';
import { Context } from './componentes/Context/auth';

function App(){
    return(
        <div className="App">
            <Context>
                <Routes/>
            </Context>           
        </div>       
    );
}

export default App;