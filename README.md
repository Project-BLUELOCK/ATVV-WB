
# Atividade 5 de Técnica de Programação


O objetivo final é criar uma aplicação web, na abordagem SPA, que atenda a todos os requisitos que o sistema precisa  ter,  para  atender  aos  clientes  da  WB.Os  requisitos  foram  descritos  na  atvi, a  primeira  atividadeque deu origem a empresa de desenvolvimento de software.

## Autores

- [@JulioL2001](https://www.github.com/JulioL2001)
- [@XLryan246](https://www.github.com/XLryan246)




## Deploy

Para fazer o deploy desse projeto rode

- Primeiramente crie uma pasta nova na área de trabalho entre nela e de cmd;
- Após isso clone o repositorio git com o seguinte comando no `git clone https://github.com/Project-BLUELOCK/ATVV-WB`;
- Entre na pasta utilizando `cd ATVV-WB`;
- Siga os seguintes passos para rodar tanto o Backend quanto Frontend;
  -  Para o projeto funcionar de maneira adequada ambos tem que estar rodando sendo assim necessário dois terminais. 

### Backend
- Entre na pasta backend do projeto com `cd backend`
- Com o CMD aberto na pasta backend digite o comando `npm i ou npm install`;
- Para os seguintes passos é necessário que tenha a no mmínimo a versão 8.0 do MySQL, entrando na pasta `src/database/` procure o arquivo `database`;
    - Crie um banco dentro do seu MySQL e use ele com os comandos `create database nomedobanco;` e `use nomedobanco;`
    ![image](https://user-images.githubusercontent.com/101107794/205471017-0c807068-c1aa-4a8e-b32e-4a8238ca1f58.png)

    
    
    - Aqui são necessários os valores do seu usuário do MySQL logo terá que fazer alterações em `localhost`, `port`, `username`, `password`, `database` para suas configurações do mySQL;
    
    ![image](https://user-images.githubusercontent.com/101107794/205470904-99f264dc-11a1-4e08-a7b3-2c018ecb7bd5.png)

- Com o Banco configurado agora é só rodar com executando o comando `npm run dev`.


### Frontend
- Em um segundo prompt de comando entre na pasta do frontend com `cd backend`;
- Com o CMD aberto nesta pasta digite o comando `npm i ou npm install`;
- Após o termino do download, assim que for possível digite `npm run start` para a aplicação rodar, espere que o React abra a sua aplicação em algum dos seus navegadores.
