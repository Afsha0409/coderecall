import { CompletionWhereUniqueInput } from "../completion/CompletionWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type BadgeUpdateInput = {
  completion?: CompletionWhereUniqueInput | null;
  description?: string | null;
  image?: InputJsonValue;
  title?: string | null;
};
