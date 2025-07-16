const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { ping } = require('./utils/ping');
require('dotenv').config();

const { handleCorrection } = require('./controllers/correctionController');//main login

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));//for logs

app.post('/correct', handleCorrection);

app.get('/status', (req, res) => {
  res.status(200).json({ message: "done" });
});

app.listen(PORT, () => {
  ping();
  console.log(`✅ Server running on http://localhost:${PORT} and ping done`);
});
