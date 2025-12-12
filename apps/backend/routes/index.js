import express from 'express';
import livros from './livrosRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'API Book Track'});
    });

    // Registra middlewares e sub-rotas:
    // - express.json() -> middleware que faz o parsing do body em JSON
    // - livros -> conjunto de rotas para recursos relacionados a "livros"
    // Ao usar app.use(express.json(), livros) garantimos que todas as rotas
    // definidas em 'livros' já recebam o body parsed como JSON.

    app.use(express.json(), livros);
}

export default routes;

