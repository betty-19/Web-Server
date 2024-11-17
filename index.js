const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/name', (req, res) => {
    res.status(200).send('Betelhem Sintayehu');
});
app.get('/hobby', (req, res) => {
    res.status(200).json({
        hobby_1: 'Listening to religious songs',
        hobby_2: 'Coding',
        hobby_3: 'Spend Great Time with My Friends',
        hobby_4: 'Reading Books',
        hobby_5: 'Cooking'
    });
});
app.get('/dream', (req, res) => {
    res.status(200).send('My dream is to be a skilled web programmer, do many projects, be a good mom and wife, be a religious woman, and help my family.');
});



app.listen(PORT, () => {
    console.log(`Server is running`);
});