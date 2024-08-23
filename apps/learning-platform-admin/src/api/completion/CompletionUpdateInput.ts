import { BadgeUpdateManyWithoutCompletionsInput } from "./BadgeUpdateManyWithoutCompletionsInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type CompletionUpdateInput = {
  badges?: BadgeUpdateManyWithoutCompletionsInput;
  completionDate?: Date | null;
  student?: StudentWhereUniqueInput | null;
  task?: TaskWhereUniqueInput | null;
};
