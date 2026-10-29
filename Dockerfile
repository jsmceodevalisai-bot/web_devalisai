# ==========================================
# 1. Build Stage
# ==========================================
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy application source code
COPY . .

# Build production bundle
RUN npm run build

# ==========================================
# 2. Production Stage (Lightweight Nginx)
# ==========================================
FROM nginx:alpine AS runner

# Copy custom Nginx configuration with SPA support
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
