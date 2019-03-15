FROM node

EXPOSE 3000

WORKDIR /project

COPY ./package*.json ./

RUN npm install

COPY . ./

ENTRYPOINT [ "npm", "start" ]
