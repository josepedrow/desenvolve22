USE sucos;

ALTER TABLE tbcliente ADD primary key (CPF);

ALTER TABLE tbcliente add column (DATA_NASCIMENTO DATE);

INSERT INTO tbcliente (
CPF, NOME, ENDERECO1, ENDERECO2, BAIRRO,CIDADE, ESTADO,
CEP, IDADE, SEXO, LIMITE_CREDITO, VOLUME_COMPRA, PRIMEIRA_COMPRA,
DATA_NASCIMENTO)
values ('00388934505','João', 'Rua teste','','Uvaranas',
'Londrina', 'PR', '88884450',30, 'M', 10000.00, 2000,0, '1992-02-29');

select * from tbcliente