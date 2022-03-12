select * from tbcliente;

select CPF, NOME from tbcliente; /*pode indicar os campos específicos*/

select CPF, NOME from tbcliente limit 5; /*limita 5 registros*/

select CPF as CPF_CLIENTE, NOME as NOME_CLIENTE from tbcliente limit 5; /*alias, nome fantasia dos campos*/