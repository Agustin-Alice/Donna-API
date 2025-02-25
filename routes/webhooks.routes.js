const express = require("express");
const router = express.Router();
const verifyWebhook = require("../middlewares/verifyWebhook");
const {
  handleStoreRedact,
  handleCustomerRedact,
  handleCustomerDataRequest,
} = require("../controllers/webhooks.controller");

// 📌 Endpoint para Store Redact (cuando una tienda es eliminada)
router.post("/store-redact", verifyWebhook, handleStoreRedact);

// 📌 Endpoint para Customer Redact (cuando un cliente es eliminado)
router.post("/customers-redact", verifyWebhook, handleCustomerRedact);

// 📌 Endpoint para Customer Data Request (cuando un cliente solicita sus datos)
router.post(
  "/customers-data-request",
  verifyWebhook,
  handleCustomerDataRequest
);

// 📌 Ruta de prueba
router.get("/test", (req, res) => {
  res.json({ message: "Webhook funcionando correctamente" });
});

module.exports = router;
