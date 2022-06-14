import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, MaxLength, Min } from "class-validator";

@InputType()
export class NewBookInput {
  constructor() {
    this.title = "";
    this.price = 0;
    this.author = "";
  }

  @Field()
  @MaxLength(30)
  title: string;

  @Field((type) => Int)
  @Min(0)
  @Max(9999)
  price: number;

  @Field((type) => [String])
  author: string;
}
