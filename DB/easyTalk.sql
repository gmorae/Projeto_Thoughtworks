create database easyTalk;
use easyTalk;
create table categoria(
	id_categoria int identity primary key not null,
	nome_categoria varchar(50)
)

create table tipo_usuario(
	id_tipo int identity primary key not null,
	nome_tipo_usuario varchar(50)
)

create table usuario(
	id_usuario int identity primary key not null, 
	nome_usuario varchar(50),
	email varchar(100) unique,
	senha varchar(100),
	telefone_movel varchar(20),
	id_tipo int foreign key references tipo_usuario(id_tipo)
)

create table eventos(
	id_evento int identity primary key not null,
	nome_evento varchar(100),
	descricao text,
	data_evento DateTime,
	data_criacao DateTime,
	ativo int,
	localizacao varchar(100),
	id_categoria int foreign key references categoria(id_categoria),
	id_usuario int foreign key references usuario(id_usuario),
	id_responsavel int foreign key references usuario(id_usuario)
)


INSERT INTO categoria 
VALUES ('Tecnologia'),
	   ('Sustentabilidade'),
	   ('Diversidade'),
	   ('Educação');

INSERT INTO usuario
VALUES ('Alexandre Castro','alexcastro@gmail.com','12345678','11987654557',1),
	   ('Samuel Santos','samsantos@gmail.com','87654321','11987874543',3),
	   ('Zacarias Gonçalves','zacgoncalves@gmail.com','12348765','11920644557',2),
	   ('Luis Cardozo','luicard@gmail.com','43215678','1198767621',1);

INSERT INTO tipo_usuario
VALUES ('Administrador'),
	   ('Comunidade'),
	   ('Funcionário');

INSERT INTO eventos
VALUES ('HacktoberFest','Um evento de tecnologia aonde as pessoas vão beber muito e conversar sobre tecnologia','2020-13-10','2020-02-03','1','Loft',1,3,2),
	   ('Oktober Cloud','Um evento sobre tecnologia aonde as pessoas vão beber muito e se coneguirem irão conversar sobre tecnologia','2020-21-10','2020-05-06','0','Algum lugar de Blumenau',1,4,3);


