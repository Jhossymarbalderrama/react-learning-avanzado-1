import React, { Component } from 'react'

export default class Components extends Component {

    onSubmitHandler = (event) =>{
        event.preventDefault();
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
                                <input type="text" className='form-control' name='item1' placeholder='Nombre' />
                            </div>

                            <div className='item'>
                            <label htmlFor="item2">Apellido:</label>
                                <input type="text" name='item2' className='form-control' placeholder='Apellido' />
                            </div>

                            <div className='item'>
                            <label htmlFor="item3">Hobby:</label>
                                <input type="text" name='item3' className='form-control' placeholder='Hobby' />
                            </div>

                            <button className='btn btn-primary' type='submit'>
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}