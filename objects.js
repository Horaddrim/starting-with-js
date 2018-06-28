const Rick = {
    nome: "Rick Sanchez",
    dimensao: 'C-137',
};

class MelhorPersonagem {
    constructor() {
        this.nome = "Rick";
    }
}

function melhorPersonagem() {
    this.nome = "Squanchy";
}

const rickzinho2 = new melhorPersonagem();

const rickzinho = new MelhorPersonagem();

console.log(rickzinho)
console.log(rickzinho2)

// console.log(JSON.stringify(Rick, null, 2));

