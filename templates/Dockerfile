FROM node:5.9

RUN npm install -g node-inspector
RUN npm install -g webpack

RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY package.json /home/node/app/
RUN npm install

COPY configs /home/node/app/configs
COPY src /home/node/app/src

COPY docker-entrypoint.sh /home/node/app/.
RUN chmod +x /home/node/app/docker-entrypoint.sh

EXPOSE 8000

ENTRYPOINT ["/home/node/app/docker-entrypoint.sh"]
