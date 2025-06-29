const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

mongoose.connect('mongodb://mongo:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/api', (req, res) => {
  res.send('Hello from Backend API!');
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
