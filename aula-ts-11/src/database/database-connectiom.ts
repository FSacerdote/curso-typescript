import pg from "pg"

const { Pool } = pg

const db = new Pool({
    connectionString: "" // string de conexão com o banco de dados
})

export { db }