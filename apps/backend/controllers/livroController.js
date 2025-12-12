import livro from '../models/Livro.js';
import mongoose from 'mongoose';

// Nosso LivroController terá funcionalidades como:
// - listar todos os livros
// - cadastrar um novo livro
// - buscar um livro por ID
// - atualizar um livro
// - deletar um livro

class LivroController {
    static async listarLivros(req, res) {
        try {
            const livros = await livro.find({}); // Esse find vem do mongoose, e busca todos os livros no banco de dados
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao listar livros' });
        }
    };

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: 'Livro cadastrado com sucesso', livro: novoLivro });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao cadastrar livro` });
        }
    };

    static async buscarLivroPorId(req, res) {
        try {
            const { id } = req.params;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({message: 'ID inválido'})
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar livro por ID' });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const { id } = req.params;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({message: 'ID inválido'})
            }
            const livroAtualizado = await livro.findByIdAndUpdate(id, req.body, { new: true });
            if (!livroAtualizado) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }
            res.status(200).json({ message: 'Livro atualizado com sucesso', livro: livroAtualizado });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar livro' });
        }
    }

    static async deletarLivro(req, res) {
        try {
            const { id } = req.params;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({message: 'ID inválido'})
            }
            const livroDeletado = await livro.findByIdAndDelete(id);
            if (!livroDeletado) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }
            res.status(200).json({ message: 'Livro deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar livro' });
        }
    }
}

export default LivroController;

// O controller deve conter os métodos para lidar com as requisições relacionadas aos livros, 
// como listar, buscar por ID, criar, atualizar e deletar livros.