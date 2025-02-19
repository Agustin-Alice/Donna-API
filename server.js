require("dotenv").config();
const express = require("express");
const cors = require("cors");
const webhooksRoutes = require("./routes/webhooks.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Soporte para JSON en requests
app.use("/webhooks", webhooksRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Algo salió mal en el servidor" });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
