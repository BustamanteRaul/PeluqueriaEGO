FROM node:22-alpine

WORKDIR /app

COPY server/package.json server/package-lock.json ./
RUN npm ci --only=production

COPY server/src ./src
COPY shared ../shared

EXPOSE 3001

CMD ["node", "src/server.js"]
