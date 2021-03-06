import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, Max, MaxLength, Min } from "class-validator";

@InputType()
export class NewReviewInput {
  constructor() {
    this.storeId = 1;
    this.score = 0;
    this.title = "";
    this.content = "";
  }

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
