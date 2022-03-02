#Primera Etapa
FROM node:16-alpine as build-step

LABEL title = "Front APP" \
      description = "Web server showing app" \
      author = "@cesarzuniga" 
	

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install --legacy-peer-deps

COPY . /app

RUN npm run build:prod

#Segunda Etapa
FROM nginx:1.17.1-alpine
	
COPY --from=build-step /app/dist/vuexy /usr/share/nginx/html
