import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const Port = 4000; // Port of the server

// enable cors for cross origin requests
app.use(cors()); 

app.get('/api/balance-sheet', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api.xro/2.0/Reports/BalanceSheet');
    res.json(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export {app}