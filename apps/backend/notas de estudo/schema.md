# 📝 Entendendo Schemas no Backend

Um **Schema** (esquema) é uma estrutura de configuração que define a forma, as regras e o comportamento dos dados armazenados no banco de dados. Ele atua como um "contrato" para os documentos de uma coleção.

---

## 🏗️ **O que um Schema faz?**
| Funcionalidade          | Descrição                                                                 | Exemplo                                                                 |
|-------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Definição de Campos** | Especifica os atributos e seus tipos (`String`, `Number`, `Date`, etc.).  | `titulo: String`                                                       |
| **Validação**           | Garante que os dados atendam a regras antes de serem salvos.              | `required: true`, `min: 0`, `match: /regex/`                          |
| **Valores Padrão**      | Define valores iniciais se não forem fornecidos.                          | `default: Date.now`                                                    |
| **Relacionamentos**     | Conecta documentos entre coleções (como chaves estrangeiras).             | `autor: { type: mongoose.Types.ObjectId, ref: 'Usuario' }`             |
| **Métodos Customizados**| Adiciona funções específicas ao modelo.                                   | `livroSchema.methods.aplicarDesconto = function() { ... }`             |

---

## 📚 **Exemplo Prático: Schema de Livros**
```javascript
const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
    titulo: { 
        type: String, 
        required: [true, 'O título é obrigatório!'],
        trim: true  // Remove espaços extras
    },
    autor: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        min: [0, 'O preço não pode ser negativo.'],
        default: 29.90
    },
    publicado: {
        type: Boolean,
        default: false
    },
    genero: {
        type: String,
        enum: ['Ficção', 'Técnico', 'Biografia']
    }
}, { timestamps: true });  // Adiciona campos "createdAt" e "updatedAt"

// Método personalizado
livroSchema.methods.publicar = function() {
    this.publicado = true;
    return this.save();
};

module.exports = mongoose.model('Livro', livroSchema);