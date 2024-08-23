import { BadgeListRelationFilter } from "../badge/BadgeListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type CompletionWhereInput = {
  badges?: BadgeListRelationFilter;
  completionDate?: DateTimeNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
  task?: TaskWhereUniqueInput;
};
