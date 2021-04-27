FROM node:lts-buster

WORKDIR /usr/src/calculator

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]