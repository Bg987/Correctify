const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const { handleCorrection } = require('./controllers/correctionController');//main login

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));//for logs

app.get('/correct/:text', handleCorrection);

app.get('/status', (req, res) => {
  res.json({ message: "Corractify backend is running!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
