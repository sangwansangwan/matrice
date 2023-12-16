# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container 
# Must have to add node_modules to gitignore
COPY . .

# Copy the .env file to the container
COPY .env .env

# Expose the port your Express.js app is running on
EXPOSE 5000

# Set the command to run your application
CMD ["npm", "start"]
