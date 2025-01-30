import { OrganizationMember as TOrganizationMember } from "../api/organizationMember/OrganizationMember";

export const ORGANIZATIONMEMBER_TITLE_FIELD = "id";

export const OrganizationMemberTitle = (
  record: TOrganizationMember
): string => {
  return record.id?.toString() || String(record.id);
};
