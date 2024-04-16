# Use the official Node 18.14.1 image as the base image
FROM node:18.14.1 AS development

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 4200 to allow external access to the Angular development server
EXPOSE 4200

# Start the Angular development server
CMD ["npm", "start"]