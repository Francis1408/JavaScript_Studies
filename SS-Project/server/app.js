// importação de dependência(s)
import express from 'express';
import fs from 'fs';
import _ from 'underscore';




// variáveis globais deste módulo
const PORT = 4000
const app = express();




// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// você pode colocar o conteúdo dos arquivos json no objeto "db" logo abaixo
// dica: 1-4 linhas de código (você deve usar o módulo de filesystem (fs))
const db = {
    players : JSON.parse(fs.readFileSync('server/data/jogadores.json')),
    player_games: JSON.parse(fs.readFileSync('server/data/jogosPorJogador.json'))
}


// configurar qual templating engine usar. Sugestão: hbs (handlebars)
//app.set('view engine', '???qual-templating-engine???');
//app.set('views', '???caminho-ate-pasta???');
app.set('view engine', 'hbs');
app.set('views','server/views');


// EXERCÍCIO 2
// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json (~3 linhas)
app.get('/', (req, res) => {
    res.render('index', db.players);
})

app.get('/jogador/:numero_identificador/', (req, res) =>{
    const id = req.params.numero_identificador;

    let perfil = _.find(db.players.players, function(el) {return el.steamid === id});
    let jogos = db.player_games[id];

    jogos.not_played_count = _.where(jogos.games, {playtime_forever : 0}).length;
    jogos.games = _.sortBy(jogos.games, function(el) {
        return -el.playtime_forever;
    })

    jogos.games = _.head(jogos.games, 5);

    jogos.games = _.map(jogos.games, (el) => {
        el.playtime_forever_h = Math.round(el.playtime_forever/60);
        return el;
    });

    res.render('jogador', {
        profile_id : id,
        profile: perfil,
        gameInfo: jogos,
        favorite: jogos.games[0]    
    });
})


// EXERCÍCIO 3
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter ~15 linhas de código


// configurar para servir os arquivos estáticos da pasta "client"

app.use(express.static('client'))


// abrir servidor na porta 4000 (constante PORT)

app.listen(PORT, () => {
    console.log(`Escutando em: http://localhost:${PORT}`)
})
