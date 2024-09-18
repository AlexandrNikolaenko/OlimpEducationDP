FROM node:alpine as build

WORKDIR /usr/app
COPY package.json package.json
RUN npm install
COPY . .

EXPOSE 5000

CMD ["npm start"]