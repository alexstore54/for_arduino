const express = require('express');
const app = express();
const router = require('./router');


const PORT = 7111;

app.use(express.json());
app.use('/api', router);


const start = () => {
    app.listen(PORT, () => console.log('Server started on port 7111'));
}

start();
