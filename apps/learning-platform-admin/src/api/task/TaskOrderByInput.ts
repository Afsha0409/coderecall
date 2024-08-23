import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
