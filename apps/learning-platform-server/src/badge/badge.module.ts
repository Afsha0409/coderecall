import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BadgeModuleBase } from "./base/badge.module.base";
import { BadgeService } from "./badge.service";
import { BadgeController } from "./badge.controller";
import { BadgeResolver } from "./badge.resolver";

@Module({
  imports: [BadgeModuleBase, forwardRef(() => AuthModule)],
  controllers: [BadgeController],
  providers: [BadgeService, BadgeResolver],
  exports: [BadgeService],
})
export class BadgeModule {}
