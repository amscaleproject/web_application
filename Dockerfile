#STAGE 1
FROM node:18.14-alpine AS build
#FROM node:17-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
RUN ls -la /usr/src/app/dist

#STAGE 2
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/attika_web /usr/share/nginx/html
