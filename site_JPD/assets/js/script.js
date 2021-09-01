//queria separar essas funções numa pagina chamada login
function validaFormLogin(form) {
    isReady = true;

    if (form.email.value == "" || form.senha.value == "") {
        alert("Preencha todos os campos");
        isReady = false;
    } else {
        if (form.email.value.indexOf("@") == -1 || form.email.value.indexOf(".") == -1) {
            alert("Email inválido");
            form.email.focus();
            isAdd = false;
        }
    }
    return isReady;
}
function loginVoluntario(form, link) {
    isReady = validaFormLogin(form);
    if (isReady) {
        const http = new XMLHttpRequest(); //XHR - cria um objeto para requisição ao servidor
        const url = link;

        // alert(form.senha.value + " " + form.email.value)

        let data = { email: "", senha: "" };
        let dataToSend;

        http.open("POST", link, true);
        http.setRequestHeader('Content-Type', 'application/json'); //constroi um cabecalho http para envio dos dados

        data.email = form.email.value;
        data.senha = form.senha.value;

        dataToSend = JSON.stringify(data);
        http.send(dataToSend);

        /*
        * No http.onload é rodado assincrono
       */
        http.onload = (status, response) => {
            if (http.status === 200) { //testa se o envio foi bem sucedido
                let resp = JSON.parse(http.responseText);
                console.log("resp do fonte ", resp);
                let user = {
                    id_voluntario_org: resp.id_voluntario_org,
                    fk_tipo_voluntario: resp.fk_tipo_voluntario,
                    nome: resp.nome,
                    email: resp.email,
                }
                console.log(user);
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = "/cadastro_acao";
            } else {
                let resp = JSON.parse(http.responseText);
                alert(resp.response)
                console.log("Usuário ou senha", http.responseText);
            }
        };
    }
}
//E separar essas numa pagina chamada acoes
function validaFormAcao(form) {
    isReady = true;

    if (form.nome_inst.value == "" || form.localizacao.value == "" || form.num_voluntarios.value == ""
        || form.num_beneficiados == "" || form.regional.value == "") {
        alert("Preencha todos os campos")
        isReady = false;
    } else {

        if (!Number.isInteger(Number(form.num_beneficiados.value))) {
            alert("Preencha corretamente o número de beneficiados (sem virgula ou ponto)");
            form.num_beneficiados.focus();
            isReady = false;
        }
        /*if (Number.isInteger(Number(form.num_beneficiados.value)) < 0) {
            alert("Este campo não aceita números negativos");
            form.num_beneficiados.focus();
            isReady = false;
        }*/
        //Validar se ta negativo nao ta dando certo. Fazer depois
        if (!Number.isInteger(Number(form.num_voluntarios.value))) {
            alert("Preencha corretamente o número de voluntários (sem virgula ou ponto)");
            form.num_voluntarios.focus();
            isReady = false;
        }
        /*if (Number.isInteger(Number(form.num_voluntarios.value)) < 0) {
            alert("Este campo não aceita números negativos");
            form.num_voluntarios.focus();
            isReady = false;
        }*/
        if (!Number.isInteger(Number(form.regional.value))) {
            alert("Preencha corretamente o número de voluntários (sem virgula ou ponto)");
            form.regional.focus();
            isReady = false;
        }

        if (Number.isInteger(Number(form.regional.value)) == 0) {
            alert("Digite uma regional valida (1 a 12)");
            form.regional.focus();
            isReady = false;
        }
        
    }
    return isReady;
}

function cadastroAcao(form, link) {
    if (validaFormAcao(form)) {

        const http = new XMLHttpRequest(); //XHR - cria um objeto para requisição ao servidor
        const url = link;

        let user = JSON.parse(localStorage.getItem("user"));
        let acao = { fk_voluntario_org: user.id_voluntario_org, nome_inst: "", localizacao: "", num_voluntarios: "", num_beneficiados: "", regional: "" };
        let dataToSend;

        http.open("POST", link, true);
        http.setRequestHeader('Content-Type', 'application/json'); //constroi um cabecalho http para envio dos dados

        console.log("form: " + form);
        //acao.fk_voluntario_org = user_section.id_voluntario_org.value;
        acao.nome_inst = form.nome_inst.value;
        //alert(form.nome_inst.value + " " + acao.nome_inst.value + " " + acao.nome_inst);
        acao.localizacao = form.localizacao.value;
        acao.num_voluntarios = form.num_voluntarios.value;
        acao.num_beneficiados = form.num_beneficiados.value;
        acao.regional = form.regional.value;
        console.log("acao " + acao);

        dataToSend = JSON.stringify(acao);
        http.send(dataToSend);

        /*
        * No http.onload é rodado assincrono
        */
        
        http.onload = (status, response) => {
            if (http.status === 200) { //testa se o envio foi bem sucedido
                alert("Ação cadastrada com sucesso! Acesse a página inicial para conferir as alterações");
            } else {
                console.log("Erro ao cadastrar. Tente novamente", http.responseText);
            }
        };
       
    }

}


