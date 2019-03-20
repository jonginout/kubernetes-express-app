const express = require('express');
const app = express();
const port = 8080
const responseLogger = require('./middlewares/responseLogger')

app.use(responseLogger)

app.get('/', (req, res) => {
    res.send('<h1>Hello World!<h1>');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy'
    })
});

const userDAO = require('./models/users')
app.get('/users', async (req, res) => {
    const data = await userDAO.getAll()
    res.json(data)
});

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});
