import { join } from "path";

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
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "mysql",
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Book, Review, Store],
        synchronize: true,
      }),
    }),
    BooksModule,
    StoresModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
