import { getAllGener, openConnection } from './db.js';

try {
    const connection = openConnection();
    connection.then((conn) => {
        const result = getAllGener(conn);
        result.then((resul) => {
            console.log(resul);
        });
        return result;
    });
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error('Ha ocurrido un error', error);
    }
}
