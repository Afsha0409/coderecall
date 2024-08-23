import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type CertificateUpdateInput = {
  issueDate?: Date | null;
  student?: StudentWhereUniqueInput | null;
  title?: string | null;
};
