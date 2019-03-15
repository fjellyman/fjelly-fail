FROM node

EXPOSE 3001

WORKDIR /project

COPY ./package*.json ./

RUN npm install

COPY . ./

ENTRYPOINT [ "npm", "start" ]