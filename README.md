# NestJS,TypeORM, GraphQL

## Installation

```bash
$ yarn install
```

## Running the app

You can launch the development environment.

```bash
$ docker-compose up -d
```

After successful launch, go to the following URL in your browser

- Backend: http://localhost:3300/graphql

## DB

### Stores Table
|Field|Type|Key|
|:--:|:--:|:--:|
|id|int|PRI|
|score|float|
|name|varchar(255)|	
|address|varchar(255)|
|genre|varchar(255)|


### Reviews Table
|Field|Type|Key|
|:--:|:--:|:--:|
|id|int|PRI|
|storeId|int|
|score|float|	
|title|text|
|content|text|

- 接続

```bash
mysql -h 127.0.0.1 -P 3306 -u root -p;
use nestjs_learn;
```

- テーブル一覧

```sql
show tables;
```

## GraphQL exmaple

```graphQL
mutation AddBook {
  addBook(newBook:{title: "test" price: 1000 author: "hogehoge"}) {
    title
    id
    createdAt
    price
  }
}

mutation addStore{
  addStore(newStore:{name: "ストア1", address: "アドレス1", genre: "ジャンル1", score: 100}) {
    name
    address
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
