import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, Length, MaxLength } from "class-validator";

@InputType()
export class NewStoreInput {
  constructor() {
    this.name = "";
    this.address = "";
    this.genre = "";
    this.score = 0;
  }

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
