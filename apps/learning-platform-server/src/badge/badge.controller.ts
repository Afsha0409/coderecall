import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BadgeService } from "./badge.service";
import { BadgeControllerBase } from "./base/badge.controller.base";

@swagger.ApiTags("badges")
@common.Controller("badges")
export class BadgeController extends BadgeControllerBase {
  constructor(
    protected readonly service: BadgeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
