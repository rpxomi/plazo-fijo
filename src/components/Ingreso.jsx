import React from 'react'


function Ingreso( {tipo, leyenda='Input', valor, funcion} ) {

    return (
        <input
            type={ tipo }
            placeholder={ leyenda }
            value={ valor }
            onChange={ funcion }
        />
    )
}

export default Ingreso
