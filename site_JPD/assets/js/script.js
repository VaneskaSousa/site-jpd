function altera_mapa(data) {
    var info = document.getElementById("lateral-direita");
    info.removeChild(info.firstElementChild);
    var content = document.createElement("div");
    content.innerHTML= '<h3>Regional '+data.regional+'</h3><img id="img-regional" src='+data.image+' alt="regional1"><p>'+data.text+'</p>';
    info.appendChild(content);
    // switch (regional){
    //     case 1: 
    //         content.innerHTML= '<h3>Regional '+regional+'</h3><img id="img-regional" src="https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg" alt="regional1"><p>Teste do bagulho</p>';
    //         info.appendChild(content);
    //         break;
            
    //     case 2:
    //         content.innerHTML= '<h3>Regional</h3><img id="img-regional" src="https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg" alt="regional1"><p>Teste do bagulho</p>';
    //         info.appendChild(content);
    //         break;
    // }
}

function letMeCallYou()
{
    alert("Bazinga!!!  you called letMeCallYou");
    return true;
}

function pageScroll(x) {
    window.scrollTo({ top: x, behavior: 'smooth' })
}

function login_usuario(){
    alert("Welcome");
}

function getRegionalInfo(link, regional){
    
    const http = new XMLHttpRequest(); //cria um objeto para requisição ao servidor
    const url=link;
    let lista;

    http.open('POST',link,true); //abre uma comunicação com o servidor através de uma requisição POST
    http.setRequestHeader('Content-Type','application/json'); //constroi um cabecalho http para envio dos dados
    
    //send vazio pois não desejamos enviar nada para o servidor, estamos fazendo apenas uma requisição
    dataToSend = JSON.stringify({regional:regional})
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
            lista = JSON.parse(http.response);
            altera_mapa(lista);
        
        } else {
        }
        

    }
}