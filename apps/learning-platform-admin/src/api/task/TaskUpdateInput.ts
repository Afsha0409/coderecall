import { CompletionUpdateManyWithoutTasksInput } from "./CompletionUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  category?: "Option1" | null;
  completions?: CompletionUpdateManyWithoutTasksInput;
  description?: string | null;
  points?: number | null;
  title?: string | null;
};
