FROM nginx
ADD dist/* /srv/www/
ADD nginx/site.conf /etc/nginx/conf.d/default.conf

# This should be handled by the gulp build task
ADD index.html /srv/www/
ADD config.js /srv/www/

EXPOSE 80
