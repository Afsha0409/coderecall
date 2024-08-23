import { CompletionWhereUniqueInput } from "../completion/CompletionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BadgeWhereInput = {
  completion?: CompletionWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  title?: StringNullableFilter;
};
