const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();


/* pra iniciar o backend é  npm start
Rota / recurso
*/
/*
metodos HTTP:
GET: buscar/listar uma informação do back end
POST: criar uma informação no back end
PUT: alterar uma informação no abck end
DELETE: deletar uma informação no back end
*/
/*
tipo de parametro
Query Params: parametros nomeados enviados na t=rota apos "?"(filtros, paginação)
Route Params: parametros utiizados para identificar recursos
request body: corpo da requisição, utilizando para criar ou alterar recursos
*/
app.use(cors({}));
app.use(express.json());
app.use(routes);



app.listen(3333);