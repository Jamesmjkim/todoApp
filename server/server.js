const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}...`));
modules.export = app;
