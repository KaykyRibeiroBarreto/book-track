import React from 'react';
import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import EmptyState from './components/EmptyState'
import AddBookCard from './components/AddBookCard'
import BooksGrid from './components/BookGrid'

function App() {
  // Estado para armazenar os livros
  const [livros, setLivros] = useState([])

  // Estado para controlar a exibição do formulário de adição de livro
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  // Carregar livros do localStorage quando o componente montar
  useEffect(() => {
    const livrosSalvos = localStorage.getItem('livros')
    if (livrosSalvos) {
      setLivros(JSON.parse(livrosSalvos))
    }
  }, [])
  
  // Salvar livros no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem('livros', JSON.stringify(livros))
  }, [livros])
  
  // Função para adicionar um novo livro
  const adicionarLivro = (novoLivro) => {
    // Adiciona um ID único ao livro
    const livroComId = { ...novoLivro, id: Date.now() }
    setLivros([...livros, livroComId])
    setIsFormVisible(false) // Fecha o formulário após adicionar
  }
  
  // Quando o usuário clica no botão "Adicionar Livro" (que está no Header ou no EmptyState), 
  // a função openForm é chamada para abrir o formulário
  const openForm = () => {
    setIsFormVisible(true)
  }
  
  // Função para fechar o formulário
  const onClose = () => {
    setIsFormVisible(false)
  }

  return (
    <>
      <Header abrirFormulario={openForm} />
      
      {isFormVisible && (
        <AddBookCard 
          adicionarLivro={adicionarLivro}
          fecharFormulario={onClose}
        />
      )}
      
      {!isFormVisible && (
        livros.length === 0 
          ? <EmptyState abrirFormulario={openForm} /> 
          : <BooksGrid livros={livros} />
      )}
    </>
  )
}

export default App