import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ClusterTitle } from "../cluster/ClusterTitle";
import { InvitationTitle } from "../invitation/InvitationTitle";
import { OrganizationMemberTitle } from "../organizationMember/OrganizationMemberTitle";
import { UserTitle } from "../user/UserTitle";

export const OrganizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="clusters" reference="Cluster">
          <SelectArrayInput
            optionText={ClusterTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput
          label="gardener Project namespace"
          source="gardenerProjectNamespace"
        />
        <ReferenceArrayInput source="invitations" reference="Invitation">
          <SelectArrayInput
            optionText={InvitationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="organizationMembers"
          reference="OrganizationMember"
        >
          <SelectArrayInput
            optionText={OrganizationMemberTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
