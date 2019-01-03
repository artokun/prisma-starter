# Prisma 1.23 Starter

Add `.env` to project root

```env
# .env
APP_SECRET=super-secret
```

```sh
$ docker-compose up -d
$ prisma deploy
$ prisma token
```

```json
{
  "Authorization": "Bearer <PRISMA_AUTH_TOKEN>"
}
```
