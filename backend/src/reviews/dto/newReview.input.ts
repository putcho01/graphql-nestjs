import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, IsInt, IsNotEmpty, Min, MaxLength } from 'class-validator';

@InputType()
export class NewReviewInput {
	@Field((type) => Int)
	@IsNotEmpty()
	storeId: number;

	@Field((type) => Int)
	@IsInt()
	@Min(0)
	@Max(100)
	score: number;

	@Field()
	@IsNotEmpty()
	title: string;

	@Field()
	@MaxLength(1000)
	content: string;
}
