import React from 'react'


function Columna( { children } ) {

    const estilo = {
        width: '199px',
        height: '185px',
        marginTop: '-1px',
        marginBottom: '-1px',
        marginLeft: '-1px',
        marginRight: '-1px',
        border: '1px solid black',
        
    }

    return (
        <div className='columna' style={ estilo }>

            { children }
        </div>
    )
}

export default Columna
