FROM nginx:1.26.2

RUN rm /etc/nginx/conf.d/*
COPY ./default.conf /etc/nginx/conf.d/
COPY ./nginx.conf /etc/nginx/
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]