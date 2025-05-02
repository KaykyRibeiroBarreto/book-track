import React, { useState } from 'react';

const AddBookCard = ({ adicionarLivro, fecharFormulario }) => {
  const [form, setForm] = useState({
    titulo: '',
    genero: '',
    estrelas: 1,
    totalPaginas: '',
    paginasLidas: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!form.titulo || !form.totalPaginas || !form.paginasLidas) {
      alert('Preencha todos os campos obrigatórios');
      return;
    }

    if (parseInt(form.paginasLidas) > parseInt(form.totalPaginas)) {
      alert('Páginas lidas não pode ser maior que total de páginas');
      return;
    }

    // Chama função do App para adicionar livro
    adicionarLivro({
      ...form,
      totalPaginas: parseInt(form.totalPaginas),
      paginasLidas: parseInt(form.paginasLidas),
      estrelas: parseInt(form.estrelas),
    });

    // Fecha o formulário
    fecharFormulario();
  };

  return (
    <div>
      <h2>Adicionar Livro</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} />
        <input name="genero" placeholder="Gênero" value={form.genero} onChange={handleChange} />
        <input name="estrelas" type="number" min="1" max="5" value={form.estrelas} onChange={handleChange} />
        <input name="totalPaginas" placeholder="Total de páginas" type="number" value={form.totalPaginas} onChange={handleChange} />
        <input name="paginasLidas" placeholder="Páginas lidas" type="number" value={form.paginasLidas} onChange={handleChange} />

        <div>
          <button type="submit">Salvar</button>
          <button type="button" onClick={fecharFormulario}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default AddBookCard;
