import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Review } from './review';
import { ReviewsService } from './reviews.service';
import { NewReviewInput } from './dto/newReview.input';

@Resolver((of) => Review)
export class ReviewsResolver {
	constructor(private reviewsService: ReviewsService) {}

	@Query((returns) => [Review])
	reviews(): Promise<Review[]> {
		return this.reviewsService.findAll();
	}

	@Query((returns) => Review)
	async getReview(@Args({ name: 'id', type: () => Int }) id: number) {
		const review = await this.reviewsService.findOneById(id);
		if (!review) {
			throw new NotFoundException(id);
		}
		return review;
	}

	@Mutation((returns) => Review)
	addReview(@Args('newReview') newReview: NewReviewInput): Promise<Review> {
		return this.reviewsService.create(newReview);
	}

	@Mutation((returns) => Boolean)
	async removeReview(@Args({ name: 'id', type: () => Int }) id: number) {
		return this.reviewsService.remove(id);
	}
}
