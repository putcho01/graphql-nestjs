import { Field, InputType, Int } from '@nestjs/graphql';
import { MaxLength, IsNumber, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class NewStoreInput {
	@Field()
	@IsNotEmpty()
	name: string;

	@Field()
	@IsNotEmpty()
	address: string;

	@Field()
	@IsNotEmpty()
	genre: string;

	@Field()
	@IsNotEmpty()
	@Field((type) => Int)
	score!: number;
}
