FROM node:10
WORKDIR /usr/src/wayfarer
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 8833
CMD [ "npm", "start" ]