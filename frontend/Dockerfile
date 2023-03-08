FROM node:18.14.2
COPY package.json .
RUN npm install 
#RUN npm install --save react-scripts@4.0.3
RUN chmod a+x node_modules/.bin/react-scripts
#RUN chmod a+x /usr/src/app/node_modules/.bin/react-scripts
COPY . .
EXPOSE 3000
CMD ["npm", "start"]