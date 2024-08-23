import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CertificateWhereInput = {
  id?: StringFilter;
  issueDate?: DateTimeNullableFilter;
  student?: StudentWhereUniqueInput;
  title?: StringNullableFilter;
};
