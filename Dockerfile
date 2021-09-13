FROM node:lts-buster

WORKDIR /usr/src/calculator

COPY ./ ./

RUN npm install

EXPOSE 49153

CMD ["/bin/bash"]