FROM node:alpine as build

WORKDIR /usr/app
COPY package.json package.json
RUN npm install
COPY server.js /usr/app/
COPY . .

EXPOSE 5000

CMD ["node server.js"]