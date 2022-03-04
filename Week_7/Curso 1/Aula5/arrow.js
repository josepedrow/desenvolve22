// =>

const apresentarArrow = nome => `meu nome é ${nome}`;

console.log(apresentarArrow("José"));


const soma = (num1,num2) => num1+num2;
console.log(soma(2,6));

const somaNumerosPequenos = (num1,num2) => {
    if (num1 || num2 >10) {
        return "números de 1 a 9"
    }else {
        return num1 + num2;
    }
}