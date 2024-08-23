import { Student } from "../student/Student";

export type Certificate = {
  createdAt: Date;
  id: string;
  issueDate: Date | null;
  student?: Student | null;
  title: string | null;
  updatedAt: Date;
};
