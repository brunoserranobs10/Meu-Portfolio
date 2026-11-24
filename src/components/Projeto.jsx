import { useState } from 'react'

// Card de projeto: o botão mostra/esconde os detalhes
function Projeto({ titulo, resumo, detalhes }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div className="projeto">
      <h3>{titulo}</h3>
      <p>{resumo}</p>
      <button onClick={() => setAberto(!aberto)}>
        {aberto ? 'Esconder detalhes' : 'Ver detalhes'}
      </button>
      {aberto && <p className="detalhes">{detalhes}</p>}
    </div>
  )
}

export default Projeto
