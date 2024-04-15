FROM node:20

WORKDIR /var/www/54.165.158.129

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
