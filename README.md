# Pokémon Cards

Sistema de registro de cartas e batalhas pokémon, com comparações por stats, tipos e efetividade.

![Nest.js](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## 💻 Sobre

A aplicação consiste em um sistema de batalhas pokémon, juntamente com uma API que fornece todos os dados necessários para seu funcionamento. Cada Card contém um id (de acordo com a pokédex oficial), stats de batalha e seus tipos, que terão influência nos calculos de dano e comparações. A API armazena todos os resultados no banco de dados.

### Principais endpoints

O Projeto conta com uma [documentação](https://c836.github.io/Pokemon-Cards) completa, com todas as rotas, modelos e exemplos das requisições (apenas visualização). Para ter acesso aos testes com o banco de dados, siga o passo a passo na sessão de [instalação](#instalação).

```
http://localhost:3333/doc
```

#### Criação de cards

Recebe o modelo do card no corpo da requisição e envia para o banco de dados.

Exemplo:

```bash
"id": 403,
"name": "Shinx",
"type": [ "electric" ],
"attributes": {
  "hp": 45,
  "attack": 65,
  "defense": 34,
  "spAttack": 40,
  "spDefense": 34,
  "speed": 45
}
```

Caso o id selecionado já exista no banco de dados, retorna o erro 409.

#### Comparação de cards

Recebe dois id's de pokémons distintos como parâmetro e retorna um objeto com os atributos vencedores.

Exemplo:

```bash
## 143 (Snorlax) / 149 (Dragonite)
"data": {

  ## Pokémon com o 149 possui mais atributos vencedores
  "winner": 149,
  "loser": 143,
  "details": {
    "hp": 143,
    "attack": 149,
    "defense": 149,
    "spAttack": 149,
    "spDefense": 149,
    "speed": 149
    }
}
```

#### Batalhas

Faz uso dos atributos e tipos do pokémon para calculos de dano. Recebe dois id's de pokémons distintos como parâmetro e retorna um log completo dos turnos.

O calculo de dano consiste no atributo ofensivo de maior valor (ataque ou ataque especial) vezes o multiplicador de tipo dos pokémons (Em caso de crítico, o valor será dobrado).

Calculo final: dano / (numero aleatório entre 2 e 3) + defesa / 100));

Exemplo:

```bash
"data": {
  "winner": 675,
  "loser": 245,
  "log": [
    {
      "attacker": "Pangoro",
      "defender": "Blissey",
      "hp": 255,
      # O atacante causou dano crítico (2x dano)
      "critical": true,
      # Efetividade do tipo "lutador" contra tipo "normal"
      "multiplier": 2,
      # Dano final após os calculos
      "damage": 166
    },
    {
      "attacker": "Blissey",
      "defender": "Pangoro",
      "hp": 95,
      "critical": false,
      "multiplier": 1,
      "damage": 21
    }...
  ]
}
```

### Features

- [x] Operações para cadastro, listagem, consulta, exclusão e alteração de cartas

- [x] Paginação e filtragem por tipos na listagem de cartas

- [x] Operações para comparação de cartas

- [x] Armazenamento de cartas e dos resultados das batalhas e comparações

- [x] Tratamento de erros

- [x] Documentação completa com todas as rotas e modelos de requisição

## 📥 Instalação

1. Instale o [Node.js](https://nodejs.org/en/). 

2. Faça o download como ZIP clicando neste [link](https://github.com/C836/Pokemon-Cards/archive/refs/heads/main.zip) e extraia a pasta no local de sua preferência ou siga o passo a passo para fazer a instalação através do terminal do [Git:](https://git-scm.com/)

```bash
# Navegue pelos arquivos com o comando "cd" e faça o download do projeto

# Via SSH
$ git clone git@github.com:C836/Pokemon-Cards.git
# ou via HTTPS
$ git clone https://github.com/C836/Pokemon-Cards.git

# Após o download, entre na pasta raiz da aplicação
$ cd Pokemon-Cards
```

3. O projeto armazena as cartas e resultados por meio do [MongoDB](https://www.mongodb.com/cloud). Edite o arquivo [.env](https://github.com/C836/Pokemon-Cards/blob/main/.env_example) de acordo com seu usuário e senha. Ao iniciar a aplicação, a conexão será feita automaticamente.

```bash
# URL de conexão:
# mongodb+srv://<USUARIO>:<SENHA>@<CLUSTER>/<COLLECTION>

PORT=3333
DB_USER=@@
DB_PASSWORD=@@
DB_CLUSTER=@@
DB_COLLECTION=pokecards
```

4. Instale as dependências necessárias e inicie a aplicação.

```bash
$ npm install

$ npm start
```

### 🐋 Docker

Substitua as chaves do arquivo .env com suas credênciais do [Atlas](https://cloud.mongodb.com) e inicie a aplicação atráves dos comando abaixo.

#### Local
```bash
$ docker build -t pokecards <local de instalação>

# substitua o caminho do arquivo .env caso necessário
$ sudo docker run --name pokecards --env-file .env -p 3333:3333 pokecards

# ou insira as chaves diretamente pelo comando
$ sudo docker run --name pokecards -e PORT=3333 -e DB_USER=@@ -e DB_PASSWORD=@@ -e DB_CLUSTER=@@ -e DB_COLLECTION=pokecards pokecards
```

#### Dockerhub

Instale e inicie aplicação diretamente atráves do comando:
```bash
$ docker run -e PORT=3333 -e DB_USER=@@ -e DB_PASSWORD=@@ -e DB_CLUSTER=@@ -e DB_COLLECTION="pokecards" c836/pokecards
```

## 📝 Licença

<b>Copyright (c) 2022 Gabriel Lopes</b>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/C836/Pokemon-Cards/blob/main/LICENSE) para mais detalhes.
