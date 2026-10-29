# ============================================
# Dockerfile — Build de la app React (Vite) servida con Nginx
# ============================================

# Etapa 1: compilar la app
FROM node:22-alpine AS build
WORKDIR /app

# Variables de EmailJS: se leen en el build (Vite las incrusta). Son claves públicas, no secretos.
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_PUBLIC_KEY
ENV VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID \
    VITE_EMAILJS_TEMPLATE_ID=$VITE_EMAILJS_TEMPLATE_ID \
    VITE_EMAILJS_PUBLIC_KEY=$VITE_EMAILJS_PUBLIC_KEY

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

# Etapa 2: servir los estáticos
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
# Nginx arranca por defecto con CMD ["nginx", "-g", "daemon off;"]
