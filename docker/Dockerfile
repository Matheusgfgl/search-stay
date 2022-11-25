FROM node:12-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG ENVIRONMENT_BUILD
RUN npm run build --env=$ENVIRONMENT_BUILD
EXPOSE 3000
CMD ["npm", "run", "start"]