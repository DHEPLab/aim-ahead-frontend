FROM node:lts-alpine as builder
RUN apk add --update --no-cache g++ make py3-pip
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:lts-alpine

COPY --from=builder /app/build ./build
RUN npm install -g serve

EXPOSE 8080

CMD ["serve", "-s", "build", "-p", "8080"]
