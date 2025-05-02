<<<<<<< HEAD
import React from 'react'
import styles from './EmptyState.module.css';
import emptyBook from '../assets/empty-book.png';

const EmptyState = ({ openForm }) => {
  return (
    <div className={styles.emptyState}>
=======
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
>>>>>>> 6720c5bf2691c4e14087d2e85941708d51a1e1a1

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