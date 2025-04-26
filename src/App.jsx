import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import EmptyState from './components/EmptyState'

function App() {
  const [livros, setLivros] = useState([])

  return (
    <>
      <Header/>
      {livros.length === 0 // Se o array de livros estiver vazio
        ? <EmptyState /> // Mostra o componente EmptyState
        : <BooksGrid livros={livros} /> // Se não, mostra o componente BooksGrid
      }   
   </>
  )
}

export default App
