require("dotenv").config();
const express = require("express");

// const morgan = require("morgan");

const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// 🛡️ Middleware de seguridad y configuración
// app.use(helmet());
// app.use(cors());
app.use(express.json()); // Soporte para JSON en requests
// app.use(morgan("dev")); // Logs de peticiones en consola

// 📦 Importar rutas
const webhooksRoutes = require("./routes/webhooks.routes");

app.use("/webhooks", webhooksRoutes);

// 🛠️ Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Algo salió mal en el servidor" });
});

// 🚀 Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
