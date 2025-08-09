# express-js-rest-api

Example REST API serving data from this dataset:

https://www.kaggle.com/datasets/tfisthis/enterprise-genai-adoption-and-workforce-impact-data?resource=download

Includes:

- HTTP server in Express.js
- postgesql db in a docker container
- api functionalities:
    - pagination
    - todo: authentication with ...
    - todo: tests with jest
    - openapi standard documentation


## postgresql

```
docker-compose up
```

in order to connect:

```
psql -h localhost -U myuser -d mydb -p 5432
```

connection string for db clients
```
postgresql://myuser:mypassword@localhost:5432/mydb
```

## API endpoints

GET /api/enterprises
GET /api/enterprises/:id
GET /api/enterprises?industry=Finance
GET /api/enterprises?country=USA
GET /api/enterprises/stats/productivity-by-industry
GET /api/enterprises/genai-tools
POST /api/enterprises
PUT /api/enterprises/:id
DELETE /api/enterprises/:id

## TODO
- tests
- authentication
- authorization
- mocha tests
- endpoints
- best practices
- swagger/openai doc
