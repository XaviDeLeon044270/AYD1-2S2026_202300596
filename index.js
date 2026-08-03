// Importar express
const express = require('express');
const app = express();
const PORT = 3000;

// Configurar el endpoint principal que pide la tarea
app.get('/api/info', (req, res) => {
    res.json({
        nombre: "Xavi Alexander De León Perdomo",
        album_favorito: "Echoes of Childhood II - DVRST"
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});