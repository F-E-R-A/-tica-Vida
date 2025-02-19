import React, { createContext } from 'react';

export const AuthContext = createContext();

export function Context({ children }){
    var valor = 10;
    
    return (
        <AuthContext.Provider
            value = {{valor: valor}}>
            { children }
        </AuthContext.Provider>
    );
}
