/* Imports */

const express = require("express");
const path = require("path");
const fs = require("fs");

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

//Gets the css.
app.get("/assets/css/styles.css", (req, res) =>
{
    res.sendFile(path.join(__dirname, "/public/assets/css/styles.css"));
});

//Gets the javascript.
app.get("/assets/js/index.js", (req, res) =>
{
    res.sendFile(path.join(__dirname, "/public/assets/js/index.js"));
});

//Get api notes
app.get('/api/notes', (req, res) =>
{
    const db = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(db);
});

//Post api notes
app.post('/api/notes', (req, res) =>
{
    //Get it
    const db = JSON.parse(fs.readFileSync("./db/db.json"));
    //Change it
    db.push(req.body);
    //Save it.
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(true);
});

//Redirect to home.
app.get('*', (req, res) =>
{
    res.redirect('/home');
});

/* Server Start */

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`); });