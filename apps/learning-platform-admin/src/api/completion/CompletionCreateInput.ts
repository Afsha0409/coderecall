import { BadgeCreateNestedManyWithoutCompletionsInput } from "./BadgeCreateNestedManyWithoutCompletionsInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type CompletionCreateInput = {
  badges?: BadgeCreateNestedManyWithoutCompletionsInput;
  completionDate?: Date | null;
  student?: StudentWhereUniqueInput | null;
  task?: TaskWhereUniqueInput | null;
};
