/* Imports */

const express = require("express");

/* Variables */

const app = express();
const PORT = process.env.PORT || 3000;

/* Required express stuff. */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Routes */

/* Server Start */

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`); });