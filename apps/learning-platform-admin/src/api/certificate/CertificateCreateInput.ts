import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type CertificateCreateInput = {
  issueDate?: Date | null;
  student?: StudentWhereUniqueInput | null;
  title?: string | null;
};
