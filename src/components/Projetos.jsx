import Projeto from './Projeto'

function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: 'Este portfólio',
      resumo: 'Meu primeiro projeto em React com Vite.',
      detalhes: 'Feito com componentes, props e useState',
    },
    {
      id: 2,
      titulo: 'Projeto 2',
      resumo: 'Barbearia WEB',
      detalhes: 'No semestre passados utilizamos banco de dados nessa barbearia',
    },
    
  ]

  return (
    <section className="secao">
      <h2>Projetos</h2>
      {projetos.map((p) => (
        <Projeto key={p.id} titulo={p.titulo} resumo={p.resumo} detalhes={p.detalhes} />
      ))}
    </section>
  )
}

export default Projetos
