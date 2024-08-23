import { CompletionListRelationFilter } from "../completion/CompletionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TaskWhereInput = {
  category?: "Option1";
  completions?: CompletionListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  points?: IntNullableFilter;
  title?: StringNullableFilter;
};
