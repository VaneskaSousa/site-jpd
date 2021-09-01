const mysql = require('mysql');

//tentei passar como variavel de ambiente e setando essas variaveis atraves do nodemon mas não deu certo :/ 
var mypool = mysql.createConnection({
    "user":"root",
    "password":"12112019",
    "database":"jpd",
    "host":"localhost",
    "port": 3306
});
mypool.connect(); //tem que abrir a conexão aqui para poder fechar em cada rota
exports.pool = mypool;