import React, { Component } from 'react'

class MiCheck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            conteo: 0
        }
    }


    incrementarConteo = () => {
        this.setState(prevState => {
            return { conteo: prevState.conteo + 1 }
        })
    }


    render() {
        return (
            <div>
                <label>
                    <input type="checkbox"
                        onClick={this.incrementarConteo}
                        className='btn btn-primary'
                    />
                    Conteo aperturas/cierres {this.state.conteo}
                </label>
            </div>
        )
    }
}

export default MiCheck