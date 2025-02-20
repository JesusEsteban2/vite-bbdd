import { loadEnvFile } from 'node:process';
import mysql from 'mysql2/promise';

export type mc = {
    id: number;
    name: string;
} & mysql.RowDataPacket;

export class ManageGenere {
    private connection: mysql.Connection;

    constructor(connection: mysql.Connection) {
        this.connection = connection;
    }

    openConnection = async () => {
        loadEnvFile();

        console.log('Conectando con ', process.env.DB_HOST);

        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: 'movies_db',
            // process.env.DB_DATABASE,
            port: Number(process.env.DB_PORT),
        });
        console.log('Conectado a la base de datos', connection.config.host);
        return connection;
    };

    getAllGener = async () => {
        const q = 'SELECT genere_id as Id, name FROM generes';
        const [rows] = await this.connection.query<mc[]>(q);
        return rows;
    };

    getGenerById = async (id) => {
        const q = 'SELECT genere_id as Id, name FROM generes';
        const [rows] = await this.connection.query<mc[]>(q);
        return rows;
    };
}
