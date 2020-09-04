FROM node:latest
WORKDIR /api

COPY .env /

COPY package.json /api/
COPY server.js /api/

COPY routes/ /api/routes/
COPY middleware/ /api/middleware/
COPY lib/ /api/lib/

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
