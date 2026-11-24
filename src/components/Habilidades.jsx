import Habilidade from './Habilidade'

function Habilidades() {
  const lista = [
    { nome: 'HTML', nivel: 'Bom' },
    { nome: 'CSS', nivel: 'Bom' },
    { nome: 'JavaScript', nivel: 'Estudando' },
    { nome: 'React', nivel: 'Começando' },
    { nome: 'Git e GitHub', nivel: 'Básico' },
  ]

  return (
    <section className="secao">
      <h2>Habilidades</h2>
      <ul>
        {lista.map((item) => (
          <Habilidade key={item.nome} nome={item.nome} nivel={item.nivel} />
        ))}
      </ul>
    </section>
  )
}

export default Habilidades
