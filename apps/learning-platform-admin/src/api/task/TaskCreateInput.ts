import { CompletionCreateNestedManyWithoutTasksInput } from "./CompletionCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  category?: "Option1" | null;
  completions?: CompletionCreateNestedManyWithoutTasksInput;
  description?: string | null;
  points?: number | null;
  title?: string | null;
};
