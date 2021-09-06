import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/book';
import { StoresModule } from './stores/stores.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		}),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'mysql01',
			port: 3306,
			username: 'root',
			password: 'root',
			database: 'nestjs_learn',
			entities: [Book],
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
