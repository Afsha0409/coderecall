import { SortOrder } from "../../util/SortOrder";

export type CompletionOrderByInput = {
  completionDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
};
