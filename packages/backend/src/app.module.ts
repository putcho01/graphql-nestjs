import { join } from "path";

import { ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Book } from "./books/book";
import { BooksModule } from "./books/books.module";
import { Review } from "./reviews/review";
import { ReviewsModule } from "./reviews/reviews.module";
import { Store } from "./stores/store";
import { StoresModule } from "./stores/stores.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "mysql01",
      port: 3306,
      username: "root",
      password: "root",
      database: "nestjs_learn",
      entities: [Book, Review, Store],
      synchronize: true,
    }),
    BooksModule,
    StoresModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
