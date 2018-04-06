#Dockerfile
FROM node:8.11

WORKDIR /usr/src

ADD index.js /usr/src/
ADD package.json /usr/src/

RUN npm install

EXPOSE 8080

ENV MYNAME Boris
ENV my_env_var somevalue

CMD ["node","index.js"]