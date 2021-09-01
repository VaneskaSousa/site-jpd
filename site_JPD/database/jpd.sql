# Criação das categorias
DROP DATABASE jpd;
CREATE database jpd;
USE jpd;

CREATE TABLE periodicidade_apoio (
    id_periodicidade_apoio int NOT NULL AUTO_INCREMENT,
    periodicidade VARCHAR(140) NOT NULL,
    PRIMARY KEY (id_periodicidade_apoio)
);
CREATE TABLE tipo_doacao (
    id_tipo_doacao int NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(45) NOT NULL,
    descricao VARCHAR(140),
    PRIMARY KEY (id_tipo_doacao)
);
CREATE TABLE tipo_acao (
    id_tipo_acao int NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(45) NOT NULL,
    descricao VARCHAR(140),
    PRIMARY KEY (id_tipo_acao)
);
CREATE TABLE tipo_voluntarios (
    id_tipo_voluntarios int NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(45) NOT NULL,
    descricao VARCHAR(140),
    PRIMARY KEY (id_tipo_voluntarios)
);
CREATE TABLE tipo_apoio (
    id_tipo_apoio int NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(45) NOT NULL,
    valor int NOT NULL,
    descricao VARCHAR(140),
    fk_periodicidade_apoio int NOT NULL,
    PRIMARY KEY (id_tipo_apoio),
	FOREIGN KEY (fk_periodicidade_apoio) REFERENCES periodicidade_apoio(id_periodicidade_apoio)
);

# Criacao dos usuarios
CREATE TABLE voluntario_org (
	id_voluntario_org int NOT NULL AUTO_INCREMENT,
    fk_tipo_voluntarios int NOT NULL,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(140) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_voluntario_org),
	FOREIGN KEY (fk_tipo_voluntarios) REFERENCES tipo_voluntarios(id_tipo_voluntarios)
);
CREATE TABLE patrocinador (
	idpatrocinador int NOT NULL AUTO_INCREMENT,
    #fk_tipo_apoio int NOT NULL,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(140) NOT NULL,
    comprovante VARCHAR(255) NOT NULL,
    PRIMARY KEY (idpatrocinador)
	#FOREIGN KEY (fk_tipo_apoio) REFERENCES tipo_apoio(id_tipo_apoio)
);

# Criacao de dados e acoes
CREATE TABLE dados_gerais (
	id_dados_gerais int NOT NULL AUTO_INCREMENT,
    fk_voluntario_org int NOT NULL,
    num_acoes INT NOT NULL,
    PRIMARY KEY (id_dados_gerais),
	FOREIGN KEY (fk_voluntario_org) REFERENCES voluntario_org(id_voluntario_org)
);
CREATE TABLE acoes (
	id_acoes int NOT NULL AUTO_INCREMENT,
    fk_voluntario_org int NOT NULL,
	#fk_tipo_acao int NOT NULL,
	#fk_tipo_doacao int NOT NULL,
	nome_inst VARCHAR(45) NOT NULL,
    localizacao VARCHAR(45) NOT NULL,
    num_voluntarios int NOT NULL,
	num_beneficiados int,
    regional VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_acoes),
	FOREIGN KEY (fk_voluntario_org) REFERENCES voluntario_org(id_voluntario_org)
	#FOREIGN KEY (fk_tipo_acao) REFERENCES tipo_acao(id_tipo_acao),
	#FOREIGN KEY (fk_tipo_doacao) REFERENCES tipo_doacao(id_tipo_doacao)
);

# insercao de dados iniciais
insert into periodicidade_apoio(periodicidade) values ("unico");
insert into periodicidade_apoio(periodicidade) values ("mensal");

insert into tipo_doacao(tipo,descricao) values ("Alimentação", "Arrecadação e doação de cestas básicas");
insert into tipo_doacao(tipo,descricao) values ("Roupas", "Arrecadação e doação de roupas novas e usadas");
insert into tipo_doacao(tipo,descricao) values ("Material de higiene", "Arrecadação e doação de material de higiene pessoal");

