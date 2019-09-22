FROM mhart/alpine-node

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]