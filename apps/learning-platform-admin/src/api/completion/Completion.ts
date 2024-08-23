import { Badge } from "../badge/Badge";
import { Student } from "../student/Student";
import { Task } from "../task/Task";

export type Completion = {
  badges?: Array<Badge>;
  completionDate: Date | null;
  createdAt: Date;
  id: string;
  student?: Student | null;
  task?: Task | null;
  updatedAt: Date;
};
