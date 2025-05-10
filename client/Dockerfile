FROM node:18 AS builder
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
RUN npx update-browserslist-db@latest
# Copy the rest of the application code
COPY . .
# Build the application
RUN npm run build

# EXPOSE 3000
# CMD ["npm", "run", "start"]
### STAGE 2: Setup ###
FROM nginx

## Copy our default nginx config
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/build /usr/share/nginx/html

# COPY --from=builder /blueprism/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
