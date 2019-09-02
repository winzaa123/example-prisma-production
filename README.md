# Example Prisma Production

## Setup

- `npm i -g prisma` 
- `cp .env.example .env` setup environment
- delete `app` for `.gitignore`

## for Development

- you can `docker-compose up -d --build` deploy all service
- `prisma deploy` for service **`prisma_dev` only!!!**

## Things to know...

- if use not root for connect mysql, you need grant access for service.

```SQL
GRANT ALL ON *.* to MYSQL_USER@'%' IDENTIFIED BY 'MYSQL_PASSWORD'
```

## References

- [Prisma Document](https://www.prisma.io/docs)
- [Prisma Scale with Kubernetes](https://techblog.commercetools.com/prisma-horizontal-scaling-a-practical-guide-3a05833d4fc3)
- [Docker compose Swarm](https://codefresh.io/docker-tutorial/deploy-docker-compose-v3-swarm-mode-cluster/)
