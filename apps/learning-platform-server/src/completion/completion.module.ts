import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CompletionModuleBase } from "./base/completion.module.base";
import { CompletionService } from "./completion.service";
import { CompletionController } from "./completion.controller";
import { CompletionResolver } from "./completion.resolver";

@Module({
  imports: [CompletionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CompletionController],
  providers: [CompletionService, CompletionResolver],
  exports: [CompletionService],
})
export class CompletionModule {}
