import { Module } from '@nestjs/common';
import { StoresResolver } from './stores.resolver';

@Module({
  providers: [StoresResolver]
})
export class StoresModule {}
