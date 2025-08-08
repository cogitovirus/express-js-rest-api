# express-js-rest-api

https://www.kaggle.com/datasets/tfisthis/enterprise-genai-adoption-and-workforce-impact-data?resource=download

## postgresql

```
docker-compose up
```

asd

```
psql -h localhost -U myuser -d mydb -p 5432
```

```
postgresql://myuser:mypassword@localhost:5432/mydb
```

GET /api/enterprises
GET /api/enterprises/:id
GET /api/enterprises?industry=Finance
GET /api/enterprises?country=USA
GET /api/enterprises/stats/productivity-by-industry
GET /api/enterprises/genai-tools
POST /api/enterprises
PUT /api/enterprises/:id
DELETE /api/enterprises/:id
