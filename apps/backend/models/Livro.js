import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { 
        type: mongoose.Schema.Types.ObjectId 
    },
    titulo: { 
        type: String, 
        required: true
    },
    editora: { 
        type: String 
    },
    preco: { 
        type: Number, 
         min: [0, 'O preço não pode ser negativo.'],
        default: 29.90
    },
    paginas: { 
        type: Number 
    }
}, { versionKey: false }); // Serve para remover o campo __v que o mongoose cria por padrão

const livro = mongoose.model("livros", livroSchema); // modelo "livros" é uma interface para que nossa aplicação interaja com a coleção "livros" do banco de dados

export default livro;