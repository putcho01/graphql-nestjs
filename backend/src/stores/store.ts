import { Entity, BaseEntity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Review } from 'src/reviews/review';

@Entity({ name: 'stores' })
export class Store extends BaseEntity {
	@PrimaryColumn()
	id!: number;

	@Column()
	score!: number;

	@Column()
	name!: string;

	@Column()
	address!: string;

	@Column()
	genre!: string;

	@OneToMany((_type) => Review, (review) => review.store, {
		onDelete: 'CASCADE',
	})
	reviews!: Review[];
}
