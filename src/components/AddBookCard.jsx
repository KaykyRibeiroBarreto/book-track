import React from 'react'

<<<<<<< HEAD
const AddBookCard = ( {adicionarLivro, fecharFormulario}) => {
    const [form, setForm] = React.useState({
        titulo: '',
        genero: '',
        estrelas: 1,
        totalPaginas: 0,
        paginasLidas: 0
    })
// esse handleChange é uma função que atualiza o estado do formulário quando o usuário digita algo nos inputs
 const handleChange = (event) => {
    setForm({ ...form, [event.targe.name]: event.target.value })
  }

  //
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.titulo || !form.genero || !form.totalPaginas || !paginasLidas) {
        alert('Preencha todos os campos!');
        return;
    }

    if (parseInt(form.paginasLidas) > parseInt(form.totalPaginas)) {
        alert('O número de páginas lidas não pode ser maior que o total de páginas!');
        return;
    }


adicionarLivro({
    ...form,
    totalPaginas: parseInt(form.totalPaginas),
    paginasLidas: parseInt(form.paginasLidas),
    estrelas: parseInt(form.estrelas),
    id: Date.now()
})

fecharFormulario()
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Livro</h2>    
            <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} />
            <input name="genero" placeholder="Gênero" value={form.genero} onChange={handleChange} />
            <input name="estrelas" type="number" min="1" max="5" value={form.estrelas} onChange={handleChange} />
            <input name="totalPaginas" placeholder="Total de páginas" type="number" value={form.totalPaginas} onChange={handleChange} />
            <input name="paginasLidas" placeholder="Páginas lidas" type="number" value={form.paginasLidas} onChange={handleChange} />

            <div>
            <button type="submit">Salvar</button>
            <button type="button" onClick={fecharFormulario}>Cancelar</button>
            </div>
=======
const AddBookCard = () => {
  return (
    <div>
      <form>
        <label>Enter your name:
            <input type="text" />
        </label>
>>>>>>> 6720c5bf2691c4e14087d2e85941708d51a1e1a1
      </form>
    </div>
  )
}

<<<<<<< HEAD
export default AddBookCard
=======
export default AddBookCard
>>>>>>> 6720c5bf2691c4e14087d2e85941708d51a1e1a1
