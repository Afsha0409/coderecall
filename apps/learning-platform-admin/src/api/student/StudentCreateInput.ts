import { CertificateCreateNestedManyWithoutStudentsInput } from "./CertificateCreateNestedManyWithoutStudentsInput";
import { CompletionCreateNestedManyWithoutStudentsInput } from "./CompletionCreateNestedManyWithoutStudentsInput";
import { InputJsonValue } from "../../types";

export type StudentCreateInput = {
  certificates?: CertificateCreateNestedManyWithoutStudentsInput;
  completions?: CompletionCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  name?: string | null;
  profilePicture?: InputJsonValue;
};
