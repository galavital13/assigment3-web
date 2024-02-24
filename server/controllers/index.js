require("dotenv").config();
const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('../middleware/authMiddleware');
const errorHandler = require('../errors/errorHandler');
const {connectDB} = require("./db/db");
const {router: itemsRouter} = require('../router/itemsRouter');

const app = express();
const PORT = process.env.PORT || 3000;

module.exports = app;

app.use(bodyParser.json());
app.use(authMiddleware); 
app.use('/items', itemsRouter);
app.use(errorHandler); 
app.use(cors());

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
