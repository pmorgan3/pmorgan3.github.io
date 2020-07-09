FROM node:14.4-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

ENV PATH="/app/node_modules/.bin:$PATH"

COPY . ./ 
RUN yarn build

CMD ["yarn", "start"]
