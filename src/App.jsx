import React, { useState } from 'react'

import Tabla from './components/Tabla'
import Formulario from './components/Formulario'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import './App.css'


function App() {

    // HOOK (estado de uso, de este componente <App>)

    /*
    una variable, para almacenar el valor de un componente
    y una funcion, para establecer el valor de esa variable
    */
    const [ capitalInicial, setCapitalInicial ] = useState( '0' )
    const [ plazo, setPlazo ] = useState( '0' )

    const [ tna, setTna ] = useState( '0' )
    const [ interesesGanados, setInteresesGanados ] = useState( '0' )
    const [ montoTotal, setMontoTotal ] = useState( '0' )
    const [ tea, setTea ] = useState( '0' )


    // # # # # # # # # # # # # # # # # # # # # # #

    // HANDLERS (manejadores)

    /*
    esta funcion, se pasa como una {prop} a OTRO componente
    y obtienen datos que este dentro de ese componente
    */
    const obtenerDatosExternos = (c, p, i, t) => {

        setCapitalInicial( c )
        setPlazo( p )
        setTna( '118' )
        setInteresesGanados( i )
        setMontoTotal( t )
    }


    // # # # # # # # # # # # # # # # # # # # # # #

    // COMPONENTE

    return (
        <>
            <Tabla
                capitalInicial={ capitalInicial }
                plazo={ plazo }
                tna={ tna }
                interesesGanados={ interesesGanados }
                montoTotal={ montoTotal }
                tea={ tea }
            />


            <Formulario
                obtenerDatosExternos={ obtenerDatosExternos }
            />
        </>
    )
}

export default App
