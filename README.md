<h1 align="center">Node JS ApiRest</h1>

<h2>:bulb:Protótipo da aplicação</h2>
 <p>A Api irá fornecer dados para o protótipo disponibilizado no <a href="https://xd.adobe.com/view/1798f30c-7746-444c-bffa-91b29835eef5-42cb/">Link</a></p>


 <h2>✅ Requisitos não funcionais</h2>
 <p>A aplicação deverá ser feita em utilizando express com o (sequelize) ou adonisjs.
 Os métodos get, post, put, devem ser coerentes com os retornos necessários definidos no protótipo. Ex: na tela de repositórios é necessário retornar um objeto { data: (array de repositório com suas respectivas stars), count: quantidade de itens retornados. }</p>


<h2>✅ Requisitos funcionais</h2>
 <p>CRUD de users (nome, email, localização, avatar, username, bio). Um usuário deve ser único</p>
 <p>O método de autenticação devera buscar se o usuário esta cadastrado na tabela users, se sim retornar os dados com sucesso, e armazenar o id do usuário e a data da requisição em uma tabela chamada Tokens.</p>
 <p>CRUD de follower (todo follower deve ser um usuário, criar a relação pertinente para follower e user).</p>
 <p>CRUD de following (todo following deve ser um usuário, criar a relação pertinente para following e user).</p>
 <p>CRUD de repositories (nome, description, public, slug). A propriedade slug deve ser concatenada com o nome de usuário e o nome do repositório.</p>
 <p>CRUD de repositories stars (Esse crud devera manter a relação de usuários que deram stars para um repositório, criar relação pertinente entre users, repositories).</p>
 <p>Gostaríamos de ver os campos necessários para os endpoints fossem validados na request, opcional.</p>

<h2> :wrench: Pré-requisitos</h2>

 Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além disto é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/)


:rocket: Para rodar a aplicação

  ```bash

# Clone este repositório
$ git clone https://github.com/Gabriel52/Nodejs-ApiRest

# Execute o comando para instalar todas as dependências
$ npm install ou yarn

# Execute a aplicação em modo de desenvolvimento, é importante executar este
$ nodemon server.js ou yarn start

# A aplicação web será aberta na porta:8000 - acesse http://localhost:8000/api/v1/

 ```

## 🛠 Tecnologias
Node.js (Back-End);

Sequelize;

JsonWebToken

Eslint

MySQL (Banco de Dados);

<h2> :book: Licença </h2>
<p>Lançado em 2021 :book:</p></br>
<p>Feito por Gabriel Brune :rocket:. Este projeto está sobre a licença do MIT</p></br>
<p>Dar uma :star: se este projeto te ajudou</p>

<h2> 🐛 Problemas</h2>
<p>Sinta-se à vontade para registrar um novo problema com o respectivo título e descrição no repositório Nodejs-ApiRest. Se você já encontrou uma solução para seu problema, eu adoraria revisar sua solicitação de pull !</p>

<h2>Documentação - Endpoints</h2>

## Login

### POST /authentication
Este endpoint fica responsavel pela autenticação do usuário, retornando seu respectivo token
### Params
name, email

### Response
```bash
  {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJndXN0YXZvX2d1YW5hYmFy2432324324YTg5QG91dGxvb2suY29tIiwiaWF0IjoxNjE0MDMzNjM5LCJleHAiOjE2MTQxMjAwMzl9.6X4t0WotBkei7BlXYgJM01tTv1xYdR-1-sXjEboZu9U",
    "user": {
      "email": "gustavo_guanabara89@outlook.com",
      "id": 6
    }
  }
```
### GET /authentication
Este endpoint retorna a data e em os usuários se logaram
### Params
nenhum

### Response
```bash
{
  "success": true,
  "data": [
    {
      "id": 1,
      "user_id": 6,
      "created_at": "2021-02-22T22:40:39.000Z",
      "updated_at": "2021-02-22T22:40:39.000Z",
      "User": {
        "id": 6,
        "name": "Gustavo Guanabara",
        "email": "gustavo_guanabara89@outlook.com",
        "status": "A",
        "localization": "Ponta Negra - RN",
        "username": "@gafanhoto",
        "bio": "Esta bio é apenas um teste",
        "created_at": "2021-02-22T22:39:39.000Z",
        "updated_at": "2021-02-22T22:39:39.000Z"
      }
    }
  ]
}
```
## User

