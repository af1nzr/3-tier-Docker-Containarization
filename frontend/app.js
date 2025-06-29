const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// fallback to backend container name if env not set
const backendUrl = process.env.BACKEND_URL || 'http://backend:4000';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${backendUrl}/api`);
    res.send(`Frontend => Backend says: ${response.data}`);
  } catch (err) {
    res.status(500).send('Error contacting backend');
  }
});

app.listen(port, () => {
  console.log(`Frontend running on http://localhost:${port}`);
});
