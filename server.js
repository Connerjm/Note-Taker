/* Imports */

const express = require("express");

/* Variables */

const app = express();
const PORT = process.env.PORT || 3000;

/* Required express stuff. */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Routes */

//Get home.
app.get('/home', (req, res) =>
{
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//Get notes.
app.get('/notes', (req, res) =>
{
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//Redirect to home.
app.get('*', (req, res) =>
{
    res.redirect('/home');
});

//Get api notes
app.get('/api/notes', (req, res) =>
{
    //TODO
});

//Post api notes
app.post('/api/notes', (req, res) =>
{
    //TODO
});

/* Server Start */

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`); });