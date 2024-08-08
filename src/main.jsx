import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Exercicio from './Exercicios/Exercicio.jsx'
import UEffect from './useEffect/UEffect.jsx'
import ExercicioTwo from './ExercicioTwo/ExercicioTwo.jsx'
import URef from './useRef/URef.jsx'
import UMemo from './useMemo&usecallBack/UMemo.jsx'
import UCallback from './useMemo&usecallBack/UCallback.jsx'
import UCapp from './useContext/UCapp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UCapp />
  </React.StrictMode>,
)
