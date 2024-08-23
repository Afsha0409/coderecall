import { CompletionWhereInput } from "./CompletionWhereInput";
import { CompletionOrderByInput } from "./CompletionOrderByInput";

export type CompletionFindManyArgs = {
  where?: CompletionWhereInput;
  orderBy?: Array<CompletionOrderByInput>;
  skip?: number;
  take?: number;
};
