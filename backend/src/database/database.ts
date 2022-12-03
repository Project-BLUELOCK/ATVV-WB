import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql", // Tipo do Banco usado
    host: "localhost", // Host do Banco
    port: 3306, // Porta do Banco
    username: "root", // Usuário do Banco
    password: "julio", // Senha do Banco
    database: "crud", // Nome do Banco
    synchronize: true, // Sincronizar o Banco
    logging: false, // Logar no Banco
    entities: ["src/models/*.ts"], // Entidades do Banco
    subscribers: [], // Subscribers do Banco
    migrations: [], // Migrations do Banco
})