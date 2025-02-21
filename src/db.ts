import { loadEnvFile } from 'node:process';
import mysql from 'mysql2/promise';

export type mc = {
    id: number;
    name: string;
} & mysql.RowDataPacket;

export class ManageConnection {
    static connection: mysql.Connection | null = null;

    static openConnection = async () => {
        loadEnvFile();
        const database = 'movies_db';
        console.log('Conectando con', process.env.DB_HOST);

        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: database,
            // process.env.DB_DATABASE,
            port: Number(process.env.DB_PORT),
        });
        console.log('Conectado a la base de datos', process.env.DB_HOST);
        return connection;
    };
}

export class ManageGenere {
    constructor() {}

    private async getConnection() {
        const connection = await ManageConnection.openConnection();
        return connection;
    }

    getAllGener = async () => {
        const connection = this.getConnection();
        const rows: Promise<mc[] | undefined> = connection.then(async (con) => {
            if (con) {
                const q = 'SELECT genere_id as Id, name FROM generes';
                const [rows] = await con.query<mc[]>(q);
                return rows;
            }
        });
        console.log('All:');
        return rows;
    };

    getGenerById = async (id: number) => {
        const connection = await this.getConnection();
        let rows: mc[] | undefined = undefined;
        if (connection !== undefined) {
            const q =
                'SELECT genere_id as Id, name FROM generes WHERE genere_id = ?';
            [rows] = await connection.query<mc[]>(q, [id]);
        }
        return rows;
    };

    getGenerByName = async (name: string) => {
        const connection = await this.getConnection();
        if (connection) {
            let rows: mc[] | undefined = undefined;
            if (connection !== undefined) {
                const like = '"%' + name + '%"';
                const q = `SELECT genere_id as Id, name FROM generes WHERE name LIKE ${like}`;
                console.log(q);
                [rows] = await connection.query<mc[]>(q, [like]);
                console.log('By name:');
            }
            return rows;
        }
    };
}
