import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID || 'MaZ7bR62GvbulJgV8EUjQnHfbZGDEKaI';
const USER_ID = process.env.SOUNDCLOUD_USER_ID || '146702687'; // tu ID de SoundCloud

// Obtener todos los tracks
app.get('/api/soundcloud/tracks', async (req, res) => {
  try {
    const response = await fetch(
      `https://api-v2.soundcloud.com/users/${USER_ID}/tracks?client_id=${CLIENT_ID}&limit=50`
    );
    const data = await response.json();
    res.json(data.collection);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error obteniendo tracks' });
  }
});

// Obtener el último track
app.get('/api/soundcloud/latest', async (req, res) => {
  try {
    const response = await fetch(
      `https://api-v2.soundcloud.com/users/${USER_ID}/tracks?client_id=${CLIENT_ID}&limit=1`
    );
    const data = await response.json();
    res.json(data.collection?.[0] || null);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error obteniendo último track' });
  }
});

app.listen(PORT, () => console.log(`Servidor SoundCloud en http://localhost:${PORT}`));
