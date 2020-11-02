FROM node:latest as builder

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY package*.json /usr/src/app/

RUN npm install
COPY ./ /usr/src/app/

# Build prod
ARG configuration=production
RUN npm run build -- --output-path=./dist/public --configuration $configuration
#RUN npm run build -- --output-path=./dist/public

# ----------------------------------
# Prepare production environment
FROM nginx:latest
# ----------------------------------

# Clean nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy dist
COPY --from=builder /usr/src/app/dist/public /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
