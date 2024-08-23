import { Certificate } from "../certificate/Certificate";
import { Completion } from "../completion/Completion";
import { JsonValue } from "type-fest";

export type Student = {
  certificates?: Array<Certificate>;
  completions?: Array<Completion>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  profilePicture: JsonValue;
  updatedAt: Date;
};
