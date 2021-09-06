import { Field, InputType, Int } from '@nestjs/graphql';
import { MaxLength, IsNumber, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class NewReviewInput {
	@Field()
	@IsNotEmpty()
	storeId: number;

	@Field((type) => Int)
	@IsNumber()
	@Length(1, 5)
	score: number;

	@IsNotEmpty()
	title: string;

	@Field((type) => Int)
	@MaxLength(1000)
	content: string;
}
