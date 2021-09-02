# Site para a ONG Jovens Pela Diferença

## Equipe Rocket

| Nome  	| Função | Atividade Complementar |   	   	
|---	|---	|---	|	
| Rachel | Líder | Backup de front-end  	|   	   	
| Vaneska | Desenvolvedora e testes | Desenvolvimento  back-end, DBA e testes	|   	   	
| Matheus 	| Desenvolvedor | Desenvolvimento front-end |   	   	
| Lilian 	| Designer | Backup de front-end |   	   	
| Oliver 	| Designer 	| Backup extra em CSS e experiência do usuário  	|   	   	

## Projeto: Site para ONG Jovens Pela Diferença
* **Cliente**: ONG Jovens Pela Diferença
* **Descrição**: do Projeto: Para atender o escopo da disciplina de Projeto Integrado I, a ONG Jovens pela Diferença foi contactada para ser o cliente do projeto. A ONG tem como objetivo promover ações sociais com o foco em crianças, bem como formação técnica para os próprios voluntários. 
A necessidade específica do cliente é uma ferramenta que contribua para a prospecção de patrocinadores, e o problema seja a aplicação dessa necessidade na prática. Para isso, a equipe pensou em fazer um infográfico interativo que mostre os dados estatísticos da ONG na aplicação web, para que o possível patrocinador veja o website da associação civil e tenha informações sobre a mesma. Como é uma ONG ativa, os dados estão sempre atualizando, então a parte de manutenção desses dados seria feita pelos próprios voluntários.

## Colaboradores
| Nome  	| Colaboradores |  	   	
|---	|---	|
| Wellington Wagner F. Sarmento | Códigos de AM2 usados como base para restruturação do projeto |

## Tecnologias usadas:

| Área  	| Tecnologias  	 	
|---	|---		
| Design  	| Figma  	   	
| Front-end  	| HTML, CSS  	   	
| Backend  	| Node.js com JavaScript
| Banco de dados | MySQL

