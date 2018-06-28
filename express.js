/**
 * O que é o Express? É uma biblioteca 
 * que ajuda a gente a lidar com requisições
 * HTTP;
 */

// No Node.js existem modulos, que são objetos parrudões
// que conseguem encasuplar variaaas paradas!
const Express = require('express');

// Como vocês lembram, assim podemos pegar uma instância
// do Express.
const app = new Express();

// Pra começar uma aplicação, 
// podemos simplesmente pegar dados!
// Ou seja, GET === Pegar!
app.get('/ricks', (requisicao, resposta) => {
    // Então, pra um servidor, temos 
    // Uma requisição, que é tipo você pedindo
    // Quero meu café...
    console.log(JSON.stringify(requisicao));
    // E temos a Resposta, que é como você 
    // Manda uma resposta do tipo
    // Okay, vou pegar seu café...
    console.log(JSON.stringify(resposta));

    // Por isso que muita gente chama back-end
    // Garçom.. Ou, simplesmente quem não faz nada kkkkkk

    // E dentro da resposta, que é um objeto
    // temos um método! (Função em!) que pode
    // Simplesmente mandar pro front / cliente né!
    // O que você quer!
    resposta.send([
        {
            nome: "Rick Sanchez",
            dimensao: "C-137",
        },
        {
            nome: "Rick Sanchez",
            dimensao: "C-500",
        },
    ])
    //E ai, BOOMMM! Temos o Array de objetos 
    // sendo mandado através do ar! (Zoeira, dos cabos 
    // de internet )
    // e chegando no front!
});

// E depois você precisa ligar o servidor né...
// Porque ali em cima você só falou que se alguém pedir
// os ricks, ou seja, "bater na rota /ricks",
// Você retorna um array de Ricks!
// Esse numero que a gente passa é a porta,
// Que é onde a gente conecta como cliente
// Só uma curiosiadade, qualquer numero aqui 
// Menor que 1024, (não lembro exatamente,
// próximo a isso! então não exagera kkkkkk)
// Ai você vai precisar de permissão de 
// Admin, ou seja, dor de cabeça kkkk
// a 8000 já nos serve bem!
app.listen(8000);

console.log(`
    Escutando na 8000, 
    entre em http://localhost:8000/ricks
    e veja a magica!
    Lembrando que, localhost 
    significa que é o seu HOST
    ou algo como, seu dominio!
`);