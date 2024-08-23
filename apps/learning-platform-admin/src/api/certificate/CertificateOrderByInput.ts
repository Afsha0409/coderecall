import { SortOrder } from "../../util/SortOrder";

export type CertificateOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  issueDate?: SortOrder;
  studentId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
