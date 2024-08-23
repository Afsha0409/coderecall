import { Completion } from "../completion/Completion";

export type Task = {
  category?: "Option1" | null;
  completions?: Array<Completion>;
  createdAt: Date;
  description: string | null;
  id: string;
  points: number | null;
  title: string | null;
  updatedAt: Date;
};
