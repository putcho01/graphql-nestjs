import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Store } from "./store";
import { StoresResolver } from "./stores.resolver";
import { StoresService } from "./stores.service";

@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  providers: [StoresResolver, StoresService],
})
export class StoresModule {}
