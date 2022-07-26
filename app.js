// app.js
const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

connectDB();

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Borja Medina application." });
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});