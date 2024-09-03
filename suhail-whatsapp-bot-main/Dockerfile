# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Copy the rest of your application files to the working directory
COPY . .

# Expose the port that your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "main.js"]
