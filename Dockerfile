# ============================================
# Dockerfile — Sitio estático con Nginx
# ============================================

FROM nginx:1.27-alpine

# Copiar archivos del sitio al directorio raíz de Nginx
COPY index.html /usr/share/nginx/html/
COPY contacto.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY uploads/ /usr/share/nginx/html/uploads/
COPY robots.txt /usr/share/nginx/html/
COPY sitemap.xml /usr/share/nginx/html/

# Nginx escucha en el puerto 80 dentro del contenedor
EXPOSE 80

# Nginx ya arranca por defecto con CMD ["nginx", "-g", "daemon off;"]
