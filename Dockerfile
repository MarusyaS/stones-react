# FROM node:18.12.1

# WORKDIR /frontend
# COPY package.json package-lock.json ./
# # COPY . .

# RUN npm install
# COPY . ./
# EXPOSE 3000

# CMD ["npm", "start"]

# Base image
FROM node:18.12.1-alpine

# Set working directory
WORKDIR /frontend-app

# Install system dependencies
RUN apk update && apk add --no-cache git

# Install Node.js dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Build the React app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]