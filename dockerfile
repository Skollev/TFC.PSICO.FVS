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
FROM eclipse-temurin:21-jdk-alpine AS backend-builder

WORKDIR /src

COPY Backend/ ./Backend/

WORKDIR /src/Backend

RUN chmod +x ./mvnw

RUN ./mvnw package -DskipTests

# Etapa 3: Imagen final
FROM eclipse-temurin:21-jdk-alpine

RUN apk add --no-cache nodejs npm bash curl

WORKDIR /app

COPY --from=frontend-builder /frontend ./frontend

COPY --from=backend-builder /app/backend ./backend

COPY run.sh ./run.sh

RUN chmod +x ./run.sh

EXPOSE 5137
EXPOSE 8080

CMD ["sh", "./run.sh"]