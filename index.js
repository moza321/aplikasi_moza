const express = require('express');
const app = express();
const port = 3000;
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
 


// Middleware untuk meng-handle body dari request
app.use(express.json());

// Contoh route
app.get('/', (req, res) => {
  res.send('Selamat datang di server Express!');
});

// Contoh route dengan parameter
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Halo, ${name}!`);
});

// Menjalankan server pada port yang telah ditentukan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
