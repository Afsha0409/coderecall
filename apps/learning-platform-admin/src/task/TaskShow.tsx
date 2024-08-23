import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { TASK_TITLE_FIELD } from "./TaskTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="points" source="points" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Completion"
          target="taskId"
          label="Completions"
        >
          <Datagrid rowClick="show">
            <TextField label="completionDate" source="completionDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
