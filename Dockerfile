FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the application for Docker
ENV BUILD_TARGET=docker
RUN npm run build

# Runner Stage
FROM node:22-alpine AS runner

WORKDIR /app

# Copy production dependencies (including generated Prisma client)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Copy the built server output
COPY --from=builder /app/.output ./.output

# Expose the default Nitro port
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
