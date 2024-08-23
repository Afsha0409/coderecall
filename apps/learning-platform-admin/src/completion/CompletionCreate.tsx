import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BadgeTitle } from "../badge/BadgeTitle";
import { StudentTitle } from "../student/StudentTitle";
import { TaskTitle } from "../task/TaskTitle";

export const CompletionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="badges"
          reference="Badge"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BadgeTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="completionDate" source="completionDate" />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <ReferenceInput source="task.id" reference="Task" label="Task">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
