import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompletionServiceBase } from "./base/completion.service.base";

@Injectable()
export class CompletionService extends CompletionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
