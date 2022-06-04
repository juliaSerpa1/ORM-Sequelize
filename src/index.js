const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require("./routes/index");

const app = express();

app.use(bodyParser.json());

app.use("/", indexRouter);

app.listen(3000,()=>console.log('servidor rodando na porta 3000!'));
