import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompletionTitle } from "../completion/CompletionTitle";

export const BadgeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="completion.id"
          reference="Completion"
          label="Completion"
        >
          <SelectInput optionText={CompletionTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
