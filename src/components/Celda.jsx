import React from 'react'


// valor, para la celda, tiene que ser un string
function Celda( { valor='', alinearTexto='left' } ) {

    const estilo = {
        width: '200px',
        height: '30px',
        marginTop: '-1px',
        marginBottom: '-1px',
        marginLeft: '-1px',
        marginRight: '-1px',
        border: '1px dotted black',
        textAlign: alinearTexto,
    }


    
    // por defecto, "alinearTexto" esta a la izquierda !!!
    // margen: Top Right Bottom Left
    //                     T   R   B   L
    let margenElegido = '0px 0px 0px 70px'

    // si "alinearTexto" es right, se separa del margen derecho
    if( alinearTexto === 'right' ) margenElegido = '0px 40px 0px 0px'

    const margen = {
        margin: margenElegido
    }



    return (
        <div className='celda' style={ estilo }>

            <p style={ margen }>
                { valor }
            </p>
        </div>
    )
}

export default Celda
