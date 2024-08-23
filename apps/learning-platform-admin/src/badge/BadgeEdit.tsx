import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompletionTitle } from "../completion/CompletionTitle";

export const BadgeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
