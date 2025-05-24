# Etapa 1: construir el frontend
FROM node:22 AS frontend-builder
WORKDIR /app
COPY Frontend/ ./Frontend/
WORKDIR /app/Frontend
RUN npm install && npm run build

# Etapa 2: construir el Backend
FROM eclipse-temurin:17 AS Backend-builder
WORKDIR /app
COPY Backend/ ./Backend/
WORKDIR /app/Backend
COPY --from=Frontend-builder /app/Frontend/dist ./src/main/resources/static
RUN chmod +x ./mvnw
RUN ./mvnw package -DskipTests

# Etapa 3: imagen final (sólo ejecutable)
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=Backend-builder /app/Backend/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
