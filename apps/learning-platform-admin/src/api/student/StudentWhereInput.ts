import { CertificateListRelationFilter } from "../certificate/CertificateListRelationFilter";
import { CompletionListRelationFilter } from "../completion/CompletionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type StudentWhereInput = {
  certificates?: CertificateListRelationFilter;
  completions?: CompletionListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  profilePicture?: JsonFilter;
};
