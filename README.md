# Pokémon Cards

Sistema de registro de cartas e batalhas pokémon, com comparações por stats, tipos e efetividade.

<div>
<img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white"/>
</div>

</div>

## 💻 Sobre

A aplicação consiste em um sistema de batalhas pokémon, juntamente com uma API que fornece todos os dados necessários para seu funcionamento. Cada Card contém um id (de acordo com a pokédex oficial), stats de batalha e seus tipos, que terão influência nos calculos de dano. A API armazena todos os resultados das batalhas, que consiste em um log de turnos entre os duelistas, informando os pontos de vida, o dano e as variáveis do calculo final(crítico e fraquezas).

O Projeto conta com uma [documentação](https://filmes-apirest.herokuapp.com/api) com todas as rotas, modelos e exemplos das requisições. Para acessar, siga o passo a passo na sessão de instalação.

### Features

- [x] Operações para cadastro, listagem, consulta, exclusão e alteração de cartas

- [x] Paginação e filtragem por tipos na listagem de cartas

- [x] Operações para comparação de cartas

- [x] Armazenamento de cartas e dos resultados das batalhas

## 📥 Instalação

### Pré-requisitos:

- [Node.js](https://nodejs.org/en/)

1. Faça o download como ZIP clicando neste [link](https://github.com/C836/Pokemon-Cards/archive/refs/heads/main.zip) e extraia a pasta no local de sua preferência ou siga o passo a passo para fazer a instalação através do terminal do [Git:](https://git-scm.com/)

```bash
# Navegue pelos arquivos com o comando "cd" e faça o download do projeto

# Via SSH
$ git clone git@github.com:C836/Pokemon-Cards.git
# ou via HTTPS
$ git clone https://github.com/C836/Pokemon-Cards.git

# Após o download, entre na pasta raiz da aplicação
$ cd Pokemon-Cards
```

2. Instale as dependências necessárias e inicie a aplicação.

```bash
$ npm install

$ npm start
```

## 📝 Licença

<b>Copyright (c) 2022 Gabriel Lopes</b>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](#) para mais detalhes.
