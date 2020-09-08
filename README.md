# backend-bybitx
Aplicação BackEnd como avaliação profissional para vaga de Desenvolvedor Jr usando node.js com express, typescript e mongoose, ainda por cima utilizando JEST como ferramenta de teste!

## Desafio BitX Backend Jr.
Desenvolver uma API para cadastro e organização de uma coleção de jogos de vídeo-
games, seguindo as seguintes especificações:
- Uma rota para cadastro de vídeo-games
- Uma rota para cadastro de jogos
- Uma rota para listar todos os jogos cadastrados
- Uma rota para listar os vídeo-games cadastrados
- Uma rota para visualizar jogos cadastrados por vídeo-games
Todas as respostas para as requisições deverão ser no formato JSON, com o seguinte
padrão:
```
//Jogo
{
  sucess: true,
  data: {
    id: “5b0aod1400aab2sctr21”,
    name: “The Legend of Zelda: Majoras Mask”,
    console_name: “Nintendo 64”,
    console_id: “5b9bf990db09acs1bca22a”
  }
}

//Video-game
{
  sucess: true,
  data: {
    id: “5b9bf990db09acs1bca22a”,
    name: “Nintendo 64”,
    company: “Nintendo”
  }
}
```

### Rotas criadas
/videogame (GET, POST)

/videogame/:id (GET, PUT, DELETE)

/game (GET, POST)

/game/:id (GET, PUT, DELETE)

/game/videogame/:id (GET)

