# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency files dulu (untuk cache layer)
COPY package*.json ./

# Install dependencies (production only)
RUN npm ci --production

# Copy seluruh kode
COPY . .

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Command default saat container jalan
CMD ["node", "server.js"]
