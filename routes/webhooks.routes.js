const express = require("express");
const router = express.Router();
const {
  handleStoreRedact,
  handleCustomerRedact,
  handleCustomerDataRequest,
} = require("../controllers/webhooks.controller");

// 📌 Endpoint para Store Redact (cuando una tienda es eliminada)
router.get("/store-redact", handleStoreRedact);

// 📌 Endpoint para Customer Redact (cuando un cliente es eliminado)
router.get("/customers-redact", handleCustomerRedact);

// 📌 Endpoint para Customer Data Request (cuando un cliente solicita sus datos)
router.get("/customers-data-request", handleCustomerDataRequest);

// 📌 Ruta de prueba
router.get("/test", (req, res) => {
  res.json({ message: "Webhook funcionando correctamente" });
});

module.exports = router;
