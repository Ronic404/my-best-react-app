cd ~/../my-best-react-app
npm run build:prod

rm -rf ~/../var/www/my-best-react-app/html
mv ~/../my-best-react-app/dist ~/../var/www/my-best-react-app/html
