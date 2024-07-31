FROM node:17-alpine
WORKDIR /app
COPY package*.json /app

RUN npm i --silence
RUN npm install -g react-scripts@5.0.1

COPY . ./

CMD [ "npm", "start"]