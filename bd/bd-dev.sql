CREATE DATABASE viaJa;
USE viaJa;

-- CRIANDO TABELA EMPRESA --
CREATE TABLE IF NOT EXISTS empresa (
    id_empresa int primary key auto_increment,
    nome_fantasia varchar(100) not null,
    cnpj char(14) not null unique,
    email_empresa varchar(100) not null unique,
    token varchar(45) not null unique
);
    
SELECT * FROM empresa;

-- CRIANDO TABELA USUARIO -- 
CREATE TABLE IF NOT EXISTS usuario (
    id_usuario int primary key auto_increment,
    nome varchar(200),
    email_usuario varchar(200) not null,
    senha varchar(10) not null,
    is_admin tinyint,
    fk_empresa int not null,
    ativo tinyint default 1,
    nivel int default 1,
    constraint fkEmpresaUsuario
        foreign key (fk_empresa) references empresa(id_empresa)
);

SELECT * FROM  usuario;

SELECT e.nome AS "Nome Empresa",
e.cnpj AS "CNPJ",
e.emailEmpresa AS "Email Empresa",
e.tokenEmpresa AS "Token Empresa", 
u.nome AS "Nome Usuário", 
u.email AS "Email Usuário",
u.senha AS "Senha"
 FROM usuario AS u JOIN empresa AS e
	ON u.fkEmpresa = e.idEmpresa;
    
-- CRIANDO TABELA CALENDÁRIO -- 
CREATE TABLE eventosRegistrados(
	idEventosRegistrados INT PRIMARY KEY AUTO_INCREMENT,
    dataInicial DATE, 
    horarioInicial TIME, 
    dataFinal DATE, 
    horarioFinal TIME,
    titulo VARCHAR(200),
    descricao VARCHAR(500), 
    dataRegistro DATE, 
    horarioRegistro TIME,
    fkEmpresa INT, 
    FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
    );
    
SELECT * FROM eventosRegistrados;

SELECT * FROM eventosRegistrados JOIN empresa
	ON fkEmpresa = idEmpresa;
    
-- CRIANDO TABELA BASE 10 ANOS -- 
CREATE TABLE registro_voo (
id int primary key auto_increment,
ano int,
mes int,
origem_uf varchar(200),
origem_regiao varchar(200),
origem_localidade varchar(200),
destino_uf varchar(200),
destino_regiao varchar(200),
destino_localidade varchar(200),
natureza varchar(200),
grupo_voo varchar(200),
passageiros_pagos int,
passageiros_gratis int,
ask long,
rpk long,
atk long,
rtk long,
decolagens int,
assentos int
);

SELECT * FROM base10Anos;

-- CRIANDO TABELA HOSPEDAGENS PARCEIROS --
CREATE TABLE hospedagemParceiros (
    idhospedagemParceiros INT PRIMARY KEY AUTO_INCREMENT,
    cnpj VARCHAR(45),
    nomeFantasia VARCHAR(500),
    tipoHospedagem VARCHAR(100),
    nomeResponsavel VARCHAR(500),
    telContato VARCHAR(45),
    email VARCHAR(200),
    filialOuMatriz VARCHAR(45),
    uf VARCHAR(45),
    municipio VARCHAR(45),
    rua VARCHAR(100),
    bairro VARCHAR(100),
    cep VARCHAR(45)
);

CREATE TABLE hospedagemFavoritos (
    idhospedagemFavoritos INT PRIMARY KEY AUTO_INCREMENT,
    fkHospedagem INT,
    avaliacao VARCHAR(50),
    comentario VARCHAR(45),
    dtEdicao VARCHAR(45),
    fkUsuario INT,
    fkEmpresa INT,
    FOREIGN KEY (fkHospedagem) REFERENCES hospedagemParceiros(idhospedagemParceiros),
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE log (
id int primary key auto_increment,
dataEHora datetime default current_timestamp,
tipo ENUM ('INFO', 'WARNING', 'ERROR'),
modulo varchar(50),
mensagem varchar(255),
descricao text
);