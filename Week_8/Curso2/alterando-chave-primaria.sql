USE sucos;

ALTER TABLE tbproduto ADD primary key (PRODUTO);

/*esse comando faz com q PRODUTO da tbproduto seja
primary key. Com isso, n pode ser inserido um novo
produto com o mesmo código do PRODUTO.
*/

select * from tbproduto;