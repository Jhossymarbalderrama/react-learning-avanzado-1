import React, { useState } from 'react'

export default function ComponenteFuncionalForm() {

    const [items, setItems] = useState({});

    const onSubmitHandler = (event) => {
        event.preventDefault();
    };

    const onInputChange = (event) => {
        const { name, value } = event.target;

        setItems( (prevState) => ({...prevState, [name]: value}))
    };

    return (
        <>
            <div className='formularios col-md-5'>
                <h1>Component Funcional</h1>
                <hr />
                <h3>Ingreso Club</h3>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <div className='item'>
                            <label htmlFor="item1">Nombre:</label>
                            <input type="text" className='form-control' name='nombre' placeholder='Nombre' onChange={onInputChange} />
                        </div>

                        <div className='item'>
                            <label htmlFor="item2">Apellido:</label>
                            <input type="text" name='apellido' className='form-control' placeholder='Apellido' onChange={onInputChange} />
                        </div>

                        <div className='item'>
                            <label htmlFor="item3">Hobby:</label>
                            <input type="text" name='hobby' className='form-control' placeholder='Hobby' onChange={onInputChange} />
                        </div>

                        <button className='btn btn-primary' type='submit'>
                            Guardar
                        </button>
                    </div>
                </form>

                <br />
                <hr />


                {Object.keys(items).map((key) => (
                    <h4 key={key}>{key}: {items[key]}</h4>
                ))}


            </div>
        </>
    );
}
