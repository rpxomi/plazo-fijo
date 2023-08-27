import React, { useState } from 'react'

import Ingreso from './Ingreso'
import Boton from './Boton'


const Formulario = ( {obtenerDatosExternos} ) => {

    const [ valorDelCapitalIngresado, setValorDelCapitalIngresado ] = useState( '' )
    const [ valorDelPlazoIngresado, setValorDelPlazoIngresado ] = useState( '' )


    // - - -

    const manejarCambioDelCapitalIngresado = (e) => {

        setValorDelCapitalIngresado( e.target.value )
    }


    const manejarCambioDelPlazoIngresado = (e) => {

        setValorDelPlazoIngresado( e.target.value )
    }


    // - - -

    const manejarEnviarFormulario = (e) => {

        e.preventDefault()
    
        // funcion externa, que obtiene los datos de este componente
        // y los lleva hacia el CONTEXTO del componente <App>
        obtenerDatosExternos(
            valorDelCapitalIngresado,
            valorDelPlazoIngresado,
            parseFloat( valorDelCapitalIngresado * ( (118/100) / 365) * valorDelPlazoIngresado ).toFixed(2),
            (parseFloat(valorDelCapitalIngresado) + parseFloat( valorDelCapitalIngresado * ( (118/100) / 365) * valorDelPlazoIngresado )).toFixed(2)
        )
    }


    // - - -

    return (
        <form>
            <Ingreso
                tipo='text'
                leyenda='Capital inicial'
                valor={ valorDelCapitalIngresado }
                funcion={ manejarCambioDelCapitalIngresado }
            />

            <Ingreso
                tipo='text'
                leyenda='Cantidad de dias'
                valor={ valorDelPlazoIngresado }
                funcion={ manejarCambioDelPlazoIngresado }
            />
            
            <Boton etiqueta='Enviar' funcion={ manejarEnviarFormulario }/>
        </form>
    )
}

export default Formulario
