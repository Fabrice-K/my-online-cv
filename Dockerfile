FROM node:16.14-alpine AS build
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY package*.json /usr/src/
RUN npm install
COPY . /usr/src/
RUN npm run build

FROM nginx:1.23.1-alpine
COPY --from=build /build/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "/usr/sbin/nginx", "-g", "daemon off;" ]
