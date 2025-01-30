import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";
import { InvitationTitle } from "../invitation/InvitationTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { UserTitle } from "../user/UserTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const OrganizationMemberEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
