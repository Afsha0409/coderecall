import { Completion as TCompletion } from "../api/completion/Completion";

export const COMPLETION_TITLE_FIELD = "id";

export const CompletionTitle = (record: TCompletion): string => {
  return record.id?.toString() || String(record.id);
};
