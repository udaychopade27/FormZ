FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD ["nodemon","index.js"]