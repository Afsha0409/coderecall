import { BadgeWhereInput } from "./BadgeWhereInput";
import { BadgeOrderByInput } from "./BadgeOrderByInput";

export type BadgeFindManyArgs = {
  where?: BadgeWhereInput;
  orderBy?: Array<BadgeOrderByInput>;
  skip?: number;
  take?: number;
};
