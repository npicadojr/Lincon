const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/admisiones', (req, res) => {
  const { nombre, apellidos, email, grado, detalles } = req.body;

  if (!nombre || !email || !grado) {
    return res.status(400).json({ error: 'Nombre, correo y grado son requeridos.' });
  }

  console.log('Nueva solicitud de admisión:', { nombre, apellidos, email, grado, detalles });

  res.json({ success: true, message: 'Solicitud recibida. Nos comunicaremos pronto.' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Lincoln Academy → http://localhost:${PORT}`);
});
