FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx update-browserslist-db@latest
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]