### POST /user
Este endpoint fica responsavel pela criação de usuários
### Params
name, email, password, username, localization, bio

### Response
```bash
  {
   {
    "success": true,
    "message": "Beatriz Rodrigues criado com sucesso"
    }
  }
```

### GET /user
Este endpoint retorna todos os usuários
### Params
nenhum

### Response
```bash
  {
   "success": true,
  "data": [
    {
      "id": 1,
      "name": "Phelipe Coutinho",
      "email": "paulinho52@gmail.co",
      "status": "A",
      "localization": "Macaiba - RN",
      "username": "Coutinho58",
      "bio": "Esta bio é apenas um teste",
      "created_at": "2021-02-22T22:29:47.000Z",
      "updated_at": "2021-02-22T22:44:02.000Z"
    },
    {
      "id": 2,
      "name": "Marcus Oliveira",
      "email": "marcus@gmail.co",
      "status": "A",
      "localization": "Taboão - SP",
      "username": "Marcus_Oliveira",
      "bio": "Esta bio é apenas um teste",
      "created_at": "2021-02-22T22:30:41.000Z",
      "updated_at": "2021-02-22T22:30:41.000Z"
    },
  }
```
### DELETE /user/:id
Este endpoint fica responsavel por desativar usuários
### Params
nenhum

### Response
```bash
  {
   {
    "success": true,
    "message": "Beatriz Rodrigues criado com sucesso"
    }
  }
```


### PUT /user/:id
Este endpoint fica responsavel por atualizar usuário
### Params
name, username, localization, bio

### Response
```bash
  {
   {
    "success": true,
    "message": "Atualizado com sucesso"
    }
  }
```

## Photo

### POST /photo
Este endpoint fica responsavel por criar uma foto e a vincular com um usuário
### Params
file, user_id

### Response
```bash
 {
  "success": true,
  "message": "Foto salva com sucesso",
  "file": {
    "fieldname": "file",
    "originalname": "perfil.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "C:\\Users\\gabri\\Documents\\challenge\\challengeLuby\\uploads",
    "filename": "1614033965879_6.jpg",
    "path": "C:\\Users\\gabri\\Documents\\challenge\\challengeLuby\\uploads\\1614033965879_6.jpg",
    "size": 27569
  }
}
```

## Follow

### POST /follower
Este endpoint fica responsavel por seguir um usuário
### Params
following

### Response
```bash
{
  "success": true,
  "message": "Você está seguindo Gustavo Guanabara"
}
```

### GET /follower
Este endpoint fica responsavel por mostar quem você está seguindo
### Params
nenhum

### Response
```bash
{
  "success": true,
  "data": [
    {
      "id": 2,
      "name": "Marcus Oliveira",
      "username": "Marcus_Oliveira",
      "user_id": 6,
      "following": 2
    },
    {
      "id": 1,
      "name": "Phelipe Coutinho",
      "username": "Coutinho58",
      "user_id": 6,
      "following": 1
    }
  ],
  "amount": 2
}
```

### GET /following
Este endpoint fica responsavel por mostar quem está te seguindo
### Params
nenhum

### Response
```bash
{
  "success": true,
  "data": [
    {
      "id": 3,
      "name": "Gabriel Brune",
      "username": "@Gabriel_Brune",
      "user_id": 3,
      "following": 6
    },
    {
      "id": 4,
      "name": "Mario Souto",
      "username": "@Mario_Soutinho",
      "user_id": 4,
      "following": 6
    },
    {
      "id": 6,
      "name": "Gustavo Guanabara",
      "username": "@gafanhoto",
      "user_id": 6,
      "following": 6
    }
  ],
  "amount": 3
}
```

## Repository

### POST /repository
Este endpoint fica responsavel por criar um repositorio
### Params
name:String, description: String, public: Boolean

### Response
```bash
{
  "success": true,
  "message": "CRUD em C# criado com sucesso"
}
```

### GET /repository
Este endpoint retorna todos os repositorios daquele usuário
### Params
nenhum

