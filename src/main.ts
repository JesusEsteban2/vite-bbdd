import { ManageGenere } from './db.js';

try {
    const manage = new ManageGenere();
    const result = manage.getAllGener();
    result.then((resul) => {
        console.log(resul);
    });
    const result2 = manage.getGenerById(2);
    result2.then((resul) => {
        console.log(resul);
    });
    const result3 = manage.getGenerByName('me');
    result3.then((resul) => {
        console.log(resul);
    });
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error('Ha ocurrido un error', error);
    }
}
