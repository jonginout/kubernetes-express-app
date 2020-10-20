FROM node:10

ENV APP_ROOT /app
ARG TYPE
ENV NODE_ENV=$TYPE

RUN mkdir -p ${APP_ROOT}
COPY ./ ${APP_ROOT}/

WORKDIR ${APP_ROOT}

RUN npm install

# EXPOSE 8080
# 8080번 포트를 호스트에 연결만 하고 외부에 노출하지 않습니다. 이렇게 하면 외부에서는 접속할 수 없고, 호스트와 --link 옵션으로 연결한 컨테이너에서만 접속할 수 있습니다.

CMD node app.js