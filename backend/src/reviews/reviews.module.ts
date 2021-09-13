import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsResolver } from './reviews.resolver';
import { ReviewsService } from './reviews.service';
import { Review } from './review';
import { Store } from 'src/stores/store';
import { StoresService } from 'src/stores/stores.service';

@Module({
	imports: [TypeOrmModule.forFeature([Review, Store])],
	providers: [ReviewsResolver, ReviewsService, StoresService],
})
export class ReviewsModule {}
