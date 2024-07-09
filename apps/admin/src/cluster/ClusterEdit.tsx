import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
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
            { label: "Kubeflow", value: "kubeflow" },
            { label: "Flyte", value: "flyte" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
