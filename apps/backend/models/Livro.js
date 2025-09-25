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
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;