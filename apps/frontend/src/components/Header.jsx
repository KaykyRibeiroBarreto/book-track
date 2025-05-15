import React from 'react'
import styles from './Header.module.css';

const Header = ({ abrirFormulario }) => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Book Track</h1>

        <button 
        className={styles.addButton} 
        onClick={abrirFormulario}
        >
          ADICIONAR LIVRO
          </button>
    </header>
  )
}

export default Header
