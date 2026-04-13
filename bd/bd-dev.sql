CREATE DATABASE `viaja_dev`;

USE `viaja_dev`;

CREATE TABLE usuario (
email VARCHAR(200) not null,
token char(64),
senha varchar(10) not null,
nome varchar (200)
);