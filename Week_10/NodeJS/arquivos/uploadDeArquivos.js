//le a imagem, salva como buffer para ser escrita (desenhada) quando quiser
const fs = require('fs');

//USANDO O BUFFER
//leitura de forma SÍNCRONA, Isso pode travar o código se o file for mt pesado
//vamos trocar por STREAM

// fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {

//função CALLBACK
//     console.log('Imagem foi bufferizada');
//     // console.log(buffer);

//     //escrita
//     fs.writeFile('./assets/salsicha2.jpg', buffer, (erro) => {
//         console.log("Imagem foi escrita");
//     })
// })


//USANDO O STREAM
//ler aos poucos o arquivo, n permite callback
fs.createReadStream('./assets/salsicha.jpg')
    .pipe(fs.createWriteStream('./assets/salsicha-stream.jpg')) //cria a leitura e escrita
    .on('finish', () => {
        console.log("Imagem escrita com sucesso");
    })