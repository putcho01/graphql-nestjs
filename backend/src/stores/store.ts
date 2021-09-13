import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Review } from 'src/reviews/review';

@Entity({ name: 'stores' })
@ObjectType()
export class Store extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field((type) => ID)
	id: number;

	@Column()
	@Field((type) => Int)
	score!: number;

	@Column()
	@Field()
	name!: string;

	@Column()
	@Field()
	address!: string;

	@Column()
	@Field()
	genre!: string;

	@OneToMany((_type) => Review, (review) => review.store, {
		onDelete: 'CASCADE',
	})
	reviews!: Review[];
}
