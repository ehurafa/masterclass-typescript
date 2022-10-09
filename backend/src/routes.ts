import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    return res.send('Hellow World 2');
});

export default routes; 