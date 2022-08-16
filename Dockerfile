FROM node:18

WORKDIR /user/app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]