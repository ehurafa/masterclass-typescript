import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
// type inference
function getUsername() {
    return 'rafa'
}
const name = getUsername() // return string

app.use(cors());

app.use(routes);

app.get('/', (req, res) => {
    return res.send('Hello World');
})

app.listen(3333);