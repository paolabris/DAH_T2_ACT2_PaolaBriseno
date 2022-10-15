import React from 'react'
/* Crear el objeto  "persona" con los siguientes atributos. */

interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: {
        pais: string,
        estado: string,
        ciudad: string,
        calle: string,
        numero: number
    }
}
interface Direccion {
    pais: string,
    estado: string,
    ciudad: string,
    calle: string,
    numero: number
}

const persona = {
    nombreCompleto: 'Martha',
    edad: 30,
    direccion: {
        pais: 'Mexico',
        estado: 'Nayarit',
        ciudad: 'Tepic',
        direccion: {
            pais:'mexico',
            estado:'nayarit',
            ciudad:'tepic',
            calle: 'conocido',
            numero:'533'
        }
    }
}
export const ObjetosLiterales = () => {
    return (
        <div>
            <code>
                <pre>
                {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
            
        </div>
    )
}
