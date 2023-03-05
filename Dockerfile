FROM node:alpine AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Use nginx as the base image for serving the application
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the application
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]