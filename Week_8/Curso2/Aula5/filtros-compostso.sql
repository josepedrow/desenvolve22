use sucos;

select * from tbproduto;

select * from tbproduto where PRECO_LISTA >= 16.007 and PRECO_LISTA <= 16.009; /*equivale ao between*/

select * from tbcliente;

select * from tbcliente where IDADE >=18 and IDADE <=22;  /*filtro composto com e (and) && */

select * from tbcliente where IDADE >=18 and IDADE <=22 and SEXO="M"; 

select * from tbcliente where CIDADE = "Rio de Janeiro" or BAIRRO ="Jardins" and SEXO="M"; /*and e or juntos*/

select * from tbcliente where (IDADE >=18 and IDADE <=22 and SEXO="M") 
or (CIDADE = "Rio de Janeiro" or BAIRRO ="Jardins") ; /*condições de filtro podem ser usadas para Update, delete..etc*/
