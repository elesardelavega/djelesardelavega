import express from 'express';
import fetch from 'node-fetch'; // o 'undici' en Node 18+

const app = express();
const PORT = 3000;

const CLIENT_ID = 'MaZ7bR62GvbulJgV8EUjQnHfbZGDEKaI';
const USER_ID = 727625953;

app.get('/api/soundcloud/latest', async (req, res) => {
  try {
    const response = await fetch(
      `https://api-v2.soundcloud.com/users/${USER_ID}/tracks?client_id=${CLIENT_ID}&limit=1`
    );
    const data = await response.json();
    res.json(data.collection[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
