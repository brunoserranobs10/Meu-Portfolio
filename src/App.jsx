import Header from './components/Header'
import Habilidades from './components/Habilidades'
import SobreMim from './components/SobreMim'
import Projetos from './components/Projetos'
import Rodape from './components/Rodape'

function App() {
  // Informações centrais do perfil
  const dadosPerfil = {
    nome: "Bruno Lucatto Serrano",
    cargo: "Desenvolvedor Front-End em Formação",
    descricao: "Estudante apaixonado por tecnologia, criando experiências web modernas com React e JavaScript.",
    foto: "/foto.svg"
  }

  return (
    <div className="site">
      <Header
        nome={dadosPerfil.nome}
        cargo={dadosPerfil.cargo}
        descricao={dadosPerfil.descricao}
        foto={"/Bruno.jpg.jpeg"}
      />

      <main>
        <SobreMim />
        <Habilidades />
        <Projetos />
      </main>

      <Rodape />
    </div>
  )
}

export default App