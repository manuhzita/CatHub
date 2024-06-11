# Sistema cathub

1. Configuração do Banco de Dados:
   Execute o script SQL fornecido abaixo para criar a tabela cadastro.
      ````
    create table cadastro ( id int auto_increment not null primary key, nome varchar(40), email varchar(50), senha varchar(50))
   ````
tabela de contato (rota sem funcionar, não conseguimos arrumar)
CREATE TABLE Contato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL
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
