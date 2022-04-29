//Dependencies
const express = require('express');
const path = require('path');

const apir = require('./routes/api_routes');
const htmlr = require('./routes/html_routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apir);
app.use('/', htmlr);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);