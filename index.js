// Importar express
const express = require('express');
const app = express();
const PORT = 3000;

// Configurar el endpoint principal que pide la tarea
app.get('/api/info', (req, res) => {
    res.json({
        nombre: "Xavi Alexander De León Perdomo",
        cancion_favorita: "Perdón - Canserbero"
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});