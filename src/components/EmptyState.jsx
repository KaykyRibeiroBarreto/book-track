    import React from 'react'
    import styles from './EmptyState.module.css';

    const EmptyState = () => {
      return (
        <div className={styles.emptyState}>
          <img src={"/assets/empty.svg"} alt="Nenhum livro encontrado" className={styles.image} />
          <h2 className={styles.title}>Nenhum livro ainda...</h2>
          <p className={styles.text}>Adicione alguns livros para começar.</p> 
          <button className={styles.addButton}>Adicionar Livro</button>

        </div>
      )
    }
    
    export default EmptyState