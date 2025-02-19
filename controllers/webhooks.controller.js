const handleStoreRedact = (req, res) => {
  console.log("🏪 Tienda eliminada:", req.body);
  res.status(200).json({ message: "Evento Store Redact recibido" });
};

const handleCustomerRedact = (req, res) => {
  console.log("👤 Cliente eliminado:", req.body);
  res.status(200).json({ message: "Evento Customer Redact recibido" });
};

const handleCustomerDataRequest = (req, res) => {
  console.log("📄 Solicitud de datos de cliente:", req.body);
  res.status(200).json({ message: "Evento Customer Data Request recibido" });
};

module.exports = {
  handleStoreRedact,
  handleCustomerRedact,
  handleCustomerDataRequest,
};
