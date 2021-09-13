import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Store } from './store';
import { StoresService } from './stores.service';
import { NewStoreInput } from './dto/newStore.input';

@Resolver()
export class StoresResolver {
	constructor(private storesService: StoresService) {}

	@Query((returns) => [Store])
	stores(): Promise<Store[]> {
		return this.storesService.findAll();
	}

	@Query((returns) => Store)
	async getStore(@Args({ name: 'id', type: () => Int }) id: number) {
		const store = await this.storesService.findOneById(id);
		if (!store) {
			throw new NotFoundException(id);
		}
		return store;
	}

	@Mutation((returns) => Store)
	addStore(@Args('newStore') newStore: NewStoreInput): Promise<Store> {
		return this.storesService.create(newStore);
	}

	@Mutation((returns) => Boolean)
	async removeStore(@Args({ name: 'id', type: () => Int }) id: number) {
		return this.storesService.remove(id);
	}
}
