FROM node
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
EXPOSE 3000
CMD ["npm", "start"]