# Utiliza una imagen de Node como base para la etapa de construcción
FROM node:16 AS build-stage

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación React
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa de producción: Utiliza una nueva imagen de Node
FROM node:16

# Instala el paquete serve globalmente
RUN npm install -g serve

# Copia los archivos construidos desde la etapa de construcción
COPY --from=build-stage /app/dist /app

# Expone el puerto que serve escuchará
EXPOSE 8080

# Comando para iniciar serve y servir la aplicación
CMD ["serve", "-s", "/app", "-l", "8080"]