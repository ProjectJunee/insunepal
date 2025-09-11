FROM node:22.13.1-slim

WORKDIR /app

# Install OpenSSL for Prisma
RUN apt-get update -y && apt-get install -y openssl

# Set Node memory constraints similar to your script
ENV NODE_OPTIONS="--max-old-space-size=698"

# Copy package files first for better caching
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Prisma generate
RUN npx prisma generate

# Build the application with optimized settings
# nice -n 19 equivalent isn't needed in Docker as it's container isolated
RUN npm run build

EXPOSE 4400
ENV PORT=4400
ENV NODE_ENV=production

CMD [ "npm", "run","start", "--", "-p", "4400" ]

