import React from 'react';
import styles from './BookCard.module.css';

const BookCard = ({ livro }) => {
  const progresso = Math.round((livro.paginasLidas / livro.totalPaginas) * 100);

  return (
    <div className={styles.card}>
      <h3>{livro.titulo}</h3>
      <p>Gênero: {livro.genero}</p>
      <p>Estrelas: {'⭐'.repeat(livro.estrelas)}</p>
      <p>{livro.paginasLidas} / {livro.totalPaginas} páginas</p>
      
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${progresso}%` }}
        ></div>
      </div>
      <p>{progresso}% lido</p>
    </div>
  );
};

export default BookCard;
