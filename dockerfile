# Stage 1: Build Angular app
FROM node:22 AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source files
COPY . .

# Build the app (production config)
RUN npm run build -- --configuration=production

# Stage 2: Nginx server
FROM nginx:stable-alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output (from browser folder)
COPY --from=builder /app/dist/adslabs-restaurante-interface/browser /usr/share/nginx/html


# Copy custom nginx config to handle Angular routes
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
