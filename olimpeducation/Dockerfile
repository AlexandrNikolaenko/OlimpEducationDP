FROM node:alpine as build_front

WORKDIR /usr/app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build_front ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build_front /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD [ "nginx", "-g", "daemon off;" ]

