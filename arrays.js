// Aqui criamos um array!
const ricks = [
    {
        nome: "Rick Sanchez",
        dimensao: "C-137",
        idade: 90,
    },
    {
        nome: "Rick Sanchez",
        dimensao: "C-500",
        idade: 90,
    },
];

ricks.map(console.log);

// Também podemos filtrar arrays!
// O que é muitooo foda!
const ricksDaDimensaoC137 = ricks.filter((rick) => {
    // Só pra lembrar que, 
    // A função Filter do Array, retorna um NOVO
    // ARRAY! Ou seja, ele não altera o array original 
    // de ricks!
    if(rick.dimensao == 'C-137') {
        // Dentro da função que você passa pro 
        // Filter, você DEVE! sempre retornar
        // True ou False!
        // Pra quem você retornar true, ele fica no array
        // Pra quem você retornar false, ele desaparece do array
        return true;
    } else {
        return false;
    }
});
// Agora a variavel ricksDaDimensaoC137 tem só os
// Elementos que você "deixou" passar na função!
console.log(ricksDaDimensaoC137);

// E por ultimo, o mais complexo...
// Temos o reduce! Que é a parada mais FODA dos array!
// Imagina que você tem que pegar todos os ricks,
// Somar a idade deles!