const express = require('express');
const app = express();
const port = 8080
const responseLogger = require('./middlewares/responseLogger')

app.use(responseLogger)

app.get('/', (req, res) => {
    res.send(`<h1>Hello World! - ${process.env.NODE_ENV}<h1>`);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy'
    })
});

app.listen(port, () => {
    console.log(`listening on port.. ${port}!`);
});
