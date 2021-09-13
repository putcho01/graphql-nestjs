import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Store } from './store';
import { NewStoreInput } from './dto/newStore.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
		const store = await this.storesRepostiory.findOne(id);
		if (!store) {
			throw new NotFoundException(`Genre with id ${id} not found.`);
		}

		return store;
	}

	async findById(id: number): Promise<Store> {
		return await this.storesRepostiory.findOne({ where: { id: id } });
	}

	async create(data: NewStoreInput): Promise<Store> {
		const store = this.storesRepostiory.create(data);
		await this.storesRepostiory.save(store);
		return store;
	}

	async remove(id: number): Promise<boolean> {
		const result = await this.storesRepostiory.delete(id);
		return result.affected > 0;
	}
}
