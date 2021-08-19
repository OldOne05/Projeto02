const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

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
    const jogo = games[id];
    if (!jogo) {
        res.send("Jogo não encontrado.");
    } else{
        res.send(jogo);
    };
});

app.post("/jogos", (req, res) => {
    const jogo = req.body.jogo;
    const id = games.lenght +1;
    games.push(jogo)

    res.send(`Jogo adicionado: ${jogo}.
    Seu ID é: ${id}.`)
})

app.put("/jogos/:id", (req, res) => {
    const id = req.params.id -1;
    const jogo = req.body.jogo;
    const nomeAnterior = games[id];
    games[id] = jogo;
    res.send(`Jogo anterior: ${nomeAnterior}, atualizado com sucesso para: ${jogo}.`)
});

app.delete("/jogos/:id", (req, res) => {
    const id = req.params.id -1;
    const jogo = games[id];
    if(!jogo) {
        res.send("Jogo não encontrado.");
    }
    delete games[id];
    res.send("Jogo excluído");
});

app.listen(port, () => {
    console.info(`App esta rodando em: http://localhost:${port}/`);
});