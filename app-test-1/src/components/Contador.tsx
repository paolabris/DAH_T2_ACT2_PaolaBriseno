import React from 'react'

import { useState } from 'react'//!paso 11
export const Contador = () => {
    const [valor,setValor]=useState(0);//!paso 12
    const acumular =(numero:number)=>{//!paso 14
        setValor(valor+numero);
    }
    return (
        <div>
            <h3>Contador: <small>{valor}</small></h3>
            <button className="Boton1"
            onClick={()=>acumular(1)}//!paso 15
            >Sumar (+1)</button>
            &nbsp;
            <button className="Boton2"
            onClick={()=>acumular(-1)}//!paso 16
            >Restar (-1)</button>
        </div>
    )
}