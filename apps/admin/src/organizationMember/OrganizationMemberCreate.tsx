import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

import { InvitationTitle } from "../invitation/InvitationTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { UserTitle } from "../user/UserTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const OrganizationMemberCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="invitation.id"
          reference="Invitation"
          label="Invitation"
        >
          <SelectInput optionText={InvitationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Pending invitation", value: "PendingInvitation" },
            { label: "Activated", value: "Activated" },
            { label: "Suspended", value: "Suspended" },
            { label: "Invitation revoked", value: "InvitationRevoked" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
