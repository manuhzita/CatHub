# Sistema cathub

1. Configuração do Banco de Dados:
   Execute o script SQL fornecido abaixo para criar a tabela cadastro.
   ````
   CREATE TABLE `cadastro` ( 
     `idCadastro` INT AUTO_INCREMENT NOT NULL,
     `nome` VARCHAR(150) NOT NULL,
     `email` VARCHAR(150) NOT NULL,
     `telefone` VARCHAR(20) NOT NULL,
     `cpf` VARCHAR(20) NOT NULL,
     `endereco` VARCHAR(250) NOT NULL,
     `senha` VARCHAR(45) NOT NULL,
     CONSTRAINT `PRIMARY` PRIMARY KEY (`idCadastro`)
   );
   ````

2. Inicie o servidor backend:
   ````
   cd backend
   node server.js
   ````

3. Inicie o servidor frontend:
   ````
   cd frontend
   npm start
   ````

4. Acesse o sistema em http://localhost:3000.

## Tecnologias Utilizadas
   > - React
   > - Node.js
   > - Express
   > - MySQL
   > - Axios

# CatHub
