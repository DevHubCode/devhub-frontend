FROM node:20
WORKDIR /app
EXPOSE 5000
COPY --from=builder package.json ./
ENTRYPOINT npm run start