import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const ClusterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
