# Get Node Alpine Linux base image for running in the Docker container
FROM node:alpine

# Create app directory in the Docker container
WORKDIR /usr/src/app

# Copy package-lock.json and package.json to the Docker container
COPY package*.json ./

# Copy source files to the Docker container
COPY src src

# Install app dependencies i.e. Node packages to the Docker container
RUN npm install

# Set user in Docker container to node (less privileged than the default superuser)
USER node

# Set port number to run the server on in the Docker container
EXPOSE $HELLO_WORLD_API_PORT

# Run 'npm start' command to start the server in the Docker container
CMD [ "npm", "start" ]