### Response
```bash
{
 "success": false,
  "data": [
    {
      "id": 3,
      "user_id": 6,
      "name": "Blog Guiapress",
      "description": "O GuiaPress é uma plataforma que foi criado como uma pagina de busca para conteúdos educacionais. Aqui você pode encontrar o trabalho de escola, artigos, atividades infantis entre outras coisas.",
      "slug": "Gustavo-Guanabara-Blog-Guiapress",
      "status": "A",
      "public": 1,
      "created_at": "2021-02-23T02:03:31.000Z",
      "updated_at": "2021-02-23T02:03:31.000Z"
    },
    {
      "id": 4,
      "user_id": 6,
      "name": "Escala",
      "description": "O projeto tem o objetivo de diminuir o índice de evasão escolar, os principais motivos que identificamos foi a falta de motivação e a necessidade de arrumar um emprego, por isso criamos uma plataforma que permite as escolas cadastrarem seus professores e turmas, os professores ficam responsáveis por cadastrar os alunos e os desafios para eles realizarem, eles são recompensados por Reason Coin(moeda virtual), e uma oportunidade de serem vistos pelas empresas, já que as empresas conseguem realizar uma busca customizada por filtros, procurando estudantes com o perfil respectivo a vaga.",
      "slug": "Gustavo-Guanabara-Escala",
      "status": "A",
      "public": 1,
      "created_at": "2021-02-23T02:04:37.000Z",
      "updated_at": "2021-02-23T02:04:37.000Z"
    }
  ],
  "amount": 2
}
```

### DELETE /repository/:id
Este endpoint fica responsavel por deletar um repositorio
### Params
id:int
### Response
```bash
{
  "success": true,
  "message": "Excluido com sucesso"
}
```

## Star

### POST /star
Este endpoint fica responsavel por dar estrela em um repositorio
### Params
repository_id: Integer
### Response
```bash
{
  "success": true,
  "message": "Você acabou de dar estrela no repositorio Blog Guiapress"
}
```

### GET /star
Este endpoint fica responsavel por mostar as estrela de um repositorio
### Params
repository: Integer
### Response
```bash
{
  "success": true,
  "data": [
    {
      "name": "Blog Guiapress",
      "username": "@Gabriel_Brune",
      "user_id": 3,
      "repository_id": 3,
      "status": "A"
    },
    {
      "name": "Blog Guiapress",
      "username": "@gafanhoto",
      "user_id": 6,
      "repository_id": 3,
      "status": "A"
    },
    {
      "name": "Blog Guiapress",
      "username": "@Joãozinho",
      "user_id": 5,
      "repository_id": 3,
      "status": "A"
    },
    {
      "name": "Blog Guiapress",
      "username": "Marcus_Oliveira",
      "user_id": 2,
      "repository_id": 3,
      "status": "A"
    },
    {
      "name": "Blog Guiapress",
      "username": "@Mario_Soutinho",
      "user_id": 4,
      "repository_id": 3,
      "status": "A"
    },
    {
      "name": "Blog Guiapress",
      "username": "Coutinho58",
      "user_id": 1,
      "repository_id": 3,
      "status": "A"
    }
  ],
  "amount": 6
}
```
### DELETE /star/:id
Este endpoint fica responsavel por retirar uma estrela de um repositorio
### Params
id:int
### Response
```bash
{
  "success": true,
  "message": "Retirado com sucesso"
}
```

## Home

### GET /
Este endpoint fica responsavel por retornar o usuário e sua foto
### Params
nenhum
### Response
```bash
{
  "success": true,
  "user": {
    "id": 6,
    "name": "Gustavo Guanabara",
    "email": "gustavo_guanabara89@outlook.com",
    "password": "$2a$10$PfUr1ooVm56KOpW6rjote.PRAdqMW4HNi/KvYalnFGtnm4zfY7QKO",
    "status": "A",
    "localization": "Ponta Negra - RN",
    "username": "@gafanhoto",
    "bio": "Esta bio é apenas um teste",
    "created_at": "2021-02-22T22:39:39.000Z",
    "updated_at": "2021-02-22T22:39:39.000Z"
  },
  "avatar": {
    "id": 6,
    "originalname": "perfil.jpg",
    "filename": "1614033965879_6.jpg",
    "user_id": 6,
    "created_at": "2021-02-22T22:46:05.000Z",
    "updated_at": "2021-02-22T22:46:05.000Z"
  }
}
```

