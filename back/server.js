import express from 'express';
import doctorAPI from './router/doctorAPI.js';
const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/doctor', doctorAPI);

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`server is listening at localhost:${PORT}`);
});