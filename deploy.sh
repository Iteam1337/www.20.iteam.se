gulp build
docker build -t www-20-years .
docker tag -f www-20-years tutum.co/iteamdev/www-20-years
docker push tutum.co/iteamdev/www-20-years
