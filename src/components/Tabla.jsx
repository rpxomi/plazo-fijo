import React from 'react'

import arreglo from '../assets/arreglo'

import Celda from './Celda'
import Columna from './Columna'


function Tabla( { capitalInicial='', plazo='', tna='', interesesGanados='', montoTotal='', tea=''} ) {

    const estilo = {
        display: 'flex',
        flowDirection: 'row',
        gap: '1px',
        width: '398px',
        height: '182px',
        marginTop: '-1px',
        marginBottom: '-1px',
        marginLeft: '-1px',
        marginRight: '-1px',
        border: '2px solid red',

    }


    return (
        <div className='tabla' style={ estilo }>
            <Columna>
                {
                    arreglo.map( objeto => {
                        return (
                            <Celda
                                key={ objeto.id }
                                valor={ objeto.texto }
                                alinearTexto='right'
                            />
                        )
                    })
                }
            </Columna>


            <Columna>
                <Celda valor={ '$ ' + capitalInicial } />
                <Celda valor={ plazo + ' dias' } />
                <Celda valor={ tna + ' %' } />
                <Celda valor={ '$ ' + interesesGanados } />
                <Celda valor={ '$ ' + montoTotal } />
                <Celda valor={ tea + ' %' } />
            </Columna>
        </div>
    )
}

export default Tabla
