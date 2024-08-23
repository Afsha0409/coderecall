import { Completion } from "../completion/Completion";
import { JsonValue } from "type-fest";

export type Badge = {
  completion?: Completion | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  title: string | null;
  updatedAt: Date;
};
