import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Book extends BaseEntity {
  constructor() {
    super();
    this.id = 0;
    this.title = "";
    this.author = "";
    this.price = 0;
    this.createdAt = new Date();
  }

  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column({ length: "30" })
  @Field()
  title: string;

  @Column()
  @Field((type) => [String])
  author: string;

  @Column({ type: "int", unsigned: true })
  @Field((type) => Int)
  price: number;

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}
