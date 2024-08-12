/**rcc, rce */
import React, { Component } from 'react'
import ComponenteActualizado from './contadorHOC';

class MiBoton extends Component {

    
    render() {
        return (
            <div>
                <button 
                onClick={this.props.incrementarConteo}
                className='btn btn-primary'>
                    Conteo de personas {this.props.conteo}
                </button>
            </div>
        )
    }
}

export default ComponenteActualizado(MiBoton)