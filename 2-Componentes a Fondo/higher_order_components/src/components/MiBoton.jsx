/**rcc, rce */
import React, { Component } from 'react'

class MiBoton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            conteo: 0
        }
    }


    incrementarConteo = () => {
        this.setState(prevState =>{
            return { conteo: prevState.conteo + 1}
        })
    }

    render() {
        return (
            <div>
                <button 
                onClick={this.incrementarConteo}
                className='btn btn-primary'>
                    Conteo de personas {this.state.conteo}
                </button>
            </div>
        )
    }
}

export default MiBoton