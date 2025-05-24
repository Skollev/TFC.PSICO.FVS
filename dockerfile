# Etapa 1: Construcción del Frontend
FROM node:23-alpine AS frontend-builder
 
WORKDIR /frontend
 
# Copiar los archivos del frontend
COPY Frontend/package.json ./
COPY Frontend/package-lock.json ./
COPY Frontend/tsconfig.json ./
 
RUN npm install
 
# Copiar el resto de los archivos
COPY Frontend ./
 
RUN npm run build
 
# Etapa 2: Construcción del backend
FROM eclipse-temurin:21-jre-alpine AS backend-builder

WORKDIR /src

COPY Backend/ ./Backend/

WORKDIR /src/Backend

RUN chmod +x ./mvnw

RUN ./mvnw package -DskipTests
 
# Etapa 3: Imagen final
FROM eclipse-temurin:21-jre-alpine
 
# Instalar dependencias de Node.js
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm

WORKDIR /app
 
# Copiar los resultados del build del frontend
COPY --from=frontend-builder /frontend ./frontend
 
 
# Copiar el backend y los archivos necesarios
COPY --from=backend-builder /app/backend ./backend
 
# Copiar el script de inicio
COPY run.sh ./run.sh
 
# Dar permisos de ejecución al script de inicio
RUN chmod +x ./run.sh
 
EXPOSE 5137
EXPOSE 8080
 
CMD ["sh", "./run.sh"]