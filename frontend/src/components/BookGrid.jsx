import React from 'react';
import BookCard from './BookCard';
import styles from './BooksGrid.module.css';

const BooksGrid = ({ livros }) => {
  return (
    <div className={styles.grid}>
      {livros.map(livro => (
        <BookCard key={livro.id} livro={livro} />
      ))}
    </div>
  );
};

export default BooksGrid;
