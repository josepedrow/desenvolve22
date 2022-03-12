use sucos;
select * from tbcliente;

select * from tbcliente where DATA_NASCIMENTO = "1995-01-13"; /*exatamente nesse data*/

select * from tbcliente where DATA_NASCIMENTO > "1995-01-13"; /*maior que essa data*/

select * from tbcliente where DATA_NASCIMENTO < "1995-01-13"; /*antes dessa data*/

/*pode trabalhar com partes das datas*/

select * from tbcliente where YEAR(DATA_NASCIMENTO) = 1995; /*ao usar a função YEAR o ano n deve estar com ''*/

select * from tbcliente where MONTH(DATA_NASCIMENTO) = 10 /*quem nasceu em outubro*/