function getRegionalInfo(link, regional) {

    const http = new XMLHttpRequest(); //cria um objeto para requisição ao servidor
    let acao;
    http.open('POST', '/consulta/acao', true); //abre uma comunicação com o servidor através de uma requisição POST
    http.setRequestHeader('Content-Type', 'application/json'); //constroi um cabecalho http para envio dos dados

    //send vazio pois não desejamos enviar nada para o servidor, estamos fazendo apenas uma requisição
    dataToSend = JSON.stringify({ regional: regional })
    http.send(dataToSend);

    http.onload = () => {
        if (http.readyState === 4 && http.status === 200) {
            //transforma a string  em formato JSON enviada pelo servidor novamente no seu tipo de dado anterior (lista de objetos)
            acao = JSON.parse(http.responseText);
            altera_mapa(acao);
        } else {
            if(http.status === 600){
                acao = 0;
                altera_mapa(acao, regional);
            }else{
                 console.log("Erro no servidor", http.responseText);
            }
        }
    }
} 

function altera_mapa(data, regional) {
    //data é a lista que retorna do servidor
    var info = document.getElementById("lateral-direita");
    info.removeChild(info.firstElementChild);
    var content = document.createElement("div");
    
    if(!data){
        content.innerHTML = '<h5>Infelizmente não foram realizadas ações na regional '+regional+'. Considere doar para isso <3</h3>';
    }else{
        content.innerHTML = '<h3>Regional ' + data.regional + '</h3>'+
                            '<img id="img-regional" src="img/fotos/img_regional' + data.regional + '.jpg" alt="Regional '+data.regional+'">'+
                            '<h5>'+data.nome_inst+'</h5><br>'+
                            '<h5>'+data.localizacao+'</h5><br>'+
                            '<h5>'+data.num_voluntarios+' Voluntários</h5><br>'+
                            '<h5>'+data.num_beneficiados+' Beneficiados</h5><br>';

        // content.innerHTML = '<img id="img-regional" src="/assets/img/fotos/img_regional' + data.regional + '"alt="Regional '+data.regional+'">';
    }
    info.appendChild(content);
}

function pageScroll(x) {
    window.scrollTo({ top: x, behavior: 'smooth' })
}

function enviarDadosDoacao(form, link){
    
    const http = new XMLHttpRequest(); //cria um objeto para requisição ao servidor
    const url=link;
    var myForm = document.getElementById('doacao');
    let data = {name: "", email: "", code: ""};
    data.name = myForm.name.value;
    data.email = myForm.email.value;
    data.code = myForm.code.value;
    let dataToSend = JSON.stringify(data);

    http.open('POST',link,true); //abre uma comunicação com o servidor através de uma requisição POST
    http.setRequestHeader('Content-Type','application/json'); //constroi um cabecalho http para envio dos dados
    
    http.send(dataToSend);

    /* este codigo abaixo foi colocado para que a interface de cadastro so seja modificada quando se receber um aviso do servidor que a modificacao foi feita com sucesso. No caso o aviso vem na forma do codigo 200 de HTTP: OK */

    /*
    readyState:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready

    status:
    200: "OK"
    403: "Forbidden"
    404: "Page not found"
    */

    // baseado nos valores acima apresentados, o codigo abaixo mostra o que foi enviado pelo servidor como resposta ao envio de dados. No caso, se o request foi finalizado e o response foi recebido, a mensagem recebida do servidor eh mostrada no console do navegador. esse codigo foi feito apenas para verificar se tudo ocorreu bem no envio

    http.onload = ()=>{
        if (http.readyState === 4 && http.status === 200) {
            //transforma a string  em formato JSON enviada pelo servidor novamente no seu tipo de dado anterior (lista de objetos)
            alert("Envio de doação confirmada!");
            window.location.href = "/";
        } else {

        }
        

    }
}