import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Review } from './review';
import { ReviewsService } from './reviews.service';
import { NewReviewInput } from './dto/newReview.input';

@Resolver((of) => Review)
@Resolver()
export class ReviewsResolver {}
