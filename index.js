const express = require('express');
const app = express();

const port = 3000;

const games = [
    'GTA',
    'Ragnarok',
    'Tibia',
    'Minecraft',
    'The Sims',
    'Mortal kombat',
    'SuperMarioWorld',
    'Bomberman',
    "Just Dance",
    "Call of Duty"
];

const msgInicio = [
    'Bem vindos',
    'Ola amigos, bem vindo ao servidor',
    'Este é meu servidor'
];

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function frase(num){
    return msgInicio[num];
};

console.log(frase(randomMinMax(0,3)));

const msg = "teste";

//GET / home
app.get('/',(req, res) => {
    res.send(`<h1>${frase(randomMinMax(0,3))}</h1>`);
});

app.get("/jogos",(req, res) => {
    res.send(games);
});

app.get("/jogos/:id", (req, res) => {
    const id = req.params.id -1;
    const game = games[id];
    if (id > games.length -1 || id < 0){
        res.send("ID inválido, insira outro.");
    }else {
        res.send(game);
    };
});

games.forEach(function (item, indice){
    console.log(item, indice);
});

console.log(games.length);

app.listen(port, () => {
    console.info(`App esta rodando em: http://localhost:${port}/`);
});