FROM node:10
EXPOSE 8080

ARG TYPE
ENV NODE_ENV=$TYPE

RUN mkdir -p /app
COPY ./ /app/

WORKDIR /app
CMD node app.js