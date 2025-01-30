import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const ClusterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="clusterType"
          label="Type"
          choices={[
            { label: "Kubeflow", value: "Kubeflow" },
            { label: "Flytes", value: "Flytes" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="clusterid" source="gardenerShootId" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <SelectInput
          source="plan"
          label="plan"
          choices={[
            { label: "free", value: "Free" },
            { label: "Reserved 1", value: "Reserved_1" },
            { label: "Reserved 2", value: "Reserved_2" },
            { label: "Entreprise", value: "Entreprise" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="region"
          label="Region"
          choices={[
            { label: "Europe Paris 1", value: "EuropeParis_1" },
            { label: "US Ohio 1", value: "UsOhio_1" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
