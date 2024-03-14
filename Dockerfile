FROM node:20-alpine3.19 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:20-alpine3.19

WORKDIR /app

COPY --from=builder /app/build ./build

RUN npm install -g http-server

EXPOSE 3000

CMD ["http-server", "./build", "-p", "3000"]
