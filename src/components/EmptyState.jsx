    import React from 'react'
    import styles from './EmptyState.module.css';
    import AddBookCard from './AddBookCard';
    import emptyBook from '../assets/empty-book.png';

    const EmptyState = () => {
      const [isAddingBook, setIsAddingBook] = React.useState(false);

      return (
        <div className={styles.emptyState}>
          {isAddingBook ? (  // se isAddingBook for true, renderiza the AddBookCard component 
            <AddBookCard/>   // se não renderiza conteúdo padrão
          ) : null}

          <img 
          src={emptyBook}
          alt="Empty Book"
          style={{ width: '150px', height: '150px' }}
          />
          <h2 className={styles.title}>Nenhum livro ainda...</h2>
          <p className={styles.text}>Adicione alguns livros para começar.</p> 
          <button className={styles.addButton} onClick={()=> setisAddingBook(true)}>Adicionar Livro</button>

        </div>
      )
    }
    
    export default EmptyState