const express = require('express');

const app = express()

app.get('/home', (request, res, next) => {
    res.send('<h1>Homers web page</h1>');
})



app.listen(3000, () => { console.log('Connected')})