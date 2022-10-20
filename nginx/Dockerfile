FROM nginx:1.23.1-alpine

RUN rm /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/

RUN rm /etc/nginx/conf.d/*
COPY ./localhost.conf /etc/nginx/conf.d/

EXPOSE 80

CMD [ "nginx" , "-g", "daemon off;"]