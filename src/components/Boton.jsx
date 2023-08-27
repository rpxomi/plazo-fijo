import React from 'react'


function Boton( {etiqueta='Boton', funcion} ) {

    return (
        <button onClick={ funcion }>
            { etiqueta }
        </button>
    )
}

export default Boton
