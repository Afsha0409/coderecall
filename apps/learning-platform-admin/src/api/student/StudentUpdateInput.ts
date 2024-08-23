import { CertificateUpdateManyWithoutStudentsInput } from "./CertificateUpdateManyWithoutStudentsInput";
import { CompletionUpdateManyWithoutStudentsInput } from "./CompletionUpdateManyWithoutStudentsInput";
import { InputJsonValue } from "../../types";

export type StudentUpdateInput = {
  certificates?: CertificateUpdateManyWithoutStudentsInput;
  completions?: CompletionUpdateManyWithoutStudentsInput;
  email?: string | null;
  name?: string | null;
  profilePicture?: InputJsonValue;
};
