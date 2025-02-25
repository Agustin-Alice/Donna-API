const crypto = require("crypto");
require("dotenv").config();

const verifyWebhook = (req, res, next) => {
  try {
    const clientSecret = process.env.CLIENT_SECRET; // Debe estar en el archivo .env
    const signature = req.headers["x-store-signature"]; // Firma enviada por Tienda Nube

    if (!signature) {
      return res.status(401).json({ error: "Firma de webhook faltante" });
    }

    // Convertir el body a string para calcular el hash correctamente
    const payload = JSON.stringify(req.body);

    // Calcular la firma HMAC-SHA256 con el CLIENT_SECRET
    const calculatedSignature = crypto
      .createHmac("sha256", clientSecret)
      .update(payload, "utf8")
      .digest("hex");
    console.log(calculatedSignature);
    // Comparar la firma recibida con la calculada
    if (signature !== calculatedSignature) {
      return res.status(403).json({ error: "Firma de webhook inválida" });
    }

    next(); // Webhook válido, continuar con la ejecución
  } catch (error) {
    return res.status(500).json({ error: "Error verificando webhook" });
  }
};

module.exports = verifyWebhook;
