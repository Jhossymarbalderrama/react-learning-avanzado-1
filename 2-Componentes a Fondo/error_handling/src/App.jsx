import { useState } from 'react'
import './App.css'
import MiComponente from './components/MiComponente'
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  return (
    <div className="app">
      <div className="container">
        <h1 className="display-4">Tienda Online</h1>
        <p className="lead">Selecciona un producto</p>
      </div>
      <div className="container">
        <div className="row">
          <ErrorBoundary>
            <MiComponente title='Producto X'/>
            <MiComponente title='Producto X' />
            <MiComponente title='Producto X' />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  )
}

export default App
