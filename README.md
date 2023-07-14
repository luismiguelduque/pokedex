<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run dev mode

1. Clone repository

2. Execute
```
yarn install
```

3. Install Nest CLI
```
npm i -g @nestjs/cli
```

4. Run database
```
docker-compose up -d
```

5. Create __.env__ file based on __.env.template__ file

6. Run project
```
yarn start:dev
```

7. Run seed
```
http://localhost:3000/api/v2/seed
```


## Used stack
* MongoDB
* Nestjs