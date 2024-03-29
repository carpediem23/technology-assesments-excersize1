# ------------------------------------------------------
# App Deploy
# ------------------------------------------------------
FROM node:16-alpine AS deploy
WORKDIR /usr/src/texhnology-assesments-excersize1
ENV PATH /usr/src/texhnology-assesments-excersize1/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --loglevel verbose

# ------------------------------------------------------
# Production Deploy
# ------------------------------------------------------
FROM nginx:alpine AS prod
COPY --from=deploy /usr/src/texhnology-assesments-excersize1/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]