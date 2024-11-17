const express = require('express');
const app = express();
const PORT = 3000;

app.get('/name', (req, res) => {
    res.status(200).send('Betelhem Sintayehu');
});



app.listen(PORT, () => {
    console.log(`Server is running`);
});