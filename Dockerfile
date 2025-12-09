FROM node:22.20.0
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 5173
CMD ["yarn", "dev"]
