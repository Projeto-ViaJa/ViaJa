CREATE DATABASE IF NOT EXISTS viaja_dev;
USE viaja_dev;

CREATE TABLE IF NOT EXISTS empresa (
    id_empresa int primary key auto_increment,
    nome_fantasia varchar(100) not null,
    cnpj char(14) not null unique,
    email_empresa varchar(100) not null unique,
    token varchar(45) not null unique
);

CREATE TABLE IF NOT EXISTS usuario (
    id_usuario int primary key auto_increment,
    nome varchar(200),
    email_usuario varchar(200) not null,
    senha varchar(10) not null,
    is_admin tinyint,
    fk_empresa int not null,
    ativo tinyint default 1,
    permissao varchar(20) default 'Usuário',
    nivel int default 1,
    constraint fkEmpresaUsuario
        foreign key (fk_empresa) references empresa(id_empresa)
);

CREATE TABLE IF NOT EXISTS hotel (
    id_hotel int primary key auto_increment,
    nome varchar(200) not null,
    nome_rede varchar(200),
    rua varchar(200),
    cidade varchar(100),
    estado varchar(50),
    numero varchar(10),
    email varchar(200) unique,
    telefone varchar(20),
    cep varchar(10),
    fk_empresa int,
    constraint fkEmpresaHotel
        foreign key (fk_empresa) references empresa(id_empresa)
);

INSERT INTO empresa (nome_fantasia, cnpj, email_empresa, token) VALUES
('teste1','12345678901234','teste@email.com','123'),
('teste2','12345678901235','teste2@email.com','456');
