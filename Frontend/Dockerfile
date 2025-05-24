# Etapa de construcción
FROM node:22.14.0 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa de producción con NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
