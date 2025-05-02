import React from 'react'
import styles from './EmptyState.module.css';
import emptyBook from '../assets/empty-book.png';

const EmptyState = ({ openForm }) => {
  return (
    <div className={styles.emptyState}>

      <img
      src={emptyBook}
      alt="Nenhum livro encontrado"
      style={{ width: '160px', height: '160px' }} 
       />

      <h2 className={styles.title}>Nenhum livro ainda...</h2>
      <p className={styles.text}>Adicione alguns livros para começar.</p> 

      <button 
        className={styles.addButton} 
        onClick={openForm}
      >
        Adicionar Livro</button>
    </div>
  )
}

export default EmptyState