# Etapa 1: construir el frontend
FROM node:22 AS frontend-builder
WORKDIR /app
COPY frontend/ ./frontend/
WORKDIR /app/frontend
RUN npm install && npm run build

# Etapa 2: construir el backend
FROM eclipse-temurin:17 AS backend-builder
WORKDIR /app
COPY backend/ ./backend/
WORKDIR /app/backend
COPY --from=frontend-builder /app/frontend/dist ./src/main/resources/static
RUN ./mvnw package -DskipTests

# Etapa 3: imagen final (sólo ejecutable)
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=backend-builder /app/backend/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
