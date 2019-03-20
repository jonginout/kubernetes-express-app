FROM node:10
EXPOSE 8080

ENV NODE_ENV=production

RUN mkdir -p /app
COPY ./ /app/

WORKDIR /app
CMD node app.js