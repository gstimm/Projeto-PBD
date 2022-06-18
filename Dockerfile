# add the Node.js docker image
FROM node:16

# Create directory that runs the app on docker
WORKDIR /app

# COPY package.json and yarn.lock files
COPY package.json yarn.lock ./
COPY package*.json ./

# COPY
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# Install package.json dependencies
RUN yarn

# COPY
COPY . .

# Generate prisma client
RUN yarn prisma generate

# Run and expose the server on port 3000
EXPOSE 3333

# A command to start the server
CMD yarn start