DROP DATABASE `viaja_dev`;
CREATE DATABASE `viaja_dev`;
USE `viaja_dev`;

CREATE TABLE empresa (
id_empresa int primary key auto_increment,
nome_fantasia varchar(100) not null,
cnpj char(11) not null unique,
email_empresa varchar(100) not null unique,
token varchar(45) not null unique
);

CREATE TABLE usuario (
id_usuario int primary key auto_increment,
nome varchar (200),
email_usuario VARCHAR(200) not null,
senha varchar(10) not null,
is_admin tinyint,
fk_empresa int not null,
constraint fkEmpresaUsuario foreign key (fk_empresa) references empresa(id_empresa) 
);

insert into empresa (nome_fantasia, cnpj, email_empresa, token) values
('teste1', '12345678911', 'teste@email.com', '123'),
('teste2', '12345678912', 'teste2@email.com', '456');

select * from empresa;