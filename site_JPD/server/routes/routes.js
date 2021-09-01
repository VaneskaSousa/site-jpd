const express = require("express");
const router = express.Router();
const mysql = require('../../mysql').pool;
router.use(express.static('assets'));
//express.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));

router.get('/',(req,res)=>{ //callback - funcao que trata dado evento GET
    res.render('pages/home');
});

router.get('/login',(req,res)=>{ //callback - funcao que trata dado evento  GET
    res.render('pages/login');
});

router.get('/cadastro_acao',(req,res)=>{ //callback - funcao que trata dado evento  GET
    res.render('pages/cadastro_acao'); 
});


router.get('/confirma_acao',(req,res)=>{ //callback - funcao que trata dado evento  GET
    res.render('pages/confirma_acao');
});

router.post('/consulta/acao',(req,res)=>{        //consulta do mySQL
    /*
    * Tentei mudar o nome de req e descobri que não pode pois o objeto ja retorna com o objeto e dai eu pego os campos req e res
    */
    console.log(req.body.regional);
    mysql.query("SELECT * FROM acoes where acoes.regional = ?",
        [req.body.regional],
        function(error,results,fields){
            console.log(results);
            if(error){
                res.status(400).send({
                    error: error,
                    response: "Usuário não encontrado"
                });
            }else{
                if(results.length == 0){
                    res.status(600).send({
                        response: "Nenhuma ação cadastrada"
                    }); 
                }else{
                    res.status(200).json({...results[results.length-1]});
                }
            }
        });
});


router.post('/cadastro/cadastro_acao',(req,res)=>{   
    console.log(req);     
    mysql.query("INSERT INTO acoes (`fk_voluntario_org`,`nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES (?,?, ?, ?, ?, ?)",
        [req.body.fk_voluntario_org,req.body.nome_inst, req.body.localizacao, req.body.num_voluntarios, req.body.num_beneficiados, req.body.regional],
        //[req.body.email, req.body.senha],
        function(error,results,fields){
            console.log("results: "+results);
            if(error){
                res.status(400).send({
                    error: error,
                    response: "Erro ao cadastrar"
                });
            }else{
                res.status(200).json({
                    status:'sucess',
                });
            }
    });
});


router.post('/cadastro/login',(req,res)=>{        
//    let user={id_voluntario_org:"",fk_tipo_voluntarios:"",nome:"",email:""};
    mysql.query("SELECT * FROM voluntario_org where voluntario_org.email = ? and voluntario_org.senha = ?",
        [req.body.email, req.body.senha],
        function(error,results,fields){
            console.log(results);
            if(error){
                res.status(400).send({
                    error: error,
                    response: "Usuário não encontrado"
                });
            }else{
                if(results.length == 0){
                    res.status(400).send({
                        response: "Usuário ou senha incorretos"
                    }); 
                }else{
                    res.status(200).json(results[0]);
                }
            }
    });
});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;