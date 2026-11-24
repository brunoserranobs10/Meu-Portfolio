import { useState } from 'react'

// Aqui uso useState para controlar qual aba está aberta
function SobreMim() {
  const [aba, setAba] = useState('interesses')

  return (
    <section className="secao">
      <h2>Sobre mim</h2>

      <div className="abas">
        <button
          className={aba === 'interesses' ? 'ativa' : ''}
          onClick={() => setAba('interesses')}
        >
          Interesses
        </button>
        <button
          className={aba === 'objetivos' ? 'ativa' : ''}
          onClick={() => setAba('objetivos')}
        >
          Objetivos
        </button>
      </div>

      {aba === 'interesses' && (
        <p>Gosto de tecnologia, jogos e de aprender coisas novas.</p>
      )}
      {aba === 'objetivos' && (
        <p>Quero trabalhar na área de banco de dados e continuar estudando.</p>
      )}
    </section>
  )
}

export default SobreMim
