import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { NewStoreInput } from "./dto/newStore.input";
import { Store } from "./store";

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private storesRepostiory: Repository<Store>,
  ) {}

  findAll(): Promise<Store[]> {
    return this.storesRepostiory.find();
  }

  async findOneById(id: number): Promise<Store> {
    const store = await this.storesRepostiory.findOne({ where: { id: id } });
    if (!store) {
      throw new NotFoundException(`Genre with id ${id} not found.`);
    }

    return store;
  }

  async create(data: NewStoreInput): Promise<Store> {
    const store = this.storesRepostiory.create(data);
    await this.storesRepostiory.save(store);
    return store;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.storesRepostiory.delete(id);
    if (!result.affected) {
      return false;
    }
    return result.affected > 0;
  }
}
