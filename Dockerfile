# Repository does not use node modules -> does not need node 
FROM nginx:latest

#WORKDIR /LUT/WWW-sovellukset\Harjoitustyö\

#COPY Harjoitustyö.html./
#COPY HT.js./

# Repository does not contain package.json file -> no need to install node dependencies
#RUN npm install

COPY . /usr/share/nginx/html

EXPOSE 80

# Page does not rely on node backend -> start script is not defined
#CMD [ "npm", "start" ]