Por enquanto, o modelo do banco de dados segue a estrutura abaixo:
![](https://i.imgur.com/nUDOqNK.png)

## Arquivos do Projeto
| Arquivo  	| Local  	 	
|---	|---		
| Modelo e script de banco de dados  	| [site-jpd/database/](https://github.com/VaneskaSousa/site-jpd/tree/main/site_JPD/database)  	
| HTML  	| [site-jpd/views](https://github.com/VaneskaSousa/site-jpd/tree/main/site_JPD/views) 	   	
| CSS  	| [site-jpd/assets/css](https://github.com/VaneskaSousa/site-jpd/tree/main/site_JPD/assets/css)
| Javascript | [site-jpd/assets/js/script.js](https://github.com/VaneskaSousa/site-jpd/blob/main/site_JPD/assets/js/script.js)

### Requisitos e progressos

#### Requisitos Gerais
| User Story  	| Status  	 	
|---	|---	
| RI_1: Informações sobre a instituição. Como patrocinador posso acessar o site da ONG e ser capaz de entender qual o objetivo da organização e como ela está estruturada, quem são, onde estão localizados, quais ações sociais são executadas e como posso entrar em contato. | :heavy_check_mark:
| RI_2: Cadastro de dados. Como voluntário organizador posso acessar a plataforma web através do site institucional e cadastrar as informações que serão apresentadas na prospecção do patrocinador, como número de ações já realizadas, regiões da cidade que foram impactadas, número de voluntários e as demais informações que o cliente julgar necessário em conjunto desta equipe. | :heavy_check_mark:
| RI_3: Consistência de dados. Como voluntário organizador posso acessar o site institucional, após fazer o cadastro dos dados na plataforma, e verificar que as informações apresentadas estão conforme os listados por mim | :heavy_check_mark:
| RI_4: Mapeamento de ações. Como patrocinador posso conferir em quais bairros e/ou regiões a ONG já esteve presente, bem como outros detalhes através de um mapa interativo. | :heavy_check_mark:
|RI_5: Interação e correlação entre valor doado e ações realizadas. Como patrocinadora quero conferir, com apelo emocional e interação, o impacto social causado pela ONG e pelo valor doado a ela a ONG | :heavy_check_mark: (com alterações que a ONG propos)
|RI_6: Cadastro de patrocínio. Como patrocinador posso entrar me cadastrar dentro do tipo de patrocínio em que me encaixo mas de forma interactiva que fuja de formulário, e-mails ou terceiros. | :heavy_check_mark:
|RI_7: Resultado do patrocínio. Como patrocinador, após me inscrever para realizar a doação, quero receber resposta direta e dentro do ambiente web em que estou. | ⚠️(isso só nao foi implementando no front, mas o servidor está pronto para receber (o database)
|RI_8: Resultado do cadastro de dados. Como voluntário organizador quero saber se os dados que cadastrei estão no formato correto | :heavy_check_mark: (validação do formato dos dados)
|RI_9: Resultado do upload de dados. Como voluntário organizador quero saber se os dados que cadastrei foram devidamente atualizados. | :heavy_check_mark:
|RI_10: Formulário de contato. Como patrocinador ou interessado na ONG, quero conseguir entrar em contato, via site, com a organização. | :heavy_check_mark: (possivel fazer isso ao enviar o comprovante)

#### Requisitos detalhados
| User Story  	| Status | OBS  	 	
|---	|---	|---	
| RD_1: Estrutura. Como patrocinador ou interessado na ONG posso acessar o site desta e nele encontrar logo na primeira tela como chegar nas informações sobre, ações, voluntários (time) e ajude.  	| :heavy_check_mark:	 | Foi concluído com a ressalva de não estar responsivo
| RD_2: Mídia inicial. Como patrocinador ou interessado na ONG posso ver na primeira sessão do site um vídeo ou foto da ONG em ação. | :heavy_check_mark: | No inicio do site consta uma foto.
| RD_3: Impacto social. Como patrocinador ou interessado na ONG posso ver o impacto causado pela organização de maneira objetiva. 	| :heavy_check_mark: |  Finalizado, na sessão de ***'ações'***.
| RD_4: Detalhe das ações. Como patrocinador ou interessado na ONG posso ver os bairros em que a ONG já atuou, bem como detalhes dessas ações em seu site.  	|   :heavy_check_mark:	|  Em desenvolvimento 	|  Está na sessão de mapa. Foi necessário usar placeholder enquanto a ONG não disponiliza as fotos na resolução correta 	|
| RD_5: Detalhes dos voluntários. Como patrocinador ou interessado na ONG posso ver no site como a ONG se organiza em voluntários e coordenadores, sabendo assim quem são os responsáveis e a capacidade da ONG.   	|  :heavy_check_mark: 	| Na sessão de ***'time'*** | 
| RD_6: Detalhes sobre a ajuda. Como patrocinador posso ver os tipos de patrocínio, bem como qual o bem que aquela cota de patrocínio trás às ações (quantas cestas básicas é possível comprar, quantas ações podem ser financiadas) e quais os ganhos institucionais (mídia kit, publicidade, logo na camisa).   	|  :warning:	|  A ONG optou por não seguir com esta abordagem e sim mostrar apenas os ganhos institucionais como pode ser conferido na sessão ***'ajude'*** :heavy_check_mark:	| 
| RD_7: Contato. Como patrocinador ou interessado na ONG posso entrar em contato através do site com os líderes da ONG.   	|  :x: |  Por ser considerado um story de baixa prioridade para o cliente, não foi concluído em prol de outras melhorias. Apesar disto, as redes sociais e formas de contato constam no footer do site.
| RD_8: Login do voluntário organizador. Como voluntário organizador posso clicar na opção de login na página  inicial para entrar na minha conta.  	| :heavy_check_mark: 	|  Implementado no icone no canto superior direito. 	
| RD_9: Página inicial do voluntário organizador. Como voluntário organizador posso visualizar as explicações sobre o formato a ser inserido e o local para fazer upload dos dados ddas ações	|  :heavy_check_mark:	|  Finalizado, use o email teste@teste.com e a senha 1234 para testa 	|  
| RD_10: Do ato de patrocinar. Como patrocinador posso escolher o tipo de patrocínio e ser direcionado para uma página de banco (paypal, picpay) com os dados já cadastrados apenas para eu preencher com os meus dados bancários.  	|  :heavy_check_mark: 	|  Concluido com uma conta no mercado pago como placeholder enquanto a ONG não manda as informações. 	
| RD_11: Do feedback do patrocinador. Como patrocinador posso entrar numa área de “eu ajudei” e assim enviar o meu contato e o anexo do comprovante de patrocínio para assim continuar o contato e receber os benefícios do patrocinador.   	|  :heavy_check_mark:	|  É possivel acessar esta funcionalidade clicando no botão "confirme sua doação" na sessão ***'ajude'***. Os dados são cadastrado no banco de dados. 
| RD_12: Mapa interativo. Como patrocinador ou interessado na ONG posso interagir com os bairros ou regionais do mapa de Fortaleza-Ce, cidade onde a ONG atua, e assim conferir os detalhes das ações atualizadas realizadas naquele bairro de maneira dinâmica, sem poluir a experiência com muitas informações.   	|  :heavy_check_mark: 	|  A ONG preferiu a abordagem das regionais. É possivel conferir esta funcionalidade na sessão ***'ações'*** 	
| RD_13: Login do voluntário organizador. Como voluntário organizador posso fazer login no site usando o email e a senha institucionais da ONG.  	|   :heavy_check_mark:	|  Feito, é possivel conferir isto no banco de dados com a função `select * from voluntario_org` e depois testando na pagina de login 	
| RD_14: Do cadastro de dados. Como voluntário organizador posso inserir  os dados conforme as orientações da página inicial do voluntário e assim cadastrar as informações.  	| :heavy_check_mark:	|  Como os dados eram poucos, não foi preciso fazer orientações além da validação dos campos da página 	|
| RD_15: Do tratamento de erro no cadastro de dados. Como voluntário organizador posso saber se meus dados foram cadastrados corretamente ou não.  	|  :heavy_check_mark:	| Concluído, possivel chegar em `script.js` e `routes.js`
| RD_16: Do tratamento de erro no cadastro de dados. Como voluntário organizador posso conferir os dados que foram cadastrados por mim na inserção da planilha.  	|  :x:	 	| Existe a validação dos dados mas não é possivel que o usuário cheque os dados (vendo a listagem, por exemplo)
| RD_17: Do tratamento de erro no cadastro de dados. Como voluntário organizador posso saber se meus dados foram cadastrados corretamente ou não.  	| :heavy_check_mark: 	| É possivel conferir no proprio mapa, clicando na região da ação cadastrada. Apesar de estar funcionando, reconhecemos que este não é o jeito mais adequado.  
| RD_18: Da edição dos dados. Como voluntário organizador posso editar os dados anteriormente cadastrados por mim, seja através de campos editáveis ou refazendo o upload dos arquivos.  	| ⚠️	| Não é possivel que o usuário voluntario edite as respostas mas ele pode cadastrar novamente os dados das ações de forma que substitua a anterior, seria o equivalente a "refazer o upload dos arquivos"   
| RD_19: Da exclusão de dados. Como voluntário organizador posso excluir os dados que foram cadastrados anteriormente por mim.  	| :x: | Não é possivel remover uma ação cadastrada através do site. Como a aplicação é simples, substituir a ação seria valido. Por isso priorizamos outros requisitos.
| RD_20: Do tratamento de erro na exclusão de dados. Como voluntário organizador, nunca deve ser permitido deixar o campo de dados sem nenhuma informação cadastrada.  	| :x:  	| Como não é possivel remover uma ação, logo este requisito não foi implementadp.
| RD_21: Do tratamento de erro no cadastro de dados. Como voluntário organizador posso saber se meus dados foram cadastrados corretamente ou não.  	|  :heavy_check_mark: | é possivel receber erro tanto de validação como do banco de dados (servidor)
| RD_22: Do contato entre interessado e ONG. Como interessado na ONG ou patrocinador posso escrever uma mensagem no formulário de contato e enviar por email ou por outra rede social automaticamente (whatsapp).  	|   :x:	| este requisito foi cancelado para priorizar outros 	|

# Pré requisitos para rodar o projeto
* [Express](https://expressjs.com/pt-br/starter/installing.html) baixado e intalado;
* [mySQL](https://dev.mysql.com/downloads/installer/) 5 para realizar a conexão com o banco de dados
> caso seja o 8, é preciso rodar a solução encontrada neste [link aqui](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server) para ser compativel com o node
* [Workbench](https://dev.mysql.com/downloads/workbench/) (ou outra ferramenta para visualização de bancos de dados mySQL) para conferir os dados cadastrados.
