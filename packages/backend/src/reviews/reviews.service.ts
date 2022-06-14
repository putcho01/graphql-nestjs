import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { NewReviewInput } from "./dto/newReview.input";
import { Review } from "./review";

import { StoresService } from "src/stores/stores.service";

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewsRepostiory: Repository<Review>,
    private storeService: StoresService,
  ) {}

  findAll(): Promise<Review[]> {
    return this.reviewsRepostiory.find();
  }

  async findOneById(id: number): Promise<Review> {
    const review = await this.reviewsRepostiory.findOne({ where: { id: id } });
    if (!review) {
      throw new NotFoundException(`Genre with id ${id} not found.`);
    }

    return review;
  }

  async create({ storeId, ...data }: NewReviewInput): Promise<Review> {
    const store = await this.storeService.findOneById(storeId);
    const review = this.reviewsRepostiory.create({ ...data, store });
    return review.save();
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.reviewsRepostiory.delete(id);
    if (!result.affected) {
      return false;
    }
    return result.affected > 0;
  }
}
