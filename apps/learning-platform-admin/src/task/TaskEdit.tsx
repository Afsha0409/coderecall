import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CompletionTitle } from "../completion/CompletionTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="category"
          label="category"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="completions"
          reference="Completion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompletionTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="points" source="points" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
