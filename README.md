# NestJS, GraphQL

# Installation

```bash
$ yarn install
```

# Running the app

### backend

You can launch the development environment.

```bash
$ docker-compose up -d
```

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

After successful launch, go to the following URL in your browser

- Backend: http://localhost:3300/graphql

# GraphQL exmaple

```graphQL
mutation AddBook {
  addBook(newBook:{title: "test" price: 1000 author: "hogehoge"}) {
    title
    id
    createdAt
    price
  }
}
```

```graphQL
query {
  books {
    title
    price
  }
}
```
