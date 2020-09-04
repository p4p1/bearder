FROM node:latest

WORKDIR /front

COPY package.json /front

COPY src/ /front/src
COPY public/ /front/public

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
