const express = require('express');
const app = express();

// Habilitar el encabezado X-Forwarded-For
app.set('trust proxy', true);

app.get('/', (req, res) => {
  const clientIP = req.ip; // Esto debería proporcionar la dirección IP del visitante
  res.send(`Tu dirección IP es: ${clientIP}\n`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
