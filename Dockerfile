FROM node:16.14-alpine AS build
ENV NODE_ENV=production
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:1.23.1-alpine
COPY --from=build /build/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "/usr/sbin/nginx", "-g", "daemon off;" ]
