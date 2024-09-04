import React, { Component } from 'react'

export default class Components extends Component {

    constructor(props){
        super(props);

        this.state = {
            item1: '',
            item2: '',
            item3: ''
        };
    }

    onSubmitHandler = (event) =>{
        event.preventDefault();
    }

    onInputChange = (event) => {
        const valor = event.target.value;
        const name = event.target.name;

        this.setState(
            {[name]: valor}
        )
    }

    render() {
        return (
            <>
                <div className='formularios col-md-5'>
                    <h1>Ingreso Club</h1>
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="form-group">
                            <div className='item'>
                                <label htmlFor="item1">Nombre:</label>
                                <input type="text" className='form-control' name='item1' placeholder='Nombre' onChange={this.onInputChange}/>
                            </div>

                            <div className='item'>
                            <label htmlFor="item2">Apellido:</label>
                                <input type="text" name='item2' className='form-control' placeholder='Apellido' onChange={this.onInputChange}/>
                            </div>

                            <div className='item'>
                            <label htmlFor="item3">Hobby:</label>
                                <input type="text" name='item3' className='form-control' placeholder='Hobby' onChange={this.onInputChange}/>
                            </div>

                            <button className='btn btn-primary' type='submit'>
                                Guardar
                            </button>
                        </div>
                    </form>

                    <br />
                    <hr />

                    <h4>Nombre: {this.state.item1}</h4>
                    <h4>Apellido: {this.state.item2}</h4>
                    <h4>Hobby: {this.state.item3}</h4>
                </div>
            </>
        );
    }
}