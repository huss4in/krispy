FROM nginx:alpine

ENV NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx

COPY nginx.conf /etc/nginx/templates/nginx.conf.template

VOLUME /usr/share/nginx/html
VOLUME /etc/nginx/certs
VOLUME /var/log/nginx
