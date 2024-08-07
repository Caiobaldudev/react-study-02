import React from 'react'
import ETwoP from './ETwoP'

const ETwo = () => {
  const [ativo, setAtivo] = React.useState(false)
  return (
    <div>
      {ativo && <ETwoP/>}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  )
}

export default ETwo
