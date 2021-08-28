/*
* Exemplo de aplicação Node.js com MongoDB
* Autor: Wellington Wagner F. Sarmento
* 
*
* Este exemplo foi baseado no código escrito em:
* Utilizando a engine EJS para aplicações em NodeJS 
* (https://www.codementor.io/@nulldreams/utilizando-a-engine-ejs-para-aplicacoes-em-nodejs-dok81l3si)
*
*
*/

const express = require("express");
const app = express();
const routes = require("./server/routes/routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");
//app.use(express.static(__dirname + '/public'));


const port=3030;
const address = "localhost";

//ativa uso do EJS e do Express-ejs-layouts
app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); //prepara a aplicacao para receber dados na forma de query string
app.use(express.json()); //prepara a aplicacao para receber dados no formato JSON

//esse codigo abaixo foi criado para testar variacoes de tempo de resposta do servidor, simulando problemas de lentidao na conexcao e/ou retardos no tempo de resposta do computador onde esta a aplicacao (servidor)
//espera um tempo de 2 segundos (2000 milissegundos) para responder a qualquer requisicao do cliente. Isso gera um delay (espera) proposital para testes do codigo e condicoes de erro.
//app.use(utils.delay(2000));



//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);

//Criando um servidor simples com o Node.js e o Express
const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});