import { Injectable } from '@nestjs/common';
import { Review } from './review';
import { NewReviewInput } from './dto/newReview.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoresService } from 'src/stores/stores.service';

@Injectable()
export class ReviewsService {
	constructor(
		@InjectRepository(Review)
		private reviewsRepostiory: Repository<Review>,
		private storeService: StoresService,
	) {}

	findAll(): Promise<Review[]> {
		return this.reviewsRepostiory.find();
	}

	findOneById(id: number): Promise<Review> {
		return this.reviewsRepostiory.findOne(id);
	}

	async create({ storeId, ...data }: NewReviewInput): Promise<Review> {
		const store = await this.storeService.findById(storeId);
		const review = this.reviewsRepostiory.create({ ...data, store });
		return review.save();
	}

	async remove(id: number): Promise<boolean> {
		const result = await this.reviewsRepostiory.delete(id);
		return result.affected > 0;
	}
}
