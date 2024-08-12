import React, { Component } from 'react'
import ComponenteActualizado from './contadorHOC';

class MiOtroBoton extends Component {
    render() {
        return (
            <div>
                <button
                    onDoubleClick={this.props.incrementarConteo}
                    className='btn btn-primary'>
                    Conteo de parejas {this.props.conteo}
                </button>
            </div>
        )
    }
}

export default ComponenteActualizado(MiOtroBoton)