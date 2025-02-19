# 1️⃣ Usar una imagen oficial de Node.js
FROM node:18-alpine

# 2️⃣ Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3️⃣ Copiar package.json e instalar dependencias
COPY package.json ./
RUN npm install

# 4️⃣ Copiar el resto del código al contenedor
COPY . .

# 5️⃣ Exponer el puerto que usa el servidor
EXPOSE 3000

# 6️⃣ Comando para iniciar el servidor
CMD ["node", "server.js"]