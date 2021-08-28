# Site para a ONG Jovens Pela Diferença

## Equipe Rocket

| Nome  	| Função | Atividade Complementar |   	   	
|---	|---	|---	|	
| Rachel | Líder | Backup de front-end  	|   	   	
| Vaneska | Desenvolvedora e testes | Desenvolvimento  	|   	   	
| Matheus 	| Desenvolvedor | Desenvolvimento |   	   	
| Lilian 	| Designer | Backup de back-end |   	   	
| Oliver 	| Designer 	| Backup extra em CSS e experiência do usuário  	|   	   	

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
| Modelo banco de dados  	| [site-jpd/database/](https://github.com/VaneskaSousa/site-jpd/tree/main/site_JPD/database)  	
| Sript banco de dados  	| [site-jpd/database/](https://github.com/VaneskaSousa/site-jpd/tree/main/site_JPD/database)  	   	   	
| HTML  	| [site-jpd/](https://github.com/VaneskaSousa/site-jpd/tree/main/site_JPD) 	   	
| CSS  	| [site-jpd/css](https://github.com/VaneskaSousa/site-jpd/tree/main/site_JPD/css)
| Javascript | [site-jpd/javascript](https://github.com/VaneskaSousa/site-jpd/tree/main/site_JPD/js)

### Requisitos e progessos
No relatorio os requisitos foram divididos entre gerais e detalhados, onde os gerais funcionam como milestones. Para não gerar confusões, durante o checkpoint 3 (até dia 04/08/21) os requisitos levados em consideração sao apenas os detalhados, sendo eles:

| Requisito  	| Dificuldade  | Status  	| local  	| Observação  	|
|---	|---	|---	|---	|---	|
| RD_1: Estrutura. Como patrocinador ou interessado na ONG posso acessar o site desta e nele encontrar logo na primeira tela como chegar nas informações sobre, ações, voluntários (time) e ajude.  	| G  | Finalizado |  [Página Inicial](https://github.com/VaneskaSousa/site-jpd/blob/main/site_JPD/views/layout.ejs) 	| Responsável: Mattheus  	|
| RD_2: Mídia inicial. Como patrocinador ou interessado na ONG posso ver na primeira sessão do site um vídeo ou fotos da ONG em ação.  	| P | Finalizado | [!--Início--](https://github.com/VaneskaSousa/site-jpd/blob/main/site_JPD/views/pages/home.ejs)  	| Responsável: Mattheus  	|
| RD_3: Impacto social. Como patrocinador ou interessado na ONG posso ver o impacto causado pela organização de maneira objetiva. 	| M |  Finalizado 	|  [!--Sobre--](https://github.com/VaneskaSousa/site-jpd/blob/main/site_JPD/views/pages/home.ejs) 	|  Responsável: Mattheus 	|
| RD_4: Detalhe das ações. Como patrocinador ou interessado na ONG posso ver os bairros em que a ONG já atuou, bem como detalhes dessas ações em seu site.  	|  G 	|  Em desenvolvimento 	|  [!--Mapa--](https://github.com/VaneskaSousa/site-jpd/blob/main/site_JPD/views/pages/home.ejs) 	|  Responsável: Mattheus 	|
| RD_5: Detalhes dos voluntários. Como patrocinador ou interessado na ONG posso ver no site como a ONG se organiza em voluntários e coordenadores, sabendo assim quem são os responsáveis e a capacidade da ONG.   	|  M 	|  Finalizado 	|   [!--Time--](https://github.com/VaneskaSousa/site-jpd/blob/main/site_JPD/views/pages/home.ejs)	|  Responsável: Mattheus 	|
| RD_6: Detalhes sobre a ajuda. Como patrocinador posso ver os tipos de patrocínio, bem como qual o bem que aquela cota de patrocínio trás às ações (quantas cestas básicas é possível comprar, quantas ações podem ser financiadas) e quais os ganhos institucionais (mídia kit, publicidade, logo na camisa).   	|  P	|  Finalizado 	|  [!--Ajude--](https://github.com/VaneskaSousa/site-jpd/blob/main/site_JPD/views/pages/home.ejs) 	| Responsável: Mattheus	|
| RD_7: Contato. Como patrocinador ou interessado na ONG posso entrar em contato através do site com os líderes da ONG.   	|  P	|  Finalizado 	|  [Footer](https://github.com/VaneskaSousa/site-jpd/blob/main/site_JPD/views/pages/home.ejs) 	| Responsável: Mattheus 	|
| RD_8: Login do voluntário organizador. Como voluntário organizador posso clicar na opção de login na página  inicial para entrar na minha conta.  	|  M 	|  Finalizado 	|  [Login](https://github.com/VaneskaSousa/site-jpd/blob/main/site_JPD/views/pages/login.ejs) 	|  Responsável: Mattheus 	|
| RD_9: Página inicial do voluntário organizador. Como voluntário organizador posso visualizar as explicações sobre o formato a ser inserido e o local para fazer upload  	|  M	|  Finalizado 	|  [Cadastro](https://github.com/VaneskaSousa/site-jpd/blob/main/site_JPD/views/pages/cadastro_acao.ejs) 	|  Responsável: Mattheus 	|
| RD_10: Do ato de patrocinar. Como patrocinador posso escolher o tipo de patrocínio e ser direcionado para uma página de banco (paypal, picpay) com os dados já cadastrados apenas para eu preencher com os meus dados bancários.  	|  M 	|  A desenvolver 	|  X 	|  Responsável: Mattheus 	|
| RD_11: Do feedback do patrocinador. Como patrocinador posso entrar numa área de “eu ajudei” e assim enviar o meu contato e o anexo do comprovante de patrocínio para assim continuar o contato e receber os benefícios do patrocinador.   	|  M 	|  A desenvolver 	|  X	|  Responsável: Mattheus 	|
| RD_12: Mapa interativo. Como patrocinador ou interessado na ONG posso interagir com os bairros do mapa de Fortaleza-Ce, cidade onde a ONG atua, e assim conferir os detalhes das ações atualizadas realizadas naquele bairro de maneira dinâmica, sem poluir a experiência com muitas informações.   	|  GG 	|  A desenvolver 	|  X 	|   Responsável: Vaneska |
| RD_13: Login do voluntário organizador. Como voluntário organizador posso fazer login no site usando o email e a senha institucionais da ONG.  	|   	|   	|   	| Responsável: Vaneska  	|
| RD_14: Do cadastro de dados. Como voluntário organizador posso inserir  os dados conforme as orientações da página inicial do voluntário e assim cadastrar as informações.  	|   	|   	|   	|  Responsável: Mattheus e Vaneska 	|
| RD_15: Do tratamento de erro no cadastro de dados. Como voluntário organizador posso saber se meus dados foram cadastrados corretamente ou não.  	|   	|   	|   	| Responsável: Mattheus e Vaneska |
| RD_16: Do tratamento de erro no cadastro de dados. Como voluntário organizador posso conferir os dados que foram cadastrados por mim na inserção da planilha.  	|   	|   	|   	|  Responsável: Mattheus e Vaneska 	|
| RD_17: Do tratamento de erro no cadastro de dados. Como voluntário organizador posso saber se meus dados foram cadastrados corretamente ou não.  	|   	|   	|   	|  Responsável: Mattheus e VaneskaResponsável: Mattheus e Vaneska 	|
| RD_18: Da edição dos dados. Como voluntário organizador posso editar os dados anteriormente cadastrados por mim, seja através de campos editáveis ou refazendo o upload dos arquivos.  	|   	|   	|   	|  Responsável: Mattheus e Vaneska 	|
| RD_19: Da exclusão de dados. Como voluntário organizador posso excluir os dados que foram cadastrados anteriormente por mim.  	|   	|   	|   	|  Responsável: Mattheus e Vaneska 	|
| RD_20: Do tratamento de erro na exclusão de dados. Como voluntário organizador, nunca deve ser permitido deixar o campo de dados sem nenhuma informação cadastrada.  	|   	|   	|   	|  Responsável: Mattheus 	|
| RD_21: Do tratamento de erro no cadastro de dados. Como voluntário organizador posso saber se meus dados foram cadastrados corretamente ou não.  	|   	|   	|   	|  Responsável: Mattheus e Vaneska 	|
| RD_22: Do contato entre interessado e ONG. Como interessado na ONG ou patrocinador posso escrever uma mensagem no formulário de contato e enviar por email ou por outra rede social automaticamente (whatsapp).  	|   	|   	|   	|  Responsável: Vaneska 	|
