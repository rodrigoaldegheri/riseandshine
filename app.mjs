// video di riferimento: https://youtu.be/nH9E25nkk3I

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// praticamente prende la porta scritta
// in un file sicuro, altrimenti alla porta
// 3000
const PORT = process.env.PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// questa funzione listen() avvia
// effettivamente il server
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
