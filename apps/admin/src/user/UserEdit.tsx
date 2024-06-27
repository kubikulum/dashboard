import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="OIDC ID" source="oidcId" />
        <TextInput label="Organization" source="organization" />
        <ReferenceArrayInput
          source="organizations"
          reference="Organization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="ownerOrganizations.id"
          reference="Organization"
          label="ownerOrganizations"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
