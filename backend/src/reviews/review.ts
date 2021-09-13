import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Store } from 'src/stores/store';

@Entity({ name: 'reviews' })
@ObjectType()
export class Review extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field((type) => ID)
	id!: number;

	@Column()
	@Field((type) => ID)
	storeId!: number;

	@Column()
	@Field((type) => Int)
	score!: number;

	@Column()
	@Field()
	title!: string;

	@Column()
	@Field()
	content!: string;

	@ManyToOne((_type) => Store, (store) => store.reviews, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'storeId' })
	store!: Store;
}
