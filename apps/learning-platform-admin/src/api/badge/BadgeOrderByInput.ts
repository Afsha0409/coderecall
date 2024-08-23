import { SortOrder } from "../../util/SortOrder";

export type BadgeOrderByInput = {
  completionId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
