import { AppDataSource } from "database/database";
import express from "express";
import cors from 'cors'
import clienteRoute from 'routes/cliente'
import produtoRoute from 'routes/produto'
import ServicoRoute from 'routes/servico'
import { produtos } from "models/produto";
import { servicos } from "models/servico";
import { cliente } from "models/cliente";
import { CPF } from "models/cpf";

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccesStatus: 200
};

const app = express();
try {
    AppDataSource.initialize().then(async () => {
        const find = await AppDataSource.createQueryBuilder()
            .select(["c"])
            .from(cliente, "c")
            .where("c.cliente_nome = :cliente_nome", { cliente_nome: "Julio Cesar Rodrigues Lucena Costa" })
            .getOne()
        console.log('Banco conectado com sucesso');
        if (!(find)) {
            await AppDataSource.createQueryBuilder()
                .insert()
                .into(produtos)
                .values([
                    { produto_nome: "Sabonete", produto_valor: 10.00 },
                    { produto_nome: "Condicionador", produto_valor: 20.00 },
                    { produto_nome: "Blush", produto_valor: 5.00 },
                    { produto_nome: "Shampoo", produto_valor: 7.50 },
                    { produto_nome: "Esmalte", produto_valor: 7.50 },
                    { produto_nome: "Pó", produto_valor: 7.50 },
                ])
                .execute()
            await AppDataSource.createQueryBuilder()
                .insert()
                .into(servicos)
                .values([
                    { servico_nome: "Manicure", servico_valor: 30.55 },
                    { servico_nome: "Pedicure", servico_valor: 30.15 },
                    { servico_nome: "Hidratação", servico_valor: 50.00 },
                    { servico_nome: "Dia da Noiva", servico_valor: 5200.00 },
                    { servico_nome: "Cirurgia Plástica", servico_valor: 1200.75 },
                    { servico_nome: "Corte", servico_valor: 50.00 },
                    
                    
                ])
                .execute()
            await AppDataSource.createQueryBuilder()
                .insert()
                .into(cliente)
                .values([
                    { cliente_nome: "Julio Cesar Rodrigues Lucena Costa", cliente_genero: "Masculino", cliente_nomeSocial: "Julio Lucena" },
                    { cliente_nome: "Ryan Alves de Quadros", cliente_genero: "Masculino", cliente_nomeSocial: "KiseXL" },
                    { cliente_nome: "Andressa Ginevro", cliente_genero: "Feminino", cliente_nomeSocial: "Andressa" },
                    { cliente_nome: "Marta Vieira da Silva", cliente_genero: "Feminino", cliente_nomeSocial: "Rainha Marta" },
                    { cliente_nome: "Ronaldo Nazário", cliente_genero: "Masculino", cliente_nomeSocial: "Ronaldinho" },
                    { cliente_nome: "Ristu Doan", cliente_genero: "Masculino", cliente_nomeSocial: "Lenda do Japão" },
                    { cliente_nome: "Alisha Lehmann", cliente_genero: "Feminino", cliente_nomeSocial: "Alisha" },

                    
                    
                ])
                .execute()
            await AppDataSource.createQueryBuilder()
                .insert()
                .into(`produto_cliente`)
                .values([
                    { clienteClienteId: 1, produtosProdutoId: 1 }, { clienteClienteId: 1, produtosProdutoId: 2 },
                    { clienteClienteId: 1, produtosProdutoId: 3 }, { clienteClienteId: 1, produtosProdutoId: 4 },
                    { clienteClienteId: 1, produtosProdutoId: 5 }, { clienteClienteId: 1, produtosProdutoId: 6 },
                    { clienteClienteId: 2, produtosProdutoId: 1 }, { clienteClienteId: 2, produtosProdutoId: 4 }, 
                    { clienteClienteId: 2, produtosProdutoId: 2 }, { clienteClienteId: 2, produtosProdutoId: 3 },
                    { clienteClienteId: 3, produtosProdutoId: 1 }, { clienteClienteId: 3, produtosProdutoId: 2 },
                    { clienteClienteId: 3, produtosProdutoId: 3 }, { clienteClienteId: 3, produtosProdutoId: 4 },
                    { clienteClienteId: 4, produtosProdutoId: 1 }, { clienteClienteId: 4, produtosProdutoId: 2 },
                    { clienteClienteId: 4, produtosProdutoId: 3 }, { clienteClienteId: 4, produtosProdutoId: 4 },
                    { clienteClienteId: 5, produtosProdutoId: 1 }, { clienteClienteId: 5, produtosProdutoId: 2 },
                    { clienteClienteId: 6, produtosProdutoId: 1 }, { clienteClienteId: 6, produtosProdutoId: 2 },
                    { clienteClienteId: 7, produtosProdutoId: 1 }, { clienteClienteId: 7, produtosProdutoId: 2 },
                ])
                .execute()
                await AppDataSource.createQueryBuilder()
                .insert()
                .into(`servico_cliente`)
                .values([
                    {clienteClienteId:1 , servicosServicoId: 1},
                    {clienteClienteId:1 , servicosServicoId: 3},
                    {clienteClienteId:1 , servicosServicoId: 5},
                    {clienteClienteId:2 , servicosServicoId: 1},
                    {clienteClienteId:2 , servicosServicoId: 2},
                    {clienteClienteId:2 , servicosServicoId: 3},
                    {clienteClienteId:3 , servicosServicoId: 4},
                    {clienteClienteId:3 , servicosServicoId: 3},
                    {clienteClienteId:3 , servicosServicoId: 2},
                    {clienteClienteId:4 , servicosServicoId: 1},
                    {clienteClienteId:5 , servicosServicoId: 3},
                    {clienteClienteId:5 , servicosServicoId: 4},
                    {clienteClienteId:6 , servicosServicoId: 2},
                    {clienteClienteId:7 , servicosServicoId: 1},
                    {clienteClienteId:7 , servicosServicoId: 2},
                    {clienteClienteId:7 , servicosServicoId: 3},
                    {clienteClienteId:7 , servicosServicoId: 4},
                  
                ])
                .execute()
        }
    })
} catch (error) {
    console.log(`Connection error ${error}`);
}

app.use(cors());
app.use(express.json());
app.use('/cliente', clienteRoute)
app.use('/produto', produtoRoute)
app.use('/servico', ServicoRoute)
app.listen(5000, () => console.log('Server conectado com sucesso'))