USE sucos;

select * from tbproduto where PRODUTO = "544931";/*especifica quem deve retornar, n necessariamente primary key*/

select * from tbcliente where CIDADE ="Rio de Janeiro"; /*trazendo registros de uma cidade*/

select * from tbcliente where CIDADE ="Rio de Janeiro" || CIDADE = "São Paulo"; /*trazendo registros de duas cidades*/

select * from tbproduto where SABOR = "Limão"; 
update tbproduto SET SABOR = "Cítricos" where SABOR = "Limão"; /*altera propriedade da tabela*/

select * from tbproduto where SABOR != "Cítricos";

select *from tbproduto;

update tbproduto SET SABOR = "Melancia" where SABOR = "Melância"; /*Corrige a escrita de melancia*/


select *from tbproduto where EMBALAGEM = "PET" && SABOR != "Cítricos";