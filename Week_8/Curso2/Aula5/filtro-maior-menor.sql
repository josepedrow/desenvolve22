use sucos;

select * from tbcliente;

select * from tbcliente where idade = 22 ; /*idade igual a 22 */

select * from tbcliente where idade > 22 ;

select * from tbcliente where idade <= 22 ;

select * from tbcliente where idade != 22 ; /*tb pode ser utilizado o <> */

select * from tbcliente where NOME >= "Fernando Cavalcante" ; /*ordena pela ordem do alfabeto e retorna o q foi selecionado*/

select * from tbproduto;

select * from tbproduto where PRECO_LISTA = 16.008;
