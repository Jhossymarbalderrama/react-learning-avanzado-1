import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Estructura de Proyectos</h2>
      <div className="card p-0 m-0">
        <h4>Carpetas</h4>
        <ul>
          <li>📁 components
            <ul>
              <li>formulario
                <ul>
                  <li>seccionFormulario</li>
                </ul>
              </li>
              <li>paginas
                <ul>
                  <li>contacto</li>
                  <li>acercaDeNosotro</li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li>📁 constants</li>
          <li>📁 hoc (higher order components)</li>
          <li>📁 redux</li>
          <li>📁 shared</li>
        </ul>
      </div>    
    </>
  )
}

export default App
