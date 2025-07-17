### Observação

Este repositório contem o **Projeto Catálogo de automóveis** que reúne o aprendizado desenvolvido por _[Willian Alves Batista](https://www.linkedin.com/in/willian-alves-batista-60aa6a180/)_.

## Projeto ClickBeard

#### Habilidades que foram exigidas:

  - Logica de programação;
  - Clean Code;
  - UX/UI

#### Tecnologias utilizadas:

  - React;
  - React hook form;
  - chakra-ui;
  - axios;
  - styled-components;
  - TypeScript;
  - CSS;
  - HTML;
  - eslint;
  - vscode;
  - jsonwebtoken;
  - bcrypt;
  - zod;

---

## Inciando o projeto

Para da start no projeto, basta realizar o download ou clonar esse repositório.

Dentro do repositório entre na pasta **backend** no terminal e instale as lib:

    npm install

Para roda o banco de dados:

    docker-compose up -d

Para dar start no orm

    npx prisma generate

Para subir as tabelas:

    npx prisma migrate deploy

É necessario popular o banco com algumas informações, suba a seed com o comando:

    npx prisma db seed

Agora basta da start no backend:

    npm start

vai ficar ativo na rota:  http://localhost:3001/

Para rodar o **Frontend** basta, entre no repositório do frontend e em seguida:

    npm install

E depois:

    npm start

disponível em: http://localhost:3000/

## Acesso Admin no Sistema

  *obs: não é possivel cria user admin pelo sistema, apenas cliente:*
  
**email:** admin@clickbeard.com

**senha:** 123456


## Banco de dados

<img width="862" height="557" alt="erd" src="https://github.com/user-attachments/assets/2356950e-ee04-4752-8f6c-fa635d2052b2" />


Este diagrama representa três entidades principais:

User: Representa os usuários do sistema, que têm um ID exclusivo, nome, e-mail, senha, função (role), e data de criação. Cada usuário pode ter vários agendamentos (ScheduledAppointments).

Barber: Representa os barbeiros do sistema, que também têm um ID exclusivo, nome, idade, data de contratação, especialidades, e datas de criação e atualização. Cada barbeiro pode ter vários agendamentos (ScheduledAppointments).

ScheduledAppointment: Representa os agendamentos marcados pelos usuários. Cada agendamento tem um ID exclusivo, uma data, um usuário associado e um barbeiro associado.

As linhas indicam relacionamentos entre as entidades:

  - Um agendamento (ScheduledAppointment) está associado a um único usuário (User) e a um único barbeiro (Barber).
  - Um usuário (User) pode ter vários agendamentos (ScheduledAppointments).
  - Um barbeiro (Barber) também pode ter vários agendamentos (ScheduledAppointments).


## Backend

O backend é organizado em três grupos principais de rotas: *userRouter*, *barberRouter* e *ScheduledAppointmentRouter*. Cada um desses grupos de rotas oferece funcionalidades para listar, listar por ID, criar e excluir recursos relacionados a usuários, barbeiros e agendamentos. É necessário que os usuários autentiquem-se com um token válido para acessar a API. Além disso, as senhas dos usuários são armazenadas de forma criptografada para garantir a segurança dos dados.

**OBSERVAÇÃO:** Para facilitar a avaliação do projeto e reduzir a complexidade de configuração, optei por incluir o arquivo *.env* no repositório do projeto, contendo a URL do banco de dados de forma pública. Nesse contexto de teste, decidi não utilizar variáveis de ambiente, simplificando assim o processo de avaliação.