insert into tipo_acao(tipo,descricao) values ("Crianças", "Pintar, desenhar, brincar com crianças");
insert into tipo_acao(tipo,descricao) values ("Dia das crianças", "Comemorar o dia das crianças com atividades para elas");
insert into tipo_acao(tipo,descricao) values ("Idosos", "Conversar, cantar, contar historias para idoso");
insert into tipo_acao(tipo,descricao) values ("Pessoas em situação de rua", "Dar de comer, beber e interagir com pessoas em situação de rua");

insert into tipo_voluntarios(tipo,descricao) values ("Coordenação", "Pessoas voluntarias que estão encarregadas da organização e burocracia da ONG");
insert into tipo_voluntarios(tipo,descricao) values ("Fixos", "Voluntarios que já cumpriram com os requisitos e agora são recorrentes da ONG");
insert into tipo_voluntarios(tipo,descricao) values ("Assembleia", "Todas as pessoas que querem contribuir nas ações");

insert into tipo_voluntarios(tipo,descricao) values ("Assembleia", "Todas as pessoas que querem contribuir nas ações");
insert into tipo_voluntarios(tipo,descricao) values ("Assembleia", "Todas as pessoas que querem contribuir nas ações");
insert into tipo_voluntarios(tipo,descricao) values ("Assembleia", "Todas as pessoas que querem contribuir nas ações");

insert into tipo_apoio(tipo,valor,descricao,fk_periodicidade_apoio) values ("Doação Ouro", 200,"Agradecimento nas redes sociais com fotos do evento",1);
insert into tipo_apoio(tipo,valor,descricao,fk_periodicidade_apoio) values ("Doação Prata", 150,"Agradecimento nas redes sociais com fotos do evento e divulgação com midia kit",1);
insert into tipo_apoio(tipo,valor,descricao,fk_periodicidade_apoio) values ("Doação Bronze", 100,"Todos os beneficios anteriores, logo na camisa e no material de divulgação como bottons",1);
INSERT INTO `jpd`.`tipo_apoio` (`tipo`, `valor`, `descricao`, `fk_periodicidade_apoio`) VALUES ('Doacao Menor', '99', 'Agradecimento nas redes sociais', '2');

insert into voluntario_org(fk_tipo_voluntarios,nome,email,senha) values (1, "Ester", "ester@jpd.com","!@#123qwE");
INSERT INTO `jpd`.`voluntario_org` (`fk_tipo_voluntarios`, `nome`, `email`, `senha`) VALUES ('1', 'Equipe Rocket', 'teste@teste.com', '1234');

INSERT INTO `jpd`.`acoes` (`fk_voluntario_org`, `nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES ('2', 'Equipe Rocket', 'Rua alo, bairro seu joao', '15', '30', '1');
INSERT INTO `jpd`.`acoes` (`fk_voluntario_org`, `nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES ('2', 'Rocket', 'rua alo, bairro seu jose', '10', '15', '2');
INSERT INTO `jpd`.`acoes` (`fk_voluntario_org`, `nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES ('2', 'Equipe', 'rua iei, bairro uuu', '20', '50', '3');
INSERT INTO `jpd`.`acoes` (`fk_voluntario_org`, `nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES ('2', 'Dell', 'rua tarlala, bairro iei', '8', '25', '4');
INSERT INTO `jpd`.`acoes` (`fk_voluntario_org`, `nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES ('2', 'Rachel', 'rua la bairro ca', '5', '6', '5');
INSERT INTO `jpd`.`acoes` (`fk_voluntario_org`, `nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES ('2', 'Vaneska', 'rua ali bairro aqui', '12', '12', '6');
INSERT INTO `jpd`.`acoes` (`fk_voluntario_org`, `nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES ('2', 'Oliver', 'rua lua', '11', '10', '7');
INSERT INTO `jpd`.`acoes` (`fk_voluntario_org`, `nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES ('2', 'Lilian', 'bairro oxe', '4', '8', '8');
INSERT INTO `jpd`.`acoes` (`fk_voluntario_org`, `nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES ('2', 'Jovens Pela Diferença', 'Fortaleza-CE', '7', '30', '9');
INSERT INTO `jpd`.`acoes` (`fk_voluntario_org`, `nome_inst`, `localizacao`, `num_voluntarios`, `num_beneficiados`, `regional`) VALUES ('2', 'Projeto I', 'UFC', '20', '50', '10');

# where para causas nao relacionais e INNER JOIN para pegar informaçoes entre tabelas