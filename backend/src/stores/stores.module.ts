import { Module } from '@nestjs/common';
import { StoresResolver } from './stores.resolver';
import { StoresService } from './stores.service';
import { Store } from './store';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([Store])],
	providers: [StoresResolver, StoresService],
})
export class StoresModule